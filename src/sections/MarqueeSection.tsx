import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Developer', 'Builder', 'Learner', 'Coder', 'Creator'];

export function MarqueeSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0C0C0C] py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      {/* Thin top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 z-10 px-5">

        {/* Label */}
        <span className="text-[#D7E2EA] font-light uppercase tracking-[0.3em] text-sm sm:text-base opacity-40">
          I am a
        </span>

        {/* Rotating word */}
        <div className="flex items-center justify-center" style={{ minHeight: '6rem' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentWord]}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-black uppercase tracking-tight text-[clamp(2.5rem,7vw,6rem)] text-white leading-none"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Scroll down indicator */}
        <div className="flex flex-col items-center gap-3 mt-6">
          <span className="text-white/25 uppercase tracking-[0.3em] text-xs font-medium">Scroll</span>
          <div className="w-px h-16 relative overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/80 to-transparent rounded-full"
              animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

      </div>

      {/* Thin bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-right"
      />
    </section>
  );
}
