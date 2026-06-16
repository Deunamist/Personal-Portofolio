export interface Organization {
  position: string;
  organization: string;
  period: string;
  description: string;
}

export const organizations: Organization[] = [
  {
    position: "Vice Leader",
    organization: "Keluarga Mahasiswa Hindu Telkom University",
    period: "Mar 2024 – Dec 2025",
    description:
      "Responsible for planning and scheduling all divisions quarterly, in accordance with campus policies. I also assist division heads and other members when they encounter confusion or deficiencies in designing their work programs. Achievements include receiving an invitation to the 2025 State-Owned Enterprise Dharma Santi Awards and providing scholarships to Hindu students at Telkom University.",
  },
  {
    position: "Head of External Department",
    organization: "Himpunan Mahasiswa Teknologi Informasi",
    period: "May 2025 – Dec 2025",
    description:
      "Responsible to coordinated the Public Relations and Communication divisions by maintaining workflows and supporting members in program execution. Contributed to successful initiatives, including a village data privacy campaign, a comparative study with HIMASKOM UNDIP, media partnerships, corporate visits, consistent content delivery, and the “Best Brightest Content Creator Q3 2025” award.",
  },
  {
    position: "NodeMCU Laboratory Assistant",
    organization: "IoT Laboratory Telkom University",
    period: "May 2025 – Jun 2026",
    description:
      "Responsible to teaching embedded systems, hardware integration, and IoT protocols while mentoring 42 students in practical sessions and also contributed to developing an IoT-based hydroponic system using TDS, temperature, and pH sensors integrated with the eHydroTel app to support the AyoBeraksi food security program at SDN Sukarasari 5, Tangerang.",
  },
];