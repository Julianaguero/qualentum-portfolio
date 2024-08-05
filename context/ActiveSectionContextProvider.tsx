"use client";

import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";

export type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
  };
  
  export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,
  };
  

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);  //  to disable the inView blob section change functionality for a second when the link is clicked so it doesn't bobble on its way thus we use this to disable the observer temporarily when user clicks on a link.

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

//Custom hook to handle null issue : activeSection could be null
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
