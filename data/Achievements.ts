export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    title: "The 2024 Student Creativity Program (PKM) Innovation Idea passed the university level",
    organization: "Pekan Kreativitas Mahasiswa 2024",
    year: "Jan 2024",
    description:
      "Designed an innovative Internet of Things prototype to detect water levels and prevent river water from overflowing into residents' residential areas.",
  },
  {
    title: "The 3rd International Conference on Software Engineering and Information Technology",
    organization: "ICoSEIT",
    year: "Oct 2025",
    description:
      "Presented research on Low-Cost Virtual pH Sensor for IoT-Based Hydroponics System using regression machine learning methods.",
  },
  {
    title: "Certificate of Achievement - Core Initiative Frontend Project Based Internship Program as Excellent Student (Score 87.42",
    organization: "Rakamin Academy",
    year: "Mar 2026",
    description:
      "Develop a VueJS-based e-commerce frontend that integrates with FakeStoreAPI to dynamically fetch product data. Implemented API integration, category filtering for men's and women's clothing, and reactive state management to ensure stable performance and automatic UI updates based on changing data.",
  },
];