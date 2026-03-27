"use client";

const projects = [
  {
    number: "01",
    title: "Jobify – Smart Job Portal",
    tagline:
      "A role-based job platform connecting candidates and employers.",
    description:
      "A full-stack hiring platform with separate employer and candidate flows, secure authentication, job posting, and real-time applications.",
    tech: [
      "Next.js",
      "TypeScript",
      "Django REST",
      "PostgreSQL",
      "JWT Auth",
      "Tailwind CSS",
    ],
    highlights: [
      "Role-based access for employers and candidates.",
      "Secure JWT authentication with protected APIs.",
      "End-to-end hiring workflow.",
    ],
    demo: "https://jobify-frontend-o7fperik2-yatin-coder07s-projects.vercel.app/",
    github: "https://github.com/yatin-coder07/jobify-backend",
  },
  {
    number: "02",
    title: "AI Receipt Scanner",
    tagline:
      "Reads receipts, extracts structured data, and summarizes expenses.",
    description:
      "A SaaS web app that turns messy receipts and PDFs into clean financial data using AI workflows.",
    tech: ["Next.js", "TypeScript", "Convex", "OpenAI", "Stripe", "Vercel"],
    highlights: [
      "Upload → parse → extract → summarize pipeline.",
      "AI-powered expense categorization.",
      "Stripe-based subscriptions.",
    ],
    demo: "https://my-reciept-app.vercel.app/",
    github: "https://github.com/yatin-coder07/Ai-Receipt-app",
  },
  {
    number: "03",
    title: "AI Report Maker",
    tagline:
      "Turns raw input into clear, structured, ready-to-use reports.",
    description:
      "An AI-powered platform that converts unstructured text into professional reports with clean formatting.",
    tech: [
      "Next.js",
      "TypeScript",
      "OpenAI",
    ],
    highlights: [
      "Automatic structured report generation.",
      "Consistent formatting system.",
      "Reduces manual work by ~70%.",
    ],
    demo: "https://ai-report-maker.vercel.app/",
    github: "https://github.com/yatin-coder07",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white">
     <div className="relative py-32 bg-black text-white">
  
  {/* TOP LINE */}
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="mb-12 space-y-4">
      
      {/* SMALL LABEL */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
        <span>More Work</span>
      </div>

      {/* HEADING */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Some other personal projects
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-400 max-w-2xl text-base">
        Smaller experiments, side builds, and ideas I explored while working on different concepts —
        focusing on speed, creativity, and problem-solving.
      </p>
    </div>

  </div>

  {/* OPTIONAL GRID (future ready) */}
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <h3 className="text-lg font-semibold mb-2">Coming soon</h3>
      <p className="text-sm text-gray-400">
        Additional experiments and tools will be showcased here.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <h3 className="text-lg font-semibold mb-2">More builds</h3>
      <p className="text-sm text-gray-400">
        Exploring new ideas in AI, automation, and product design.
      </p>
    </div>

  </div>
</div>
      {projects.map((project, i) => (
        <section key={i} className="h-screen flex">
          
          {/* LEFT (ONLY THIS IS STICKY) */}
          <div className="w-1/3 sticky top-0 h-screen flex items-center justify-center border-r border-white/10">
            <h1 className="text-[220px] md:text-[300px] font-extrabold opacity-20">
              {project.number}
            </h1>
          </div>

          {/* RIGHT (THIS SCROLLS) */}
          <div className="w-2/3 h-screen overflow-y-auto px-16 py-20">
            
            <div className="max-w-2xl space-y-16">
              
              {/* TITLE */}
              <div>
                <h2 className="text-5xl font-bold">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-400 mt-2">
                  {project.tagline}
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* EXTRA CONTENT (IMPORTANT FOR SCROLL FEEL) */}
              <p className="text-gray-400 leading-relaxed">
                This project focuses on scalability, performance, and real-world
                usability. The architecture ensures smooth workflows and clean
                separation of concerns between frontend and backend systems.
              </p>

              {/* FEATURES */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {project.highlights.map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="h-2 w-2 bg-indigo-500 rounded-full mt-2" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECH */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 pt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-indigo-600 font-semibold"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl border border-white/20"
                >
                  GitHub
                </a>
              </div>

              {/* SPACE FOR SCROLL */}
              <div className="h-[200px]" />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}