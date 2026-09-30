export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export const educations: Education[] = [
  {
    institution: "Telkom University",
    degree: "Bachelor of Information Technology",
    period: "2022 - 2026",
    gpa: "3.65 / 4.00",
  },
];