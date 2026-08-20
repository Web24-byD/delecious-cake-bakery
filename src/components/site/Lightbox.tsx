import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; alt: string; label?: string };

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(((index as number) + 1) % images.length);
      if (e.key === "ArrowLeft")
        onNavigate(((index as number) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/94 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute top-4 right-4 rounded-full p-2.5 text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(((index as number) - 1 + images.length) % images.length);
            }}
            className="absolute left-2 rounded-full p-2.5 text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[86vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[index as number]?.src}
              alt={images[index as number]?.alt ?? ""}
              className="max-h-[78vh] w-auto rounded-xl object-contain shadow-frame"
            />
            <figcaption className="mt-3 text-center text-[12.5px] tracking-[0.14em] text-ivory/70 uppercase">
              {images[index as number]?.label}
            </figcaption>

          </motion.figure>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(((index as number) + 1) % images.length);
            }}
            className="absolute right-2 rounded-full p-2.5 text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
