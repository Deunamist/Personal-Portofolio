import Link from "next/link";
import { educations } from "@/data/Educations";

export default function EducationOverview() {
  const edu = educations[0];

  return (
    <div className="rounded-3xl border border-[#323232] bg-[#222222] p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Education</h2>

        <Link
          href="/education"
          className="text-sm text-neutral-400 hover:text-white"
        >
          View All →
        </Link>
      </div>

      <h3 className="font-semibold">{edu.institution}</h3>

      <p className="text-sm text-neutral-400">
        {edu.degree}
      </p>

      <p className="mt-2 text-xs text-neutral-500">
        {edu.period}
      </p>

      {edu.gpa && (
        <p className="mt-2 text-sm">
          GPA: {edu.gpa}
        </p>
      )}
    </div>
  );
}