import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { thingsILove } from "../data/content";

export default function ThingsILove() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 sm:px-10">
      <SectionHeading>Things I love about you</SectionHeading>
      <p className="mx-auto mt-3 max-w-xs text-center text-sm text-[color:var(--color-ink)]/55 sm:max-w-sm">
        Tap a card to open it.
      </p>

      <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-4 sm:max-w-2xl sm:grid-cols-2">
        {thingsILove.map((note, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: "easeOut" }}
              whileTap={{ scale: 0.98 }}
              aria-expanded={isOpen}
              className="rounded-[4px] border border-[color:var(--color-plum)]/10 bg-[color:var(--color-paper-dim)] p-5 text-left shadow-[0_6px_18px_-14px_rgba(59,42,52,0.4)] transition-colors duration-300 hover:border-[color:var(--color-rose)]/30"
            >
              <p className="font-display text-lg leading-snug text-[color:var(--color-plum)]">
                {note.headline}
              </p>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-[color:var(--color-rose)]/20 pt-3 text-[15px] leading-relaxed text-[color:var(--color-ink)]/75"
                  >
                    {note.message}
                  </motion.p>
                )}
              </AnimatePresence>
              {!isOpen && (
                <span className="mt-3 block text-xs text-[color:var(--color-rose-deep)]/70">
                  tap to open
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
