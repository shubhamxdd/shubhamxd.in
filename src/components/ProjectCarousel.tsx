import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  onZoom?: (image: string) => void;
  className?: string;
  showZoom?: boolean;
}

export const ProjectCarousel = ({ images, onZoom, className = "", showZoom = true }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative group/carousel overflow-hidden bg-[#050505] ${className}`}>
      {/* Immersive Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`bg-${currentIndex}`}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover blur-[80px] scale-150"
        />
      </AnimatePresence>

      {/* Main Image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className={`w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${showZoom ? 'cursor-zoom-in' : 'cursor-pointer'}`}
            onClick={() => {
              if (showZoom && onZoom) {
                onZoom(images[currentIndex]);
              }
            }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary hover:text-black"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary hover:text-black"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === currentIndex ? "bg-primary w-4" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Zoom Hint Overlay (Mobile Friendly) */}
      {showZoom && (
        <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-full">
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-40 pointer-events-none" />
    </div>
  );
};
