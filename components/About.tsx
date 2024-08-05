"use client";

import React from "react";
import { SectionHeading } from "./index";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-[18rem] max-w-[45rem] text-center leading-8 sm:mb-[18rem] scroll-mt-60"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 100 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        After graduating with a degree in{" "}
        <span className="font-medium">Psychology</span>, I decided to pursue my
        passion for programming. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I have a solid background in HR and management, where I
        have developed interpersonal, communication, leadership, teamwork, and
        external vendor management skills. I have a proven track record of{" "}
        <span className="font-medium">
          problem-solving and negotiation skills
        </span>
        , and I have led a teams, trained new staff members, and improved
        processes. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a full-stack
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, cooking and playing the guitar.
      </p>
    </motion.section>
  );
}
