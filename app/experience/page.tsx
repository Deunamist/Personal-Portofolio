import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/Experiences";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-10 text-5xl font-bold">Experience</h1>

        <div className="space-y-6">
          {experiences.map((item) => (
            <ExperienceCard
              key={`${item.company}-${item.role}`}
              experience={item}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}