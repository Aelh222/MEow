import { motion } from "framer-motion";
import { letter, names } from "../data/content";

export default function PersonalMessage() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[34ch] rounded-sm border border-[color:var(--color-plum)]/10 bg-[color:var(--color-paper-dim)] px-7 py-10 shadow-[0_16px_40px_-24px_rgba(59,42,52,0.5)] sm:px-10 sm:py-14"
      >
        <h2 className="font-hand text-4xl text-[color:var(--color-rose-deep)] sm:text-5xl">
          {letter.heading}
        </h2>

        <div className="mt-8 space-y-5">
          {letter.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[16px] leading-[1.85] text-[color:var(--color-ink)]/85"
            >
              {p}
            </p>
          ))}
        </div>

        <p className="mt-10 font-hand text-2xl text-[color:var(--color-rose-deep)]">
          {letter.signOff},
          <br />
          {names.me}
        </p>
      </motion.div>
    </section>
  );
}
