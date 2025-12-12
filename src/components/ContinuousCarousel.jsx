// ContinuousCarousel: continuously scrolls images right-to-left in an infinite loop
import { useRef, useEffect } from 'react';

function ContinuousCarousel({ images = [], speed = 40, className = '', onImageClick }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const lastRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || images.length === 0) return;

    const trackHalfWidth = track.scrollWidth / 2;
    posRef.current = 0;
    lastRef.current = performance.now();

    const step = (now) => {
      const dt = now - lastRef.current;
      lastRef.current = now;

      const delta = (speed * dt) / 1000;
      posRef.current -= delta;

      if (Math.abs(posRef.current) >= trackHalfWidth) {
        posRef.current += trackHalfWidth;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);     // ← only run once


  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex items-center gap-4" style={{ willChange: 'transform' }}>
        {images.concat(images).map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onClick={() => onImageClick(img)}
            className="cursor-pointer w-48 h-64 md:w-60 md:h80 object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default ContinuousCarousel;