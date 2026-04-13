"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          aria-label="Back to top"
          className="fixed bottom-5 left-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#3A9D91]/35 bg-white/95 text-[#1f4b44] shadow-[0_14px_34px_rgba(58,157,145,0.3)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#3A9D91]/60 hover:bg-[#EAF5F0] hover:shadow-[0_18px_42px_rgba(58,157,145,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A9D91]/65 focus-visible:ring-offset-2 sm:bottom-6 sm:left-6"
        >
          <ArrowUp className="h-4.5 w-4.5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
