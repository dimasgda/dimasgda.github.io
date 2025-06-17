import Bootstrap from "../components/icon/Bootstrap.astro";
import Express from "../components/icon/Express.astro";
import Figma from "../components/icon/Figma.astro";
import Laravel from "../components/icon/Laravel.astro";
import Mysql from "../components/icon/Mysql.astro";
import Postgre from "../components/icon/Postgre.astro";
import React from "../components/icon/React.astro";
import Tailwind from "../components/icon/Tailwind.astro";
import imgProfile from "../assets/default.webp";
import agsatu from "../assets/agsatu.png";
import dlabs from "../assets/dlabs.png";
import dimfordev from "../assets/dimfordev.png";
import smkn1kediri from "../assets/smkn1kediri.png";
import polinema from "../assets/polinema.png";

export const testimonials = [
  {
    name: "Putut",
    quote:
      "The work was completed on time with satisfying results. Open to feedback, and quick to respond to questions or changes.",
    profile: imgProfile,
  },
  {
    name: "Yudi",
    quote:
      "The project was delivered on schedule, exactly as agreed. The pricing was matched the quality provided.",
    profile: imgProfile,
  },
];

export const skills = [
  {
    group: "Design Tools:",
    child: [
      {
        icon: Figma,
        name: "Figma",
      },
    ],
  },
  {
    group: "Frontend:",
    child: [
      {
        icon: Bootstrap,
        name: "Bootstrap",
      },
      {
        icon: Tailwind,
        name: "TailwindCSS",
      },
      {
        icon: React,
        name: "React",
      },
    ],
  },
  {
    group: "Backend:",
    child: [
      {
        icon: Laravel,
        name: "Laravel",
      },
      {
        icon: Express,
        name: "Express",
      },
    ],
  },
  {
    group: "Database:",
    child: [
      {
        icon: Postgre,
        name: "PostgreSQL",
      },
      {
        icon: Mysql,
        name: "MySQL",
      },
    ],
  },
  {
    group: "Softskills:",
    child: [
      {
        name: "Team Work",
      },
      {
        name: "Communication",
      },
      {
        name: "Problem Solving",
      },
      {
        name: "Time Management",
      },
    ],
  },
];

export const experiences = [
  {
    image: dimfordev,
    title: "Freelance Web Developer at dimfordev",
    description: "Personal Freelance Business",
    link: "https://github.com/ddimfordev",
    start: "December 2023",
    end: "Present",
    points: [
      "Delivering custom web solutions to over 5 clients across sectors such as goverment, services, and internal companies operations.",
      "Conducted client interviews to gather and validate requirements, ensuring a alignment between delivered features and client expectations",
      "Architected application structures and development roadmaps based on system analysis,",
      "Delivered end-to-end project lifecycles, including deployment, and post-launch support",
    ],
  },
  {
    image: agsatu,
    title: "Web Developer Intern at CV Agsatu",
    description: "Software House based in Kediri, Indonesia",
    link: "https://agsatu.com/",
    start: "January 2025",
    end: "June 2025 ",
    points: [
      "Maintained and enhanced a web-based savings and loan system used by 4+ active clients.",
      "Delivered feature updates and fixed bugs, improving system stability.",
      "Tested and debugged transactional workflows",
      "Managed codebase with Git and GitLab in a collaborative workflow.",
    ],
  },
  {
    image: dlabs,
    title: "Web Developer Intern at PT DLABS Indonesia Infotech",
    description: "Software House based in Malang, Indonesia",
    link: "https://dlabs.id",
    start: "October 2024",
    end: "December 2024",
    points: [
      "Built ERP features, including an asset depreciation module integrated with an external database.",
      "Developed CMS modules for a client’s companies CRM, enhancing content management capabilities.",
      "Collaborated with mobile developer for API integration.",
      "Implemented push notifications using Firebase Cloud Messaging (FCM).",
    ],
  },
  {
    image: agsatu,
    title: "Web Developer Intern at CV Agsatu",
    description: "Software House based in Kediri, Indonesia",
    link: "https://agsatu.com/",
    start: "June 2024",
    end: "August 2024",
    points: [
      "Contributed to a SaaS student attendance system, focused on mobile integration",
      "Designed RESTful APIs in Laravel to support core attendance functionality",
      "Built geolocation-based submission APIs, validating user proximity to school.",
      "Developed dynamic pages using vue components for submissions, confirmations, and leave requests.",
    ],
  },
];

export const educations = [
  {
    image: polinema,
    title: "Associate Degree in Informatics Management",
    institution: "Politeknik Negeri Malang",
    start: "2022",
    end: "2025",
  },
  {
    image: smkn1kediri,
    title: "Computer and Network Engineering",
    institution: "SMK Negeri 1 Kota Kediri",
    start: "2020",
    end: "2022",
  },
];
