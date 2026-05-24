import React from 'react';
import { FadeIn } from '../components/FadeIn';

const skillCategories = [
  {
    name: 'Languages',
    emoji: '⌨️',
    skills: ['Java', 'C', 'C++', 'Python'],
    span: 'md:col-span-3',
    desc: 'The languages I code in.',
  },
  {
    name: 'Core CS',
    emoji: '🧠',
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'Operating Systems'],
    span: 'md:col-span-2',
    desc: 'Fundamentals that power everything.',
  },
  {
    name: 'Development',
    emoji: '💻',
    skills: ['Python', 'Flask', 'FastAPI', 'HTML', 'CSS'],
    span: 'md:col-span-1',
    desc: 'Building real things on the web.',
  },
  {
    name: 'AI & Backend',
    emoji: '🤖',
    skills: ['RAG', 'Vector DB', 'Ollama', 'APIs', 'n8n Automation'],
    span: 'md:col-span-1',
    desc: 'Smart systems & server-side magic.',
  },
  {
    name: 'Tools',
    emoji: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'n8n'],
    span: 'md:col-span-2',
    desc: 'The developer workflow essentials.',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10 sm:-mt-12 md:-mt-14 overflow-hidden">

      {/* Watermark background text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[clamp(8rem,28vw,340px)] font-black uppercase text-[#0C0C0C] opacity-[0.03] leading-none whitespace-nowrap">
          SKILLS
        </span>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <FadeIn y={30}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-6">
            Skills
          </h2>
          <p className="text-center text-[#0C0C0C] opacity-40 font-light text-[clamp(0.9rem,1.8vw,1.3rem)] mb-16 sm:mb-20 md:mb-24">
            What I know · What I use · What I love
          </p>
        </FadeIn>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {skillCategories.map((category, i) => (
            <FadeIn
              key={category.name}
              delay={i * 0.1}
              y={30}
              className={category.span}
            >
              <div className="group h-full bg-[#F7F7F7] hover:bg-[#0C0C0C] border border-[rgba(12,12,12,0.08)] rounded-3xl p-8 md:p-10 flex flex-col gap-8 transition-all duration-500 cursor-default overflow-hidden relative">

                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#0C0C0C] opacity-[0.04] group-hover:opacity-10 transition-opacity duration-500" />

                {/* Top row */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl">{category.emoji}</span>
                    <h3 className="text-[#0C0C0C] group-hover:text-[#FFFFFF] font-bold uppercase text-[clamp(1.2rem,2.5vw,2rem)] leading-none tracking-tight transition-colors duration-500">
                      {category.name}
                    </h3>
                    <p className="text-[#0C0C0C] group-hover:text-[rgba(255,255,255,0.5)] opacity-40 group-hover:opacity-100 font-light text-sm transition-all duration-500">
                      {category.desc}
                    </p>
                  </div>
                  <span className="text-[#0C0C0C] group-hover:text-[rgba(255,255,255,0.15)] font-black text-6xl leading-none opacity-10 group-hover:opacity-100 transition-all duration-500 select-none">
                    0{i + 1}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-[rgba(12,12,12,0.12)] group-hover:border-[rgba(255,255,255,0.2)] text-[#0C0C0C] group-hover:text-[#FFFFFF] text-sm font-medium bg-white group-hover:bg-[rgba(255,255,255,0.08)] transition-all duration-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom centered stat */}
        <FadeIn y={20} delay={0.5}>
          <div className="max-w-6xl mx-auto mt-6 flex justify-center">
            <div className="bg-[#0C0C0C] rounded-3xl px-8 sm:px-16 py-8 flex flex-col items-center gap-1 w-full md:w-auto md:min-w-[320px]">
              <span className="text-[#FFFFFF] font-black text-[clamp(2rem,5vw,3.5rem)] leading-none">∞</span>
              <span className="text-[rgba(255,255,255,0.45)] font-light text-sm uppercase tracking-wider">Still Learning</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
