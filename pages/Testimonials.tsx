import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad Khan',
    role: 'Foreman',
    country: 'Turkey',
    text: 'PAK TURK Global found me a full-time foreman position within three weeks. They assisted with every step — interview scheduling, contract review, and relocation paperwork. When I arrived the employer met all agreed terms and I received my first salary on time. Their ongoing check-ins made me feel supported.'
  },
  {
    name: 'Mehmet Yilmaz',
    role: 'Electrician',
    country: 'Turkey',
    text: 'I was nervous about moving abroad, but the team guided me through the licensing and documentation clearly. The employer was carefully vetted and the job matched my skills perfectly. Communication was fast and transparent, and they helped arrange safe accommodation near the site.'
  },
  {
    name: 'Sara Ali',
    role: 'Cleaner',
    country: 'Pakistan',
    text: 'From the first call I felt they cared. The recruitment staff explained the process, assisted with visa paperwork, and provided a pre-departure briefing covering rights and expectations. My placement was quick and the host family treated me respectfully. Highly recommended for women seeking overseas work.'
  },
  {
    name: 'Osman Demir',
    role: 'Carpenter',
    country: 'Turkey',
    text: 'The recruitment process was professional — clear contract terms, prompt responses, and follow-up after placement. My employer follows safety standards and payments have been consistent. I appreciate their responsiveness whenever I had questions about my contract.'
  },
  {
    name: 'Bilal Shah',
    role: 'Driver',
    country: 'Pakistan',
    text: 'Great coordination between office and employer. They organised my medical, visa, and travel documents efficiently and provided a helpful orientation once I arrived. If you want a transparent and supportive recruitment partner, choose PAK TURK Global.'
  }
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Testimonials: React.FC = () => {
  const total = testimonials.length;
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if (deltaX.current > threshold) prev();
    else if (deltaX.current < -threshold) next();
    startX.current = null;
    deltaX.current = 0;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Testimonials" subtitle="What workers and partners say about PAK TURK GLOBAL" center />

        <div className="relative mt-8">
          <div
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={containerRef}
              className="flex"
              style={{
                width: `${total * 100}%`,
                transform: `translateX(-${index * (100 / total)}%)`,
                transition: 'transform 500ms ease'
              }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="min-w-full flex-shrink-0 p-6 flex justify-center">
                  <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                    <p className="text-slate-700 italic text-lg mb-6">“{t.text}”</p>
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full bg-pakGreen/10 text-pakGreen flex items-center justify-center font-bold mr-4">
                        {initials(t.name)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{t.name}</div>
                        <div className="text-sm text-slate-500">{t.role} • {t.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white p-2 rounded-full shadow-md text-slate-800"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white p-2 rounded-full shadow-md text-slate-800"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-pakGreen' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
