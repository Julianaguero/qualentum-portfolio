"use client";

import React from "react";
import { SectionHeading } from "./index";
import SubmitBtn from "./SubmitBtn";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import toast from "react-hot-toast"

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);



  return (
    <motion.section
      ref={ref}
      className="mb-[18rem] sm:mb-[15rem] scroll-mt-28 w-[min(100%, 38rem)] text-center"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Contact me directly at{" "}
        <a href="mailto:julianaguero@gmail.com" className="underline">
          julianaguero@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          
          const { error } = await sendEmail(formData);
          
          if (error) { 
            toast.error( error );
            return;
          }

          toast.success("Email sent Successfully!")
          document.querySelector("form")?.reset()
        }}
      >
        <input
          className="h-14 p-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="Your email address"
          required
          maxLength={500}
        />
        <textarea
          className="h-[14rem] my-3 p-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}


