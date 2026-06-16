import Link from "next/link";
import type { Achievement } from "@/data/Achievements";

interface Props {
  achievement: Achievement;
  showViewAll?: boolean;
}

export default function AchievementCard({
  achievement,
  showViewAll = false,
}: Props) {
  return (
    <article className="rounded-3xl border border-[#323232] bg-[#222222] p-6 transition hover:border-[#5c5c5c]">
      <p className="text-sm text-neutral-500">
        {achievement.year}
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        {achievement.title}
      </h3>

      <p className="mt-2 text-neutral-300">
        {achievement.organization}
      </p>

      {achievement.description && (
        <p className="mt-4 line-clamp-4 text-sm leading-6 text-neutral-400">
          {achievement.description}
        </p>
      )}

      {showViewAll && (
        <Link
          href="/achievements"
          className="mt-6 inline-block text-sm font-medium hover:underline"
        >
          View All →
        </Link>
      )}
    </article>
  );
}