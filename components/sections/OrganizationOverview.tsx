import Link from "next/link";
import { organizations } from "@/data/Organizations";

export default function OrganizationalOverview() {
  return (
    <div className="rounded-3xl border border-[#323232] bg-[#222222] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Organizational Experience
        </h2>

        <Link
          href="/organizations"
          className="text-sm text-neutral-400 hover:text-white"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-5">
        {organizations.slice(0, 2).map((org, index) => (
          <div
            key={index}
            className="border-l-2 border-[#464646] pl-4"
          >
            <h3 className="font-semibold">{org.position}</h3>

            <p className="text-sm text-neutral-400">
              {org.organization}
            </p>

            <p className="text-xs text-neutral-500">
              {org.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}