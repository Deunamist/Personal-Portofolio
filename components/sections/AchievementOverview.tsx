import Link from "next/link";
import { achievements } from "@/data/Achievements";

export default function AchievementOverview() {
  return (
    <div className="rounded-3xl border border-[#323232] bg-[#222222] p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Achievements</h2>

        <Link
          href="/achievements"
          className="text-sm text-neutral-400 hover:text-white"
        >
          View All →
        </Link>
      </div>

      <ul className="space-y-4">
        {achievements.slice(0, 2).map((item, index) => (
          <li key={index}>
            <p className="font-medium">{item.title}</p>

            <p className="text-sm text-neutral-400">
              {item.organization}
            </p>

            <p className="text-xs text-neutral-500">
              {item.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}