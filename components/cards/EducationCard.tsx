import Link from "next/link";
import type { Education } from "@/data/Educations";

interface Props {
  education: Education;
  showViewAll?: boolean;
}

export default function EducationCard({
  education,
  showViewAll = false,
}: Props) {
  return (
    <article className="rounded-3xl border border-[#323232] bg-[#222222] p-6 transition hover:border-[#5c5c5c]">
      <p className="text-sm text-neutral-500">
        {education.period}
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        {education.institution}
      </h3>

      <p className="text-neutral-300">{education.degree}</p>

      {education.gpa && (
        <p className="mt-4 text-sm text-neutral-400">
          GPA: {education.gpa}
        </p>
      )}

      {showViewAll && (
        <Link
          href="/education"
          className="mt-6 inline-block text-sm font-medium hover:underline"
        >
          View All →
        </Link>
      )}
    </article>
  );
}