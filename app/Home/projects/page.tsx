import { FocusCards } from "@/components/ui/focus-cards";

export function ProjectCards() {
  const cards = [
    {
      id: 1,
      title: "SportZi",
      src: "/images/sportziLogo2.png",
      subtitle: "Sport Facility Management System",
      description:
        "A web application, designed to streamline sports management by connecting athletes, coaches, and sports facilities. The platform enables users to easily schedule and manage bookings, offering personalized training options, preventing conflicts with real-time updates.",

      contribution:
        "Contributed to the development of the booking management system, including secure payment gateways, streamlined cancellations, and user profile updates. Worked on the admin dashboard for user management, facility booking oversight, and report generation to analyze facility usage and transaction trends.",
      role: "Team leader | Full Stack Developer",
      github: "https://github.com/TiOlabs/SportZi-FrontEnd/",
      web: "https://sportzi.live/",
      technologies: [
        {
          id: 1,
          name: "React",
          // designation: "Software Engineer",
          image: "/images/react.png",
        },
        {
          id: 2,
          name: "Express",
          // designation: "Product Manager",
          image: "/images/express1.png",
        },
        {
          id: 3,
          name: "MySQL",
          // designation: "Data Scientist",
          image: "/images/mysql1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Rise Up Mora",
      src: "/images/riseupmoralogo2.png",
      subtitle: "Career Fair Mock Interview Allocation Platform",
      description:
        "A career fair web platform organized by IEEE University of Moratuwa, facilitating mock interviews with participation from over 40 companies and 450+ candidates. The site includes features for undergraduate registration, panelist and coordinator management, and interview scheduling.",
      contribution: "",
      role: "Full Stack Developer",
      github: "https://github.com/IEEESBUOM/risupmora24/",
      web: "https://riseupmora.lk/",
      technologies: [
        {
          id: 1,
          name: "Next.js",
          // designation: "Software Engineer",
          image: "/images/nexticon.png",
        },
        {
          id: 2,
          name: "PostgreSQL",
          // designation: "Product Manager",
          image: "/images/postgresqlicon.png",
        },
      ],
    },
    {
      id: 3,
      title: "IEEE SB UOM",
      src: "/images/ieeesbuomlogo1.png",
      subtitle: "Official Website IEEE Student Branch University of Moratuwa",
      description:
        "The official website of the IEEE Student Branch at the University of Moratuwa serves as a hub for showcasing the branch’s achievements and activities. It features an event timeline, highlights awards, recognizes partners, introduces the team, and publishes newsletters.",
      contribution: "",
      role: "Frontend Developer",
      github: "https://github.com/WDMC-IEEESBUOM/ieeesb-official-web",
      web: "https://ieeesb.uom.lk/",
      technologies: [
        {
          id: 1,
          name: "Next.js",
          // designation: "Software Engineer",
          image: "/images/nexticon.png",
        },
      ],
    },
    {
      id: 4,
      title: "EAP",
      src: "/images/eaplogo1.png",
      subtitle:
        "Foreign Student Registration Platform - University of Moratuwa",
      description:
        "A user-friendly website for the Foreign Student Registration platform at the University of Moratuwa. Ensured seamless integration of registration functionalities and provided a clean interface for easy navigation, optimizing the experience for international students.",
      contribution: "",
      role: "UI Designer",
      github:
        "https://www.figma.com/design/xIWP4XCNWpbWKl14Ca8OrU/EAP?node-id=0-1&node-type=canvas&t=8HH7DzKkYSi9iLwM-0",
      web: "https://www.figma.com/design/xIWP4XCNWpbWKl14Ca8OrU/EAP?node-id=0-1&node-type=canvas&t=8HH7DzKkYSi9iLwM-0",
      technologies: [
        {
          id: 1,
          name: "Figma",
          // designation: "Software Engineer",
          image: "/images/figmaicon.png",
        },
      ],
    },
    {
      id: 5,
      title: "Pet Caretaker",
      src: "/images/petCaretakerlogo1.png",
      subtitle: "",
      description:
        "A IoT-based solution designed to assist pet owners in managing their pets' needs when away. The system automates feeding schedules and provides entertainment through interactive features. With real-time monitoring and control, owners can ensure their pets are well-fed and engaged, reducing stress and enhancing pet well-being during extended absences.",
      contribution: "",
      role: "",
      github: "",
      web: "",

      technologies: [
        {
          id: 1,
          name: "React",
          // designation: "Software Engineer",
          image: "/images/react.png",
        },
        {
          id: 2,
          name: "Express",
          // designation: "Product Manager",
          image: "/images/express.png",
        },
        {
          id: 3,
          name: "Arduino",
          // designation: "Data Scientist",
          image: "/images/arduino.png",
        },
      ],
    },
    {
      id: 6,
      title: "Me",
      src: "/images/n.png",
      subtitle: "My Portfolio",
      description: "You are here!",
      contribution: "",
      role: "",
      github: "https://github.com/NCnNU/Portfolio-Navindu",
      web: "https://github.com/NCnNU/Portfolio-Navindu",
      technologies: [
        {
          id: 1,
          name: "Next.js",
          // designation: "Software Engineer",
          image: "/images/nexticon.png",
        },
      ],
    },
  ];

  return <FocusCards cards={cards} />;
}
