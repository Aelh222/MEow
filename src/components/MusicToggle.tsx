import { motion } from "framer-motion";

export default function MusicToggle({
  playing,
  onToggle,
}: {
  playing: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileTap={{ scale: 0.9 }}
      aria-label={playing ? "Pause music" : "Play music"}
      aria-pressed={playing}
      className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-plum)]/10 bg-[color:var(--color-paper)]/85 text-[color:var(--color-rose-deep)] shadow-[0_6px_16px_-8px_rgba(59,42,52,0.4)] backdrop-blur-sm"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {playing ? (
        // pause / playing indicator — small animated bars
        <span className="flex items-end gap-[3px]" aria-hidden="true">
          {[6, 10, 7].map((h, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-current"
              animate={{ height: [h, h + 5, h] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
              style={{ height: h }}
            />
          ))}
        </span>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M6 11.5V3.8L13 2.3V10"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse cx="4.3" cy="11.5" rx="1.7" ry="1.4" stroke="currentColor" strokeWidth="1.3" />
          <ellipse cx="11.3" cy="10" rx="1.7" ry="1.4" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      )}
    </motion.button>
  );
}
