// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";



export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) return notFound();


  const demoUrl = (project as any).demoUrl as string | undefined;
  const githubUrl = (project as any).githubUrl as string | undefined;

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28 space-y-12">
      
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-sky-500/40">
          <div className="rounded-3xl bg-white/85 dark:bg-slate-950/90 border border-white/60 dark:border-white/10 backdrop-blur-2xl px-5 py-5 md:px-7 md:py-6 shadow-2xl space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {project.title}
                </h1>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                  {project.description}
                </p>
              </div>

            
              <div className="flex flex-col items-stretch gap-2 text-xs md:text-sm min-w-[160px]">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium
                               bg-white/10 dark:bg-white/5 border border-white/30
                               text-slate-800 dark:text-slate-200
                               shadow-sm
                               transform transition-all duration-200
                               hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-lg
                               active:translate-y-0 active:scale-100"
                  >
                    {/* GitHub logo (inline SVG, no extra deps) */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current opacity-80 group-hover:opacity-100 transition-opacity"
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.395 7.868 10.915.576.107.787-.247.787-.555 0-.274-.01-1.002-.015-1.967-3.199.695-3.874-1.542-3.874-1.542-.524-1.33-1.28-1.684-1.28-1.684-1.046-.716.079-.701.079-.701 1.158.082 1.768 1.188 1.768 1.188 1.028 1.762 2.697 1.253 3.354.958.104-.744.402-1.253.73-1.54-2.553-.29-5.236-1.277-5.236-5.682 0-1.255.45-2.282 1.187-3.087-.119-.29-.515-1.458.112-3.04 0 0 .968-.31 3.172 1.18a10.95 10.95 0 0 1 2.888-.389c.98.005 1.97.132 2.893.389 2.203-1.49 3.17-1.18 3.17-1.18.628 1.582.232 2.75.114 3.04.739.805 1.186 1.832 1.186 3.087 0 4.417-2.688 5.389-5.252 5.674.414.355.783 1.057.783 2.133 0 1.54-.014 2.78-.014 3.158 0 .31.21.668.793.554C20.213 21.39 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
                    </svg>
                    <span>View on GitHub</span>
                  </a>
                )}

                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold
                               bg-indigo-600 text-white shadow-md
                               transform transition-all duration-200
                               hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-indigo-500/40
                               active:translate-y-0 active:scale-100"
                  >
                    <span>Live demo</span>
                    <span className="text-[0.65rem] uppercase tracking-wide opacity-80 group-hover:opacity-100">
                      open app
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="relative px-3 py-1 rounded-full text-[0.7rem] md:text-xs
                             bg-slate-900/5 dark:bg-white/5
                             border border-slate-200/70 dark:border-slate-700
                             text-slate-700 dark:text-slate-200
                             overflow-hidden"
                >
                  {tech}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))",
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 1 — text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Overview & Problem
            </h2>
            <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.explanation}
            </p>
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-4 py-3 text-xs md:text-sm text-slate-700 dark:text-slate-200">
              Role: <span className="font-semibold">Full-stack · Product · AI Integration</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-400/20 blur-2xl -z-10" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 flex items-center justify-center">
              <img
                src={project.image1}
                alt={`${project.title} screenshot 1`}
                className="w-full h-80 object-contain object-center bg-slate-950"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 — image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative order-1 md:order-none">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-purple-400/20 blur-2xl -z-10" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 flex items-center justify-center">
              <img
                src={project.image2}
                alt={`${project.title} screenshot 2`}
                className="w-full h-80 object-contain object-center bg-slate-950"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 leading-relaxed">
              Each step in the app flows from user input to AI processing seamlessly:
              input → validation → async processing → AI calls → storage → updates.
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                <span>Clean separation between UI, backend, and AI workflows.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                <span>Smooth and responsive UX under async operations.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                <span>Built for real-world reliability and scale.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 — text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Learnings & Next Steps
            </h2>
            <p className="text-sm md:text-[0.95rem] text-slate-600 dark:text-slate-300 leading-relaxed">
              This project refined my ability to deliver complete AI-integrated products.
              Future improvements include smarter analytics, smoother onboarding,
              and more automated flows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-3 py-3">
                <div className="text-slate-500 dark:text-slate-400 text-[0.7rem] mb-1">
                  Focus
                </div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  Product + AI
                </div>
              </div>
              <div className="rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-3 py-3">
                <div className="text-slate-500 dark:text-slate-400 text-[0.7rem] mb-1">
                  Area
                </div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  {project.id === "ai-receipt-scanner"
                    ? "Receipts / Finance"
                    : "Outreach / Growth"}
                </div>
              </div>
              <div className="rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 px-3 py-3">
                <div className="text-slate-500 dark:text-slate-400 text-[0.7rem] mb-1">
                  Next Step
                </div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  {project.id === "ai-receipt-scanner"
                    ? "Deeper analytics"
                    : "Better lead scoring"}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-400/30 via-indigo-500/20 to-purple-500/20 blur-2xl -z-10" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 flex items-center justify-center">
              <img
                src={project.image3}
                alt={`${project.title} screenshot 3`}
                className="w-full h-80 object-contain object-center bg-slate-950"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
