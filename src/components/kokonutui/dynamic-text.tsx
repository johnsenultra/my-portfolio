"use client";

/**
 * @author: @dorian_baffier
 * @description: Dynamic Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "Hello", language: "English" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Ciao", language: "Italian" },
  { text: "Hallo", language: "German" },
  { text: "Hello", language: "English" },
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= greetings.length) {
          clearInterval(interval);
          setIsAnimating(false);
          return prevIndex;
        }

        return nextIndex;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Animation variants for the text
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <section
      className="flex items-center justify-center gap-3"
      aria-label="Rapid greetings in different languages"
    >
      <div className="relative flex min-h-[2rem] w-[10rem] items-center justify-center overflow-visible">
        {isAnimating ? (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              className="absolute flex items-center gap-3 text-sm font-medium text-white dark:text-gray-200"
              aria-live="off"
              initial={textVariants.hidden}
              animate={textVariants.visible}
              exit={textVariants.exit}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div
                className="h-2 w-2 rounded-full bg-white text-white"
                aria-hidden="true"
              />
              {greetings[currentIndex].text}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex min-h-[2rem] items-center gap-3 text-sm font-medium text-white dark:text-gray-200">
            <div
              className="h-2 w-2 rounded-full bg-white text-white dark:bg-white"
              aria-hidden="true"
            />
            {greetings[currentIndex].text}
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicText;
