import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  country: string;
  text: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmad Khan',
    role: 'Construction Foreman',
    country: 'Turkey',
    text: 'PAK TURK Global found me a full-time foreman position within three weeks. They assisted with every step — interview scheduling, contract review, and relocation paperwork. The employer met all agreed terms and I received my first salary on time.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mehmet Yilmaz',
    role: 'Electrician',
    country: 'Turkey',
    text: 'I was nervous about moving abroad, but the team guided me through the licensing and documentation clearly. The employer was carefully vetted and the job matched my skills perfectly. Communication was fast and transparent.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sara Ali',
    role: 'Hospitality Staff',
    country: 'Pakistan',
    text: 'From the first call I felt they cared. The recruitment staff explained the process, assisted with visa paperwork, and provided a pre-departure briefing covering rights and expectations. My placement was quick and the host family treated me respectfully.',
    rating: 5
  },
  {
    id: 4,
    name: 'Osman Demir',
    role: 'Carpenter',
    country: 'Turkey',
    text: 'The recruitment process was professional — clear contract terms, prompt responses, and follow-up after placement. My employer follows safety standards and payments have been consistent. I appreciate their responsiveness.',
    rating: 4
  },
  {
    id: 5,
    name: 'Bilal Shah',
    role: 'Truck Driver',
    country: 'Pakistan',
    text: 'Great coordination between office and employer. They organised my medical, visa, and travel documents efficiently and provided a helpful orientation once I arrived. If you want a transparent and supportive recruitment partner, choose PAK TURK Global.',
    rating: 5
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = testimonials.length;

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    };

    const stopAutoSlide = () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = null;
      }
    };

    startAutoSlide();

    return () => stopAutoSlide();
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch handlers for mobile swipe
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
    if (deltaX.current > threshold) {
      handlePrev();
    } else if (deltaX.current < -threshold) {
      handleNext();
    }
    startX.current = null;
    deltaX.current = 0;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div 
        className="relative overflow-hidden rounded-2xl bg-white shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-80 md:h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="p-8 h-full flex flex-col justify-center">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-slate-700 text-lg text-center mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-pakGreen/10 text-pakGreen flex items-center justify-center font-bold mr-4">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role} • {testimonial.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg text-slate-700 transition-all hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg text-slate-700 transition-all hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-pakGreen scale-125'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;