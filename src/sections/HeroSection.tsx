import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { HeroPortrait } from '../components/HeroPortrait';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <section className="min-h-screen flex flex-col overflow-x-hidden relative w-full">
      <FadeIn delay={0} y={-20} className="w-full z-50 relative">
        <nav className="flex justify-between items-center px-5 sm:px-8 md:px-12 lg:px-16 pt-6 md:pt-8 w-full max-w-[1920px] mx-auto">
          <span className="text-[#D7E2EA] font-black uppercase tracking-[0.2em] text-sm md:text-base select-none">
            Lalit
          </span>
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-xs lg:text-sm hover:text-[#D7E2EA] transition-colors duration-200 cursor-pointer bg-transparent border-none"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/lalit-kumar011/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#D7E2EA] opacity-40 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Lalitkumar06"
              target="_blank" rel="noopener noreferrer"
              className="text-[#D7E2EA] opacity-40 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 cursor-pointer z-50 relative"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[2px] bg-[#D7E2EA] rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-[#D7E2EA] rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[2px] bg-[#D7E2EA] rounded-full origin-center"
            />
          </button>
        </nav>
      </FadeIn>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0C0C0C]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollTo(item)}
                className="hero-heading font-black uppercase text-[clamp(2.5rem,12vw,4.5rem)] tracking-tight cursor-pointer bg-transparent border-none"
              >
                {item}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.07 + 0.05, duration: 0.4 }}
              className="mt-2"
            >
              <ContactButton />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center flex-1 px-5 pt-8 pb-12 md:hidden gap-7">
        <FadeIn delay={0.15} y={30} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.9] text-[clamp(3.8rem,19vw,6.5rem)]">
            Hi, i&apos;m<br />lalit
          </h1>
        </FadeIn>
        <FadeIn delay={0.35} y={30} className="w-full flex justify-center">
          <motion.img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Lalit - 3D Creator"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[260px] max-w-[75vw] object-contain"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(80,0,180,0.4))' }}
          />
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="w-full text-center">
          <p className="text-[#D7E2EA]/50 font-light uppercase tracking-widest leading-relaxed text-[10px] max-w-[220px] mx-auto">
            Learning, building, and experimenting<br />with modern technology.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} y={20}>
          <ContactButton />
        </FadeIn>

        <FadeIn delay={0.7} y={20} className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/lalit-kumar011/" target="_blank" rel="noopener noreferrer"
            className="text-[#D7E2EA] opacity-50 hover:opacity-100 transition-opacity duration-300" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Lalitkumar06" target="_blank" rel="noopener noreferrer"
            className="text-[#D7E2EA] opacity-50 hover:opacity-100 transition-opacity duration-300" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </FadeIn>
      </div>

      <div className="hidden md:flex flex-col flex-1 relative overflow-hidden">
        <FadeIn delay={0.18} y={50} className="w-full mt-2 lg:mt-4">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap
                       flex justify-between items-center w-full
                       px-10 lg:px-16 xl:px-20
                       text-[13vw] lg:text-[14vw] xl:text-[15vw]"
          >
            <span>Hi, i&apos;m</span>
            <span>lalit</span>
          </h1>
        </FadeIn>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10 pt-12">
          <FadeIn delay={0.55} y={40} className="pointer-events-auto">
            <HeroPortrait />
          </FadeIn>
        </div>
        <FadeIn
          delay={0.75} x={-20} y={0}
          className="absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/15" />
          <a
            href="https://www.linkedin.com/in/lalit-kumar011/"
            target="_blank" rel="noopener noreferrer"
            className="text-[#D7E2EA] opacity-35 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Lalitkumar06"
            target="_blank" rel="noopener noreferrer"
            className="text-[#D7E2EA] opacity-35 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <div className="w-px h-12 bg-gradient-to-b from-white/15 to-transparent" />
        </FadeIn>
        <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-between items-end
                        px-10 lg:px-16 xl:px-20 pb-8 lg:pb-10 max-w-[1920px] mx-auto w-full">
          <FadeIn delay={0.4} y={20}>
            <p className="text-[#D7E2EA]/40 font-light uppercase tracking-widest leading-snug
                          text-[clamp(0.6rem,0.9vw,1rem)] max-w-[200px]">
              Learning, building &amp; experimenting with modern tech.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
          <FadeIn delay={0.65} y={20}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#D7E2EA]/25 uppercase tracking-[0.3em] text-[10px]">scroll</span>
              <div className="w-px h-10 relative overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/70 to-transparent rounded-full"
                  animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
