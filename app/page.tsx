import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProject";
import Contact from "@/components/sections/Contact";

import ExperienceOverview from "@/components/sections/ExperienceOverview";
import EducationOverview from "@/components/sections/EducationOverview";
import AchievementOverview from "@/components/sections/AchievementOverview";
import OrganizationalOverview from "@/components/sections/OrganizationOverview";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-12">
        <Hero />

        <About />

        <section className="grid gap-6 lg:grid-cols-2">
        <ExperienceOverview />

        <EducationOverview />

        <OrganizationalOverview />

        <AchievementOverview />
        </section>

        <TechStack />

        <FeaturedProjects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}