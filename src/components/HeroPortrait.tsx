import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const IMAGE_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

// ─── Constants ──────────────────────────────────────────────────────────────
const MAX_ROTATE    = 14;    // max degrees of 3D tilt
const PERSPECTIVE   = 900;   // px — higher = shallower tilt
const LERP_FACTOR   = 0.07;  // interpolation speed (lower = smoother/slower)
const GLOW_STRENGTH = 40;    // how far the glow moves (px)

// ─── Lerp helper ────────────────────────────────────────────────────────────
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ─── Main Component ──────────────────────────────────────────────────────────
export function HeroPortrait({ className = '' }: { className?: string }) {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const glowRef     = useRef<HTMLDivElement>(null);
  const rafRef      = useRef<number | null>(null);

  // Live targets (raw mouse)
  const target   = useRef({ rx: 0, ry: 0, gx: 0, gy: 0 });
  // Current interpolated values
  const current  = useRef({ rx: 0, ry: 0, gx: 0, gy: 0 });
  const isHover  = useRef(false);

  // ── RAF loop ──────────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const c = current.current;
    const t = target.current;
    const el = wrapperRef.current;
    const gl = glowRef.current;

    c.rx = lerp(c.rx, t.rx, LERP_FACTOR);
    c.ry = lerp(c.ry, t.ry, LERP_FACTOR);
    c.gx = lerp(c.gx, t.gx, LERP_FACTOR);
    c.gy = lerp(c.gy, t.gy, LERP_FACTOR);

    if (el) {
      el.style.transform = `
        perspective(${PERSPECTIVE}px)
        rotateX(${c.rx}deg)
        rotateY(${c.ry}deg)
        translateZ(8px)
      `;
    }
    if (gl) {
      gl.style.transform = `translate(${c.gx}px, ${c.gy}px)`;
      gl.style.opacity   = isHover.current ? '1' : '0';
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return; // skip 3D tracking on mobile

    rafRef.current = requestAnimationFrame(tick);

    const handleMove = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();

      // Normalised mouse position relative to element centre (-1 → +1)
      const nx = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
      const ny = ((e.clientY - rect.top)   / rect.height - 0.5) * 2;

      target.current.ry =  nx * MAX_ROTATE;
      target.current.rx = -ny * MAX_ROTATE;
      target.current.gx =  nx * GLOW_STRENGTH;
      target.current.gy =  ny * GLOW_STRENGTH;
    };

    const handleEnter = () => { isHover.current = true; };
    const handleLeave = () => {
      isHover.current       = false;
      target.current.rx     = 0;
      target.current.ry     = 0;
      target.current.gx     = 0;
      target.current.gy     = 0;
    };

    const el = wrapperRef.current;
    el?.addEventListener('mousemove',  handleMove);
    el?.addEventListener('mouseenter', handleEnter);
    el?.addEventListener('mouseleave', handleLeave);

    return () => {
      el?.removeEventListener('mousemove',  handleMove);
      el?.removeEventListener('mouseenter', handleEnter);
      el?.removeEventListener('mouseleave', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  return (
    /*
     * Outer: idle floating animation (Framer Motion — runs always)
     * Inner: 3D tilt wrapper (RAF — desktop only)
     */
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* ── 3D Tilt Shell ─────────────────────────────────────────────── */}
      <div
        ref={wrapperRef}
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.05s linear', // tiny baseline so it's not jerky at 0
          cursor: 'none',
        }}
        className="relative"
      >
        {/* ── Reactive glow disc ───────────────────────────────────────── */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{
            opacity: 0,
            transition: 'opacity 0.4s ease',
            willChange: 'transform, opacity',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: '55%',
              height: '55%',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(120,120,255,0.22) 0%, rgba(80,0,200,0.10) 50%, transparent 80%)',
              filter: 'blur(24px)',
            }}
          />
        </div>

        {/* ── Character image ───────────────────────────────────────────── */}
        <img
          src={IMAGE_URL}
          alt="Lalit — 3D Creator"
          draggable={false}
          style={{
            display: 'block',
            transformStyle: 'preserve-3d',
            /* subtle blue-purple ambient shadow */
            filter:
              'drop-shadow(0 30px 60px rgba(80,0,180,0.35)) drop-shadow(0 0 80px rgba(100,80,255,0.18))',
          }}
          className="w-[420px] lg:w-[580px] xl:w-[660px] max-w-[78vw] max-h-[78vh] object-contain select-none"
        />

        {/* ── Subtle reflection shimmer at base ────────────────────────── */}
        <div
          className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '60%',
            height: '40px',
            background:
              'radial-gradient(ellipse at center, rgba(100,80,255,0.18) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
    </motion.div>
  );
}
