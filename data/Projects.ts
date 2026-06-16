export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  show?: string;
}

export const projects: Project[] = [
  {
    title: "Mobile App - EMONIC ",
    description:
      "mobile application that functions as a daily electricity recording tool. This application helps users efficiently monitor, record, and manage daily electricity usage using Flutter, integrated with Firebase for authentication and Cloud Firestore as the primary database.",
    image: "/images/projects/Beranda.jpg",
    technologies: ["Flutter", "Firebase"],
    show: "https://github.com/nudledry/emonic",
  },
  {
    title: "A Low-Cost Virtual pH Sensor for IoT-Based Hydroponics System",
    description:
      " a low-cost virtual pH sensor for IoT-Based Hydroponics using regression machine learning algorithms such as KNN, XGBoost, and Decision Tree to predict pH values based on TDS and temperature data collected by IoT devices.",
    image: "/images/projects/IoT.png",
    technologies: ["Internet of Things", "Machine Learning"],
    show: "https://colab.research.google.com/drive/1EYlhnt7-E4LZI46YhPL3nIvJTO_RL9vp?usp=sharing",
  },
  {
    title: "IoT and Website -Based Attendance System",
    description:
      "IoT-based attendance system using ESP32, RFID RC522, LCD I2C, and buzzer, integrated with a web dashboard built with ReactJS, ExpressJS, and Firebase. The system enables attendance monitoring, schedule management, manual attendance adjustments, and CSV report.",
    image: "/images/projects/Web Presensi.png",
    technologies: ["Internet of Things", "ReactJS", "ExpressJS", "Firebase"],
    show: "https://drive.google.com/file/d/19mQPwTx3dOtKEg3pOIoRZUhGcn38Abmh/view"
  },
  {
    title: "West Java Library and Archives Service Book Endowment Website",
    description:
      "web-based book waqf platform that streamlines book donation and request processes through three main roles: users, admins, and super admins. The system provides transaction tracking, digital certificates, and administrative tools to ensure transparency and accountability.",
    image: "/images/projects/Wajit.jpeg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Docker"],
    show: "https://drive.google.com/file/d/1pu34MzUkV2Spu1DHxN6R1sn_BWJdX3zi/view"
  },
  {
    title: "Project-Based Virtual Intern : Frontend Developer Core Initiative x Rakamin Academy",
    description:
      "VueJS-based e-commerce frontend that integrates with FakeStoreAPI to dynamically fetch product data. Implemented API integration, category filtering for men's and women's clothing, and reactive state management to ensure stable performance and automatic UI updates based on changing data.",
    image: "/images/projects/Rakamin.png",
    technologies: ["Vue.js"],
    show: "https://drive.google.com/file/d/185vse2cm-FA8kfdN4fk-V2JYa0LrMOhq/view"
  },
  {
    title: "UI/UX - EMONIC",
    description:
      "Implementing UI/UX design to fulfill the main assignment requirements of the User Experience course by creating an energy monitoring application that can periodically check and monitor electrical energy conditions.",
    image: "/images/projects/Home UI.png",
    technologies: ["Figma"],
    show: "https://www.figma.com/design/V9LWZh2XbhjbfUDTRhSrSy/Arkavidia-HOKI?node-id=0-1&t=banyBKg0gZQ02KcA-1"
  },
  {
    title: "Re-Design Webiste SITU TAK Telkom University",
    description:
      "Implementing UI/UX design enhancements to meet the requirements of the major assignment for the Human-Computer Interaction course, using the Situ TAK website as a reference. A timeline feature has been added so users can track the TAK validation process in the form of a monthly calendar.",
    image: "/images/projects/Redesign.png",
    technologies: ["Figma"],
    show: "https://www.figma.com/design/tiRiN7gsoDCKn57cv2eqoG/Web-SITU-TAK?node-id=96-437&t=5P2qwgl1psWL4yip-1"
  },
  {
    title: "Website Energy Monitoring Using laravel",
    description:
      "Web-based energy monitoring system using Laravel to monitor energy consumption in real time. The system includes an interactive dashboard that can perform CRUD on electricity usage data and determine maximum usage limits, a news feature that contains comprehensive information.",
    image: "/images/projects/Laravel.jpg",
    technologies: ["Laravel", "MYSQL"],
    show: "https://github.com/pararel/webpro"
  },
  {
    title: "Penerapan Teknologi Internet of Things (IoT) pada Sistem Hidroponik untuk Mendukung Program Ketahanan Pangan",
    description:
      "Assisting in develop of an IoT-based hydroponic system using TDS sensors, temperature sensors, pH sensors, water pumps, and pH solutions integrated with the eHydroTel application to support the AyoBeraksi food security program at SDN Sukarasari 5, Tangerang City.",
    image: "/images/projects/Pengmas.jpeg",
    technologies: ["Internet of Things"],
    show: "https://drive.google.com/file/d/1DZeaA3Hg-hZoehHkV-98cacppTWEnfRN/view"
  },
];