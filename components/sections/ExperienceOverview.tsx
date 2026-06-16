import Link from "next/link";
import { experiences } from "@/data/Experiences";

export default function ExperienceOverview() {
  return (
    <div className="rounded-3xl border border-[#323232] bg-[#222222] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Work Experience</h2>

        <Link
          href="/experience"
          className="text-sm text-neutral-400 hover:text-white"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-6">
        {experiences.slice(0, 3).map((exp, index) => (
          <div
            key={index}
            className="border-l-2 border-[#464646] pl-4"
          >
            <h3 className="font-semibold">{exp.role}</h3>

            <p className="text-sm text-neutral-400">
              {exp.company}
            </p>

            <p className="mt-1 text-xs text-neutral-500">
              {exp.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}