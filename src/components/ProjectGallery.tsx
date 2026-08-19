import { useState, useRef } from 'react';
import { projectGalleries } from '@/data/catalog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProjectGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<{ gallery: number; photo: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  }

  function nextPhoto(delta: number) {
    if (!lightboxIdx) return;
    const gallery = projectGalleries[lightboxIdx.gallery];
    const next = lightboxIdx.photo + delta;
    if (next >= 0 && next < gallery.photos.length) {
      setLightboxIdx({ ...lightboxIdx, photo: next });
    }
  }

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Installed Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-harris-serif">
            Project Gallery
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Completed installations demonstrating material and finish quality in residential environments.
          </p>
        </div>

        {projectGalleries.map((gallery, gi) => (
          <div key={gallery.project} className="mb-12 last:mb-0">
            {/* Gallery label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex px-3 py-1 rounded-md text-xs font-semibold text-white bg-hinge-accent">
                {gallery.brand}
              </span>
              <h3 className="text-lg font-semibold text-zinc-800">
                {gallery.project}
              </h3>
              <span className="text-sm text-zinc-400">
                {gallery.doorStyle} door style
              </span>
            </div>

            {/* Scrollable row */}
            <div className="relative group">
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronLeft className="w-5 h-5 text-zinc-700" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronRight className="w-5 h-5 text-zinc-700" />
              </button>

              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none' }}
              >
                {gallery.photos.map((photo, pi) => (
                  <button
                    key={photo}
                    onClick={() => setLightboxIdx({ gallery: gi, photo: pi })}
                    className="shrink-0 w-64 sm:w-72 lg:w-80 snap-start rounded-xl overflow-hidden bg-white border border-zinc-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={photo}
                        alt={`${gallery.project} photo ${pi + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute -top-12 right-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="relative rounded-xl overflow-hidden">
              <img
                src={projectGalleries[lightboxIdx.gallery].photos[lightboxIdx.photo]}
                alt={`${projectGalleries[lightboxIdx.gallery].project} photo ${lightboxIdx.photo + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />

              {/* Nav arrows */}
              {lightboxIdx.photo > 0 && (
                <button
                  onClick={() => nextPhoto(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
              )}
              {lightboxIdx.photo < projectGalleries[lightboxIdx.gallery].photos.length - 1 && (
                <button
                  onClick={() => nextPhoto(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              )}
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-white/60 mt-3">
              {lightboxIdx.photo + 1} of {projectGalleries[lightboxIdx.gallery].photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
