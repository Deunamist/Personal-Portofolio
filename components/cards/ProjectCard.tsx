import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#323232] bg-[#222222] transition duration-300 hover:-translate-y-1 hover:border-[#5c5c5c]">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#323232] px-3 py-1 text-xs text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
            >
              Github
              </a>
          )}

          {project.show && (
            <a
              href={project.show}
              target="_blank"
              className="flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
            >
              show
            </a>
          )}
          
        </div>
      </div>
    </article>
  );
}