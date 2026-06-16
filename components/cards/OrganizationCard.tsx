interface OrganizationCardProps {
  organization: {
    position: string;
    organization: string;
    period: string;
    description: string;
  };
}

export default function OrganizationCard({
  organization,
}: OrganizationCardProps) {
  return (
    <div className="rounded-2xl border border-[#323232] bg-[#222222] p-6 transition-all duration-300 hover:border-[#5c5c5c]">
      <h3 className="text-lg font-semibold text-white">
        {organization.position}
      </h3>

      <p className="mt-1 text-sm text-neutral-400">
        {organization.organization}
      </p>

      <p className="mt-1 text-xs text-neutral-500">
        {organization.period}
      </p>

      <p className="mt-4 text-sm leading-6 text-neutral-300">
        {organization.description}
      </p>
    </div>
  );
}