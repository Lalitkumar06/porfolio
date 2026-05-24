import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charIndex = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => {
        const wordChars = word.split('');
        return (
          <React.Fragment key={i}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, j) => {
                const start = charIndex / totalChars;
                const end = start + 1 / totalChars;
                charIndex++;
                return (
                  <Character key={j} char={char} progress={scrollYProgress} range={[start, end]} />
                );
              })}
            </span>
            {i < words.length - 1 && (
              <span className="inline-block whitespace-nowrap">
                <Character
                  char=" "
                  progress={scrollYProgress}
                  range={[charIndex / totalChars, (charIndex + 1) / totalChars]}
                />
              </span>
            )}
            <span className="hidden">{i < words.length - 1 ? charIndex++ : null}</span>
          </React.Fragment>
        );
      })}
    </p>
  );
}

function Character({
  char,
  progress,
  range,
}: {
  char: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}
