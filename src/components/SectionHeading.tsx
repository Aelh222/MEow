import { motion } from "framer-motion";

export default function SectionHeading({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`font-display text-3xl leading-tight text-[color:var(--color-plum)] sm:text-4xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {children}
    </motion.h2>
  );
}
