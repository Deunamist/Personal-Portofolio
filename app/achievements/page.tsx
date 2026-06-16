import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AchievementCard from "@/components/cards/AchievementCard";
import { achievements } from "@/data/Achievements";

export default function AchievementsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-10 text-5xl font-bold">Achievements</h1>

        <div className="space-y-6">
          {achievements.map((item) => (
            <AchievementCard
              key={`${item.title}-${item.year}`}
              achievement={item}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}