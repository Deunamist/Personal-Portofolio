import Link from "next/link";
import type { Experience } from "@/data/Experiences";

interface Props {
  experience: Experience;
  showViewAll?: boolean;
}

export default function ExperienceCard({
  experience,
  showViewAll = false,
}: Props) {
  return (
    <article className="rounded-3xl border border-[#323232] bg-[#222222] p-6 transition hover:border-[#5c5c5c]">
      <p className="text-sm text-neutral-500">{experience.period}</p>

      <h3 className="mt-2 text-xl font-semibold">
        {experience.role}
      </h3>

      <p className="text-neutral-300">{experience.company}</p>

      <p className="mt-4 line-clamp-4 text-sm leading-6 text-neutral-400">
        {experience.description}
      </p>

      {showViewAll && (
        <Link
          href="/experience"
          className="mt-6 inline-block text-sm font-medium hover:underline"
        >
          View All →
        </Link>
      )}
    </article>
  );
}