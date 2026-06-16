import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-2 text-5xl font-bold">Projects</h1>
        <p className="mb-10 text-neutral-400">
          A collection of projects that I have built and contributed to.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}