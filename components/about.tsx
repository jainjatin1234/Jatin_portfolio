"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a dedicated full-stack web developer with two years of hands-on experience in creating dynamic and robust web solutions. My expertise spans across front-end and back-end technologies, enabling me to design, develop, and deploy end-to-end web applications that meet user needs and business objectives. I am currently pursuing a Bachelor of Technology in Computer Science, with my degree expected to be completed by June 2025.

Throughout my journey as a developer, I have cultivated a strong foundation in modern web development practices, including building scalable and efficient architectures, optimizing performance, and ensuring seamless user experiences. I am passionate about staying at the forefront of technological advancements, continuously enhancing my skill set by learning and adapting to new tools, frameworks, and methodologies.

I am now actively seeking a full-time position as a web developer, where I can contribute my technical expertise, problem-solving abilities, and creativity to deliver innovative solutions. My goal is to collaborate with like-minded professionals to build impactful applications that align with industry standards and drive meaningful results.






.
      </p>
    </motion.section>
  );
}
