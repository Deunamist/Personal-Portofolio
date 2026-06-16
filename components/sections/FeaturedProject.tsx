import Link from "next/link";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/Projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-bold">Featured Projects</h2>

          <p className="mt-2 text-neutral-500">
            Some of the projects that I have developed.
          </p>
        </div>

        <Link
          href="/projects"
          className="text-sm text-neutral-300 transition hover:text-white"
        >
          View All →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}