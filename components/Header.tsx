"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import clsx from "clsx";
import { motion, spring } from "framer-motion";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-0 sm:h-[5rem] dark:bg-gray-950/50 dark:border-black/40 dark:bg-opacity-75"
        // passing translate-x property to center the div from tailwind to motion
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        //   nav is out of div container because of some render issues with motion
        className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.15rem] sm:h-[initial] sm:py-0"
      >
        <ul className="flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative h-3/4 flex justify-center items-center "
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full justify-center items-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  { "text-gray-950 dark:text-white": activeSection === link.name }
                )}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                href={link.hash}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span 
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"  
                    transition={{
                      type: spring,
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
