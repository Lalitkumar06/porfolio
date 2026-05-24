import React from 'react';
import { motion } from 'framer-motion';

export function ContactButton() {
  const handleClick = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="rounded-full text-white font-bold uppercase tracking-widest px-7 py-3 sm:px-10 sm:py-4 md:px-14 md:py-5 text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </motion.button>
  );
}

export function LiveProjectButton() {
  return (
    <button className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-300">
      Live Project
    </button>
  );
}


