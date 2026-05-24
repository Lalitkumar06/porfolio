import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

function TechPill({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/70 text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-white/[0.04]">
      {label}
    </span>
  );
}

function GitHubButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors duration-300"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      GitHub
    </a>
  );
}

type TechProject = {
  num: string;
  name: string;
  category: string;
  type: 'tech';
  tagline: string;
  description: string;
  tech: string[];
  highlights: { icon: string; label: string; value: string }[];
  githubUrl: string;
  accentColor: string;
};

const projects: TechProject[] = [
  {
    num: '01',
    name: 'VectorDB & RAG Engine',
    category: 'Personal · AI / Backend',
    type: 'tech',
    tagline: 'Custom neural search engine with RAG pipeline',
    description:
      'Built a Vector Database and RAG-based neural search engine from scratch using Python & FastAPI. Implemented HNSW, KD-Tree, and brute-force indexing to compare search latency across algorithms. Text is converted into embeddings via nomic-embed-text and stored for similarity search. When a user asks a question, the system retrieves the most relevant chunks and sends them to llama3.2 (via Ollama) to generate grounded, context-aware answers.',
    tech: ['Python', 'FastAPI', 'Ollama', 'llama3.2', 'nomic-embed-text', 'HNSW', 'KD-Tree', 'PCA', 'RAG', 'REST API'],
    highlights: [
      { icon: '⚡', label: 'Algorithms', value: 'HNSW · KD-Tree · Brute Force' },
      { icon: '🧠', label: 'LLM',        value: 'llama3.2 via Ollama'          },
      { icon: '📐', label: 'Embeddings', value: 'nomic-embed-text'             },
      { icon: '📊', label: 'Visualiser', value: 'PCA 2D · Cosine · Euclidean' },
    ],
    githubUrl: 'https://github.com/Lalitkumar06',
    accentColor: 'from-violet-500/20 via-blue-500/10 to-transparent',
  },
  {
    num: '02',
    name: 'Voice AI Appointment Reminder',
    category: 'Personal · AI / Automation',
    type: 'tech',
    tagline: 'Automated reminder calls powered by AI voice agents',
    description:
      'Built a fully automated appointment reminder system using n8n, Google Calendar API, and Retell AI — with zero human involvement. An n8n workflow checks Google Calendar daily for scheduled appointments, extracts customer details (name, date, time), and passes them to a Retell AI voice agent. The AI agent then places outbound reminder calls and holds natural, conversational interactions with users. This project demonstrated the power of workflow automation, API integration, and AI voice agents in real-world business systems.',
    tech: ['n8n', 'Google Calendar API', 'Retell AI', 'REST API', 'Workflow Automation', 'Voice AI', 'Webhook'],
    highlights: [
      { icon: '📅', label: 'Trigger',    value: 'Daily Google Calendar Check' },
      { icon: '🤖', label: 'Voice AI',   value: 'Retell AI Agent'             },
      { icon: '🔗', label: 'Automation', value: 'n8n Workflow Engine'          },
      { icon: '📞', label: 'Output',     value: 'Automated Outbound Calls'    },
    ],
    githubUrl: 'https://github.com/Lalitkumar06',
    accentColor: 'from-cyan-500/20 via-teal-500/10 to-transparent',
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14"
    >
      <div className="max-w-[1920px] mx-auto">
        <FadeIn y={30}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Projects
          </h2>
        </FadeIn>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {projects.map((proj, index) => (
            <ProjectCard
              key={proj.num}
              project={proj}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: TechProject;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topOffset = index * 28;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress: shrinkProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(shrinkProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[75vh] md:h-[85vh] flex justify-center items-start sticky"
      style={{ top: `calc(5rem + ${topOffset}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-[calc(100%-2rem)] rounded-[28px] sm:rounded-[40px] md:rounded-[60px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] transform-gpu overflow-hidden"
      >
        <TechCard project={project} />
      </motion.div>
    </div>
  );
}

function TechCard({ project }: { project: TechProject }) {
  return (
    <div className="w-full h-full flex flex-col p-5 sm:p-7 md:p-10 gap-4 md:gap-6 relative">
      <div
        className={`absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl ${project.accentColor} blur-[80px] pointer-events-none rounded-full`}
      />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
        <div className="flex items-center gap-4 sm:gap-7">
          <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,7vw,90px)] leading-none opacity-30">
            {project.num}
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[10px] sm:text-xs">
              {project.category}
            </span>
            <span className="text-[#D7E2EA] font-bold uppercase text-lg sm:text-2xl md:text-3xl leading-tight">
              {project.name}
            </span>
            <span className="text-[#D7E2EA]/40 font-light text-xs sm:text-sm mt-0.5">
              {project.tagline}
            </span>
          </div>
        </div>
        <GitHubButton href={project.githubUrl} />
      </div>
      <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 min-h-0 relative z-10">
        <div className="flex flex-col gap-4 lg:w-[55%]">
          <p className="text-[#D7E2EA]/65 font-light leading-relaxed text-xs sm:text-sm md:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        </div>
        <div className="lg:w-[45%] grid grid-cols-2 gap-3 content-start">
          {project.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-[#D7E2EA]/10 bg-white/[0.03] p-4 flex flex-col gap-1.5 backdrop-blur-sm"
            >
              <span className="text-xl">{h.icon}</span>
              <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-[9px] font-semibold">
                {h.label}
              </span>
              <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium leading-snug">
                {h.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none overflow-hidden rounded-b-[28px] sm:rounded-b-[40px] md:rounded-b-[60px]">
        <svg viewBox="0 0 900 120" preserveAspectRatio="none" className="w-full h-full opacity-[0.07]">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1={i * 180} y1="120" x2={i * 180 + 90 + (i % 2 === 0 ? 60 : -60)} y2="0" stroke="#D7E2EA" strokeWidth="1" />
          ))}
          {[60, 180, 300, 420, 540, 660, 780].map((x, i) => (
            <circle key={i} cx={x} cy={i % 2 === 0 ? 20 : 80} r="4" fill="#D7E2EA" />
          ))}
        </svg>
      </div>
    </div>
  );
}
