import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Bow from "./Bow";
import { storyMoments } from "../data/content";

export default function OurStory() {
  return (
    <section className="relative px-6 py-24 sm:px-10">
      <SectionHeading>How we got here</SectionHeading>

      <div className="relative mx-auto mt-16 max-w-md">
        {/* the thread — a timeline is genuinely sequential, so a connecting line earns its place */}
        <div
          className="absolute left-[15px] top-2 bottom-2 w-px sm:left-[19px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-gold), var(--color-gold), transparent)",
            opacity: 0.5,
          }}
        />

        <ol className="space-y-16">
          {storyMoments.map((moment, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative pl-10 sm:pl-14"
            >
              <span
                className="absolute left-0 top-0 sm:left-1"
                aria-hidden="true"
              >
                <Bow size={22} />
              </span>

              <p className="font-display text-sm tracking-wide text-[color:var(--color-rose-deep)]">
                {moment.date}
              </p>

              {moment.photo && (
                <div className="relative mt-3 mb-4 aspect-[4/3] w-full max-w-xs overflow-hidden rounded-sm bg-[color:var(--color-paper-dim)] shadow-[0_8px_24px_-12px_rgba(59,42,52,0.35)]">
                  <img
                    src={moment.photo}
                    alt={moment.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}

              <h3 className="font-display text-xl text-[color:var(--color-plum)]">
                {moment.title}
              </h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[color:var(--color-ink)]/75">
                {moment.memory}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
