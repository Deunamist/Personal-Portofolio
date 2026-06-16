import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationCard from "@/components/cards/OrganizationCard";
import { organizations } from "@/data/Organizations";

export default function OrganizationsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">
          Organizational Experience
        </h1>

        <div className="grid gap-6">
          {organizations.map((org, index) => (
            <OrganizationCard
              key={index}
              organization={org}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}