"use client";

import { unique } from "@/public/utils/unique";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RESULT } from "../constant";

export default function MainImage() {
  const items = unique(Object.values(RESULT).map((result) => result.image));
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative flex h-full w-full flex-1 items-center justify-center gap-4 overflow-visible">
      <AnimatePresence>
        <motion.div
          key={selectedIndex}
          initial={{
            rotate: selectedIndex % 2 === 0 ? -180 : 180,
            opacity: 0,
            scale: 0.3,
          }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{
            rotate: selectedIndex % 2 === 0 ? 180 : -180,
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="absolute h-full w-full rounded-lg"
        >
          <img
            src={items[selectedIndex]}
            className="h-full w-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
