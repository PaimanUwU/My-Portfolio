import Menu from "./Menu.tsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

interface NavProps {
  currentPath: string;
}

export default function Navbar({ currentPath: initialPath }: NavProps) {
  // Use state so the component re-renders when the URL changes
  const [currentPath, setCurrentPath] = useState(initialPath);

  useEffect(() => {
    const syncPath = () => {
      // Update state with the new browser path after Astro swaps the page
      setCurrentPath(window.location.pathname);
    };

    document.addEventListener("astro:after-swap", syncPath);
    return () => document.removeEventListener("astro:after-swap", syncPath);
  }, []);

  // Helper to determine bolding
  const getActiveStyles = (path: string) => {
    // Normalizing paths (removing trailing slashes) ensures a match
    const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
    const normalizedTarget = path.replace(/\/$/, "") || "/";
    
    return normalizedCurrent === normalizedTarget 
      ? "opacity-100 bg-gray-900 text-white " 
      : "font-normal opacity-70";
  };

  return (
    <motion.div
      className="sticky z-50 top-0 left-0 h-screen w-16 tablet:w-23 p-2 tablet:p-6 flex flex-col justify-between"
      style={{ translateZ: 0 }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <Menu />

      {/* Navigation Links with Gaps */}
      <div className="flex flex-col items-center gap-16 py-10">
        <a 
          href="/" 
          className={`py-2 px-4 rounded -rotate-90 inline-block transition-all duration-200 hover:bg-gray-900 hover:text-white cursor-none select-none ${getActiveStyles("/")}`}
        >
          about
        </a>

        <a 
          href="/works" 
          className={`py-2 px-4 rounded -rotate-90 inline-block transition-all duration-200 hover:bg-gray-900 hover:text-white cursor-none select-none ${getActiveStyles("/works")}`}
        >
          works
        </a>

        <a 
          href="/blogs" 
          className={`py-2 px-4 rounded -rotate-90 inline-block transition-all duration-200 hover:bg-gray-900 hover:text-white cursor-none select-none ${getActiveStyles("/blogs")}`}
        >
          contact
        </a>
        
        <a 
          href="/contact" 
          className={`py-2 px-4 rounded -rotate-90 inline-block transition-all duration-200 hover:bg-gray-900 hover:text-white cursor-none select-none ${getActiveStyles("/contact")}`}
        >
          contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="w-full flex flex-col justify-end gap-4">
        <button
          href="https://github.com"
          className="group bg-base-100 rounded-main w-full aspect-square flex items-center justify-center text-accent cursor-pointer transition-all ease-in-out duration-300 hover:scale-125"
        >
          <img src="/github.svg" alt="github icon" className="w-4 tablet:w-5" />
        </button>
        <button
          href="https://linkedin.com"
          className="group bg-base-100 rounded-main w-full aspect-square flex items-center justify-center text-accent cursor-pointer transition-all ease-in-out duration-300 hover:scale-125"
        >
          <img src="/linkedin.svg" alt="linkedin icon" className="w-3 tablet:w-4" />
        </button>
      </div>
    </motion.div>
  );
}
