import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EducationCard from "@/components/cards/EducationCard";
import { educations } from "@/data/Educations";

export default function EducationPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-10 text-5xl font-bold">Education</h1>

        <div className="space-y-6">
          {educations.map((item) => (
            <EducationCard
              key={item.institution}
              education={item}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}