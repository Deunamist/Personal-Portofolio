const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "Vue.js",
  "Express.js",
  "Flutter",
  "Firebase",
  "PostgreSQL",
  "MySQL",
  "Figma",
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold">Tech Stack</h2>
        <p className="mt-2 text-neutral-500">
          Technologies and tools that I frequently use.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="rounded-2xl border border-[#323232] bg-[#222222] px-4 py-5 text-center transition hover:bg-[#323232]"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}