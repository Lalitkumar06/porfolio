import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = 'itslalitkumar314@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30 -mt-10 sm:-mt-12 md:-mt-14 overflow-hidden"
    >
      {/* Watermark */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-end justify-center overflow-hidden pb-8">
        <span className="text-[clamp(6rem,22vw,280px)] font-black uppercase text-[#0C0C0C] opacity-[0.04] leading-none whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">

        {/* Heading */}
        <FadeIn y={30}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-6">
            Contact
          </h2>
          <p className="text-center text-[#0C0C0C] opacity-40 font-light text-[clamp(0.9rem,1.8vw,1.3rem)] mb-20 sm:mb-24 md:mb-32">
            Let's build something great together.
          </p>
        </FadeIn>

        {/* Main content */}
        <div className="max-w-5xl mx-auto flex flex-col gap-6">

          {/* Email block — big CTA */}
          <FadeIn y={30} delay={0.1}>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group w-full bg-[#0C0C0C] rounded-3xl px-6 sm:px-10 py-8 md:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a]"
            >
              <div className="flex flex-col gap-2 text-left">
                <span className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-[0.25em] font-medium">Email me at</span>
                <span className="text-[#FFFFFF] font-bold text-[clamp(1.2rem,3.5vw,2.8rem)] leading-tight break-all">
                  {email}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300">
                <span className="text-white text-sm font-medium uppercase tracking-wider">
                  {copied ? '✓ Copied!' : 'Copy'}
                </span>
              </div>
            </motion.button>
          </FadeIn>

          {/* Phone block */}
          <FadeIn y={30} delay={0.15}>
            <a
              href="tel:+918979372847"
              className="group w-full bg-[#F7F7F7] hover:bg-[#0C0C0C] border border-[rgba(12,12,12,0.08)] rounded-3xl px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-[#0C0C0C] group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors duration-300 shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0C0C0C] transition-colors duration-300">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#0C0C0C] group-hover:text-white/50 opacity-40 group-hover:opacity-100 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300">Call me at</span>
                  <span className="text-[#0C0C0C] group-hover:text-white font-bold text-[clamp(1.1rem,2.5vw,1.8rem)] leading-tight transition-colors duration-300">
                    +91 89793 72847
                  </span>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0C0C0C] group-hover:text-white opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </FadeIn>

          {/* Social links row */}
          <FadeIn y={30} delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lalit-kumar011/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F7F7F7] hover:bg-[#0077B5] border border-[rgba(12,12,12,0.08)] rounded-3xl px-8 py-8 flex items-center justify-between transition-all duration-400"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#0C0C0C] group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors duration-300 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0077B5] transition-colors duration-300">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0C0C0C] group-hover:text-white font-semibold text-lg transition-colors duration-300">LinkedIn</span>
                    <span className="text-[#0C0C0C] group-hover:text-white/70 opacity-40 group-hover:opacity-100 text-sm font-light transition-all duration-300">linkedin.com/in/lalit-kumar011</span>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0C0C0C] group-hover:text-white opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Lalitkumar06"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F7F7F7] hover:bg-[#0C0C0C] border border-[rgba(12,12,12,0.08)] rounded-3xl px-8 py-8 flex items-center justify-between transition-all duration-400"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#0C0C0C] group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors duration-300 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0C0C0C] transition-colors duration-300">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0C0C0C] group-hover:text-white font-semibold text-lg transition-colors duration-300">GitHub</span>
                    <span className="text-[#0C0C0C] group-hover:text-white/70 opacity-40 group-hover:opacity-100 text-sm font-light transition-all duration-300">github.com/Lalitkumar06</span>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0C0C0C] group-hover:text-white opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* Footer strip */}
          <FadeIn y={20} delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(12,12,12,0.1)]">
              <span className="text-[#0C0C0C] font-black uppercase text-xl tracking-tight opacity-80">Lalit Kumar</span>
              <span className="text-[#0C0C0C] text-sm opacity-30 font-light">© {new Date().getFullYear()} · Built with passion</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-emerald-600 text-sm font-medium">Available for work</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
