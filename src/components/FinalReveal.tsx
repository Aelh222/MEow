import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { finalReveal } from "../data/content";

export default function FinalReveal() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowQuestion(true), 1600);
    return () => clearTimeout(t);
  }, []);

  const hearts = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: 4 + Math.random() * 92,
        delay: Math.random() * 0.6,
        duration: 2.6 + Math.random() * 1.6,
        size: 14 + Math.random() * 18,
        drift: (Math.random() - 0.5) * 120,
        symbol: Math.random() > 0.35 ? "❤" : "✨",
      })),
    []
  );

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-8 py-24 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--color-rose) 16%, transparent), transparent 65%)",
        }}
      />

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="ask"
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.5 } }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-xs font-display text-2xl text-[color:var(--color-plum)] sm:text-3xl"
            >
              {finalReveal.leadIn}
            </motion.p>

            <AnimatePresence>
              {showQuestion && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="mt-8 flex flex-col items-center"
                >
                  <p className="max-w-xs font-display text-3xl text-[color:var(--color-rose-deep)] sm:text-4xl">
                    {finalReveal.question}
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setAnswered(true)}
                      className="rounded-full px-8 py-3 font-display text-lg text-white shadow-[0_10px_24px_-10px_rgba(168,102,112,0.7)]"
                      style={{ background: "var(--color-rose-deep)" }}
                    >
                      {finalReveal.yesLabel}
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setAnswered(true)}
                      className="rounded-full border border-[color:var(--color-rose)]/40 px-8 py-3 font-display text-lg text-[color:var(--color-rose-deep)] transition-colors hover:bg-[color:var(--color-rose)]/10"
                    >
                      {finalReveal.alsoYesLabel}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="celebrate"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            <p className="max-w-xs font-display text-3xl text-[color:var(--color-plum)] sm:text-4xl">
              {finalReveal.celebration}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {answered && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          {hearts.map((h) => (
            <motion.span
              key={h.id}
              className="absolute select-none"
              style={{ left: `${h.left}%`, bottom: -20, fontSize: h.size, color: "var(--color-rose)" }}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: [0, 1, 1, 0], y: -520, x: h.drift }}
              transition={{ duration: h.duration, delay: h.delay, ease: "easeOut" }}
            >
              {h.symbol}
            </motion.span>
          ))}
        </div>
      )}
    </section>
  );
}
