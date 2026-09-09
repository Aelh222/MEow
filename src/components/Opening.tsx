import { motion } from "framer-motion";
import AmbientDrift from "./AmbientDrift";
import Bow from "./Bow";
import { opening } from "../data/content";

export default function Opening({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      className="fixed inset-0 z-40 flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[color:var(--color-paper)] px-8 text-center"
      exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, color-mix(in srgb, var(--color-rose) 14%, transparent), transparent 60%)",
        }}
      />
      <AmbientDrift />

      <motion.div
        initial={{ opacity: 0, y: -6, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        className="mb-3"
      >
        <Bow size={30} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="font-display text-4xl text-[color:var(--color-plum)] sm:text-5xl"
      >
        {opening.greeting}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="mt-4 max-w-xs text-base text-[color:var(--color-ink)]/70 sm:text-lg"
      >
        {opening.subline}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        whileTap={{ scale: 0.96 }}
        onClick={onOpen}
        className="mt-12 rounded-full border border-[color:var(--color-rose)]/40 px-8 py-3 font-display text-lg text-[color:var(--color-rose-deep)] transition-colors duration-300 hover:bg-[color:var(--color-rose)]/10 active:bg-[color:var(--color-rose)]/15"
      >
        {opening.buttonLabel}
      </motion.button>
    </motion.section>
  );
}
