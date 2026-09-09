import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { photos } from "../data/content";

export default function PhotoGallery() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <SectionHeading>A few memories</SectionHeading>

      <div className="mx-auto mt-14 grid max-w-md grid-cols-2 gap-x-4 gap-y-10 sm:max-w-3xl sm:grid-cols-3 sm:gap-x-8">
        {photos.map((photo, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: photo.rotation ?? 0 }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            whileTap={{ rotate: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="origin-bottom bg-white p-2.5 pb-8 shadow-[0_10px_28px_-14px_rgba(59,42,52,0.45)]"
          >
            <div className="aspect-square w-full overflow-hidden bg-[color:var(--color-paper-dim)]">
              <img
                src={photo.src}
                alt={photo.caption}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />
            </div>
            <figcaption className="mt-3 text-center font-hand text-lg text-[color:var(--color-ink)]/70">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
