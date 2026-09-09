import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * A handful of soft, slow-drifting motes of light.
 * This is the site's one piece of ambient, non-interactive motion —
 * deliberately restrained so it reads as atmosphere, not decoration.
 */
export default function AmbientDrift({ count = 14 }: { count?: number }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        duration: 14 + Math.random() * 10,
        delay: -(Math.random() * 20),
        drift: 20 + Math.random() * 40,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {motes.map((m) => (
<motion.span
  key={m.id}
  className="absolute select-none"
  style={{
    left: `${m.left}%`,
    fontSize: m.size,
    bottom: -20,
    opacity: m.opacity,
    color: "var(--color-rose)",
  }}
          animate={{
            y: [0, -400 - m.drift * 4],
            x: [0, m.drift, -m.drift, 0],
            opacity: [0, m.opacity, m.opacity, 0],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
  ❤
</motion.span>
      ))}
    </div>
  );
}
