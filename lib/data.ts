import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tripy from "../Screenshot (36).png";
import Blog from "../Screenshot (38).png";
import ecom from "../Screenshot (39).png";
import chat from '../download.png'
import task from '../meister-2.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PN-INFOSYS Company",
    role : "Full-Stack Web Developer Intern",
    location: "Gwalior, M.P.",
    description:
      "Gained proficiency in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB, and React-Redux.Developed full-stack web applications using the MERN stack. Implemented RESTful APIs to enable seamless communication between the frontend and backend.Designed and optimized MongoDB databases to ensure efficient data storage, retrieval, and performance.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2022 - Dec 2022",
  },
  {
    title: "Ubitech Solutionsr",
    role:"Web Developer Intern",
    location: "Gwalior, M.P.",
    description:
      "Proficient in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB, and React-Redux. Experienced in building full-stack web applications using the MERN stack. Developed RESTful APIs to facilitate smooth communication between frontend and backend systems. Skilled in designing and optimizing MongoDB databases to enhance data storage, retrieval, and overall performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Mar 2023",
  },
  {
    title: "Techieshubhdeep IT Solutions Pvt. Ltd",
    role:"Web Developer / MERN Stack Developer (Full Time) ",
    location: "Gwalior, M.P.",
    description:
      " Led React.js and Node.js projects, optimizing features and user interactions. Mentored interns to develop technical skillsand foster collaboration. Developed RESTful APIs for efficient frontend-backend communication and managed MongoDB to ensure optimal data storage and application performance.",
    icon: React.createElement(FaReact),
    date: "2023 july - 2024 sep",
  },
] as const;

export const projectsData = [
  {
    title: "Tripy Website",
    description:
     
      "Built a fully responsive website using React.js, HTML, CSS, and Bootstrap for a visually appealing design. Features include a gallery of popular tourist destinations in India, providing users with engaging and informative content across all devices.",
    tags: ["React.js", "HTML5", "CSS", "Bootstrap", "Javascript"],
    imageUrl: tripy,
  },
  {
    title: "Blog Website",
    description:
      " Developed a blog website using HTML, CSS, Bootstrap, and JavaScript for the frontend, and Node.js,Express.js, and MongoDB for the backend. Key features include secure Signup/Login, user-generated contentmanagement, and a system for creating, editing, and displaying blogs, allowing users to browse and contributeblogs seamlessly",
    tags: ["Javascript", "Node.js", "Express.js", "CSS", "HTML5","MongoDB"],
    imageUrl: Blog,
  },
  {
    title: "Ecommerce Application",
    description:
      " Developed a full-stack e-commerce website using React.js, Node.js, and Stripe API for payment integration. Features include secure Login/Signup, user authentication, order placement, and seamless API integration for data exchange. Designed for scalability and modular integration, mimicking platforms like Flipkart.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ecom,
  },
   {
    title: "Task Management Application",
    description:
      " Developed a task management application using React.js, Node.js, Express.js, and MongoDB. Key featuresinclude secure JWT-based authentication, CRUD operations with real-time updates, and RESTful APIs forsmooth client-server communication. Designed a responsive UI with reusable components and efficient state management",
    tags: [ "React.js", "Node.js", "tailwind CSS", "MongoDB"],
    imageUrl: task,
  },
   {
    title: "Realtime Chat Application",
    description:
      "  Developed a real-time chat application using React.js, Node.js ,Express.js, MongoDB and Socket.IO. Featuresinclude secure JWT-based authentication, live message updates, chat threads, and notifications. Implemented RESTful APIs for user management and chat functionality, ensuring data persistence and scalability",
    tags: [ "React.js", "Node.js", "Express.js", "tailwind CSS", "MongoDB", "Socket.IO"],
    imageUrl: chat,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "C++",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redux",
  "React-Native",
  "Python",
  "PHP",
  "MySql",
  "Framer Motion",
  "Git & Github"
] as const;
