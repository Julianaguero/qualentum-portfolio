"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  })
}

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      className="mb-[18rem] max-w-[53rem] text-center leading-8 sm:mb-[15rem] scroll-mt-40"
      id="skills"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li 
            key={index} 
            className="bg-white border-black/[0.1] px-5 py-3 rounded-xl shadow dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
