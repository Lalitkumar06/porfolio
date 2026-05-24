import React from 'react';
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: '01',
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    num: '02',
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    num: '03',
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    num: '04',
    name: 'Branding',
    desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10 sm:-mt-12 md:-mt-14">
      <div className="max-w-[1920px] mx-auto">
        <FadeIn y={30}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto flex flex-col">
          {services.map((svc, i) => (
            <FadeIn 
              key={svc.num} 
              delay={i * 0.1} 
              y={30}
              className="flex flex-col md:flex-row md:items-start border-t border-[rgba(12,12,12,0.15)] last:border-b py-8 sm:py-10 md:py-12 gap-4 md:gap-16 lg:gap-24"
            >
              <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none">
                {svc.num}
              </div>
              <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-4">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-none">
                  {svc.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                  {svc.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
