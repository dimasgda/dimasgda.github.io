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
      "The work was completed on time with satisfying results. Open to feedback, and quick respond to questions.",
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
    title: "Freelance Web Developer",
    description: "Personal Freelance Business",
    link: "/",
    start: "December 2023",
    end: "Present",
    points: [
      "Delivered custom web solutions to 5+ clients across sectors including government, retail, services, and internal operations.",
      "Actively collaborated with clients from various sectors to gather and validate requirements, ensuring a 90%+ alignment between delivered features and client expectations.",
      "Architected application structures and development roadmaps based on system analysis, reducing rework during development by up to 30%.",
      "Implemented a CI/CD pipeline for automated deployment to a VPS, allowing for client previews and rapid feedback loops during the development phase",
      "Delivered end-to-end project lifecycles, including deployment and post-launch support, achieving 100% uptime in initial production phases and positive client feedback on support responsiveness.",
    ],
  },
  {
    image: agsatu,
    title: "Intern Web Developer at CV Agsatu",
    description: "Software House based in Kediri, Indonesia",
    link: "http://agsatu.com",
    start: "January 2025",
    end: "June 2025",
    points: [
      "Maintained and enhanced a web-based savings and loan system used by 4+ active clients.",
      "Delivered 10+ feature updates and fixed 20+ bugs, improving system stability.",
      "Tested and debugged transactional workflows, reducing user issues by 20%.",
      "Implemented backend features using Laravel, such as transaction flows, aligned with business logic and client requirements.",
      "Optimized MySQL queries by restructuring SQL commands, reducing database load and improving response times.",
    ],
  },
  {
    image: dlabs,
    title: "Intern Web Developer at PT DLABS Indonesia Infotech",
    description: "Software House based in Malang, Indonesia",
    link: "https://dlabs.id",
    start: "October 2024",
    end: "December 2024",
    points: [
      "Developed  ERP  features,  including  an  asset  depreciation  module  integrated  with  an  external  database,  improving  data automation.",
      "Developed  Laravel  queue  jobs  for  scheduled  content  delivery  in  a  web-based  CRM  application,  ensuring  efficient asynchronous processing and improved system scalability.",
      "Collaborated on WebSocket-based real-time chat by debugging and resolving integration issues, contributing to seamless data synchronization across client platforms",
      "Maintained and monitored a queue system in a web-based CRM application for broadcasting notifications integrated with Firebase, ensuring reliable message delivery and minimizing failure rates.",
    ],
  },
  {
    image: agsatu,
    title: "Intern Web Developer at CV Agsatu",
    description: "Software House based in Kediri, Indonesia",
    link: "http://agsatu.com",
    start: "June 2024",
    end: "August 2024",
    points: [
      "Contributed to the development of a SaaS-based student attendance system with mobile integration for real-time submissions.",
      "Designed RESTful APIs using Laravel to support attendance features such as check-ins, leave requests, and class schedules.",
      "Developed geolocation-based API validation to ensure attendance submissions were made within authorized school perimeters.",
      "Built dynamic and reusable Vue components for attendance submission, approval flows, and leave management, enhancing frontend maintainability.",
    ],
  },
];

export const educations = [
  {
    image: polinema,
    title: "Associate Degree in Informatics Management",
    institution: "State Polytechnic of Malang",
    start: "2022",
    end: "2025",
  },
  {
    image: smkn1kediri,
    title: "Computer and Network Engineering",
    institution: "Vocational High School 1 of Kediri City",
    start: "2020",
    end: "2022",
  },
];
