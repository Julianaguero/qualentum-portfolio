"use client";

import React from "react";
import { Project } from "@/components/index"
import { projectsData } from "@/lib/data";
import { SectionHeading } from "./index";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);


  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-40"
      id="projects"

    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}


