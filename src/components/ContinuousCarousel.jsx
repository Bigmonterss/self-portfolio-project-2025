import { useRef, useEffect } from 'react';

function ContinuousCarousel({ images = [], speed = 40, className = '', onImageClick }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const lastRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || images.length === 0) return;

    lastRef.current = performance.now();

    const step = (now) => {
      const dt = now - lastRef.current;
      lastRef.current = now;

      const scrollAmount = (speed * dt) / 1000;
      posRef.current -= scrollAmount;

      const totalWidth = track.scrollWidth / 2; // width of one set of images
      posRef.current = posRef.current % totalWidth; // wrap continuously

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, [images, speed]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex items-center gap-4 whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {images.concat(images).map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onClick={() => onImageClick?.(img)}
            className="cursor-pointer w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default ContinuousCarousel;
