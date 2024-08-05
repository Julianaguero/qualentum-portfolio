"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[90rem] sm:mb-0 md:max-h-[1024px] max-h-[750px] h-[900px] sm:h-screen scroll-mt-[100rem] md:flex md:justify-between md:items-center md:flex-row-reverse md:gap-12"
      id="home"
    >
      <div className="flex items-center sm:items-start justify-center h-40 md:h-80 w-auto md:w-80 mb-10 ">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              className="h-40 md:h-60 w-40 md:w-60 rounded-full border-[0.3rem] border-white object-cover shadow-xl"
              src="/img_pers_back.png"
              alt="Julian Agüero portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <div>
        <motion.h1
          className="mb-10 max-w-[40rem] mt-4 px-10 text-2xl font-medium !leading-[1.5] sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I&apos;m Julian.</span> I&apos;m a{" "}
          <span className="font-bold">front-end developer</span> with{" "}
          <span className="font-bold">1 year</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="/EN-CV_Julian_Aguero.pdf"
            download
            className="group bg-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            href="http://linkedin.com/in/julianaguero"
            target="_blank"
            className="bg-white p-[0.8rem] text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>
          <a
            href="http://github.com/julianaguero"
            target="_blank"
            className="bg-white p-[0.8rem] text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsGithub />
          </a>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 right-0 md:max-h-[1024px] max-h-[900px] h-[900px] sm:h-screen bg-slate-500/80 -z-30 bg-fixed"/>

    </section>
  );
}
