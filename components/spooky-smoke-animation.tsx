"use client";

import React, { useEffect, useRef, useState } from "react";

/* ================= SHADER ================= */
const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));
  col=mix(vec3(.08),col,min(time*.1,1.));
  col=clamp(col,.08,1.);
  O=vec4(col,1);
}`;

/* ================= RENDERER ================= */
class Renderer {
  private gl: WebGL2RenderingContext | null = null;
  private canvas: HTMLCanvasElement;
  private program: WebGLProgram | null = null;
  private buffer: WebGLBuffer | null = null;
  private color: [number, number, number] = [0.5, 0.5, 0.5];

  constructor(canvas: HTMLCanvasElement, fragmentSource: string) {
    this.canvas = canvas;

    // ✅ ONLY WEBGL2 (required)
    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    this.gl = gl;

    this.setup(fragmentSource);
    this.init();
  }

  isReady() {
    return !!this.gl && !!this.program;
  }

  updateColor(newColor: [number, number, number]) {
    this.color = newColor;
  }

  updateScale() {
    if (!this.gl) return;

    const dpr = Math.max(1, window.devicePixelRatio);
    const { innerWidth, innerHeight } = window;

    this.canvas.width = innerWidth * dpr;
    this.canvas.height = innerHeight * dpr;

    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  private compile(shader: WebGLShader, source: string) {
    if (!this.gl) return;
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
  }

  private setup(fragmentSource: string) {
    if (!this.gl) return;

    const gl = this.gl;

    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();

    if (!vs || !fs || !program) return;

    const vertexSrc = `#version 300 es
    precision highp float;
    in vec4 position;
    void main(){ gl_Position = position; }`;

    this.compile(vs, vertexSrc);
    this.compile(fs, fragmentSource);

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    this.program = program;
  }

  private init() {
    if (!this.gl || !this.program) return;

    const gl = this.gl;

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
      gl.STATIC_DRAW
    );

    const position = gl.getAttribLocation(this.program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    Object.assign(this.program, {
      resolution: gl.getUniformLocation(this.program, "resolution"),
      time: gl.getUniformLocation(this.program, "time"),
      u_color: gl.getUniformLocation(this.program, "u_color"),
    });
  }

  render(now = 0) {
    if (!this.gl || !this.program) return;

    const gl = this.gl;

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(this.program);

    gl.uniform2f(
      (this.program as any).resolution,
      this.canvas.width,
      this.canvas.height
    );

    gl.uniform1f((this.program as any).time, now * 0.001);
    gl.uniform3fv((this.program as any).u_color, this.color);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  reset() {
    if (!this.gl || !this.program) return;
    this.gl.deleteProgram(this.program);
  }
}

/* ================= UTILS ================= */
const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : null;
};

/* ================= COMPONENT ================= */
export const SmokeBackground = ({
  smokeColor = "#808080",
}: {
  smokeColor?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new Renderer(canvasRef.current, fragmentShaderSource);

    if (!renderer.isReady()) {
      setSupported(false); // ❌ fallback trigger
      return;
    }

    rendererRef.current = renderer;

    const resize = () => renderer.updateScale();
    resize();
    window.addEventListener("resize", resize);

    let frame: number;
    const loop = (t: number) => {
      renderer.render(t);
      frame = requestAnimationFrame(loop);
    };

    loop(0);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
      renderer.reset();
    };
  }, []);

  useEffect(() => {
    const rgb = hexToRgb(smokeColor);
    if (rgb && rendererRef.current) {
      rendererRef.current.updateColor(rgb);
    }
  }, [smokeColor]);

  return (
    <div className="absolute inset-0">
      {/* ✅ WebGL Canvas */}
      {supported && (
        <canvas ref={canvasRef} className="w-full h-full block" />
      )}

      {/* 🔥 Fallback (NEVER broken UI) */}
      {!supported && (
        <div
          className="w-full h-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${smokeColor}, #000)`,
          }}
        />
      )}
    </div>
  );
};