import "./globals.css";
import { Header, Footer, ThemeSwitch } from "@/components";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import ThemeContextProvider from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julian Aguero | Full-Stack Developer",
  description: "This",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative  bg-gray-50 text-gray-950 pt-28 sm:pt-0  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute -z-10 bg-[#fbe2e3] top-[-6rem] right-[11rem] h-[31.23rem] w-[31.23rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="absolute -z-10 bg-[#dbd7fb] top-[-1rem] left-[-35rem] h-[31.23rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg[#676394]" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <ThemeSwitch />
            <Toaster position="top-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
