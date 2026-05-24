import React from 'react';
import Spline from '@splinetool/react-spline';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]">
      <div className="absolute top-1/3 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 md:right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-500/10 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none" />

      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon" 
          className="w-[80px] sm:w-[120px] md:w-[160px] object-contain drop-shadow-2xl opacity-80 mix-blend-screen"
        />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D object" 
          className="w-[80px] sm:w-[100px] md:w-[140px] object-contain drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego" 
          className="w-[80px] sm:w-[120px] md:w-[160px] object-contain drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D Group" 
          className="w-[100px] sm:w-[130px] md:w-[170px] object-contain drop-shadow-2xl opacity-80"
        />
      </FadeIn>

      <div className="hidden md:block absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-auto z-0">
        <FadeIn delay={0.5} x={200} y={0} duration={1.2} className="w-[700px] h-[700px] lg:w-[900px] lg:h-[900px]">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </FadeIn>
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start gap-8 sm:gap-10 md:w-1/2 relative">
          
          <FadeIn delay={0} y={40}>
            <div className="relative">
              <span className="absolute -left-6 -top-6 text-7xl text-white/5 font-serif hidden sm:block">"</span>
              <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-left text-[clamp(3rem,8vw,120px)] bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-gray-600 drop-shadow-sm">
                About me
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={30} className="w-full">
            <div className="flex flex-col items-start gap-8 sm:gap-10 backdrop-blur-xl bg-white/[0.03] p-6 sm:p-10 rounded-3xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute -inset-full h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite] -skew-x-12 transform -translate-x-full transition-all duration-1000" />
              
              <AnimatedText 
                text="B.Tech IT student focused on building intelligent software systems and scalable web applications. Passionate about AI, backend engineering, and real-world product development. Currently exploring vector databases, RAG pipelines, modern full-stack technologies, and AI-driven experiences while sharpening problem-solving and system design skills."
                className="text-[#D7E2EA] font-medium text-left leading-relaxed text-[clamp(1rem,1.5vw,1.25rem)] relative z-10"
              />
              
              <div className="flex justify-center mt-2 relative z-10">
                <div className="flex flex-col gap-1.5 bg-black/20 px-4 py-2 rounded-2xl border border-white/5">
                  <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold text-center">Status</span>
                  <span className="text-emerald-400 text-sm flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
