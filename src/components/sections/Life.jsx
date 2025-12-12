import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import danielKim from '../../assets/images/w2e/danielkim.png';
import theBoys from '../../assets/images/w2e/theboys.png';
import w2eCrew1 from '../../assets/images/w2e/w2ecrew1.png';
import w2eCrew2 from '../../assets/images/w2e/w2ecrew2.png';
import yungKai1 from '../../assets/images/w2e/yungkai1.png';

export const Life = () => {

  const [modalImg, setModalImg] = useState(null);

  return (
    <section id="life" className="min-h-screen w-full py-20">
      <RevealOnScroll>
        <div>
          <p className="text-[67px] flex justify-center mb-8">
            Work in progress
          </p>
          <p className="text-[25px] flex justify-center">
            Pls come back later!
          </p>

          <div className="max-w-5xl mx-auto px-4 py-30">
            <h2 className="text-3xl mb-2 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
              Activities
            </h2>

            <p>Wave to Earth concert ft Yung Kai</p>

            <ContinuousCarousel
              images={[theBoys, danielKim, w2eCrew1, w2eCrew2, yungKai1]}
              speed={40}
              className="mb-10"
              onImageClick={setModalImg}
            />

            <h2 className="text-3xl mb-2 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
              Hobbies
            </h2>
          </div>
        </div>
      </RevealOnScroll>

      {/* GLOBAL MODAL (not inside any clipped container) */}
      <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
    </section>
  );
};


















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


function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg text-xl"
        >
          ×
        </button>

        <img
          src={src}
          alt=""
          className="max-h-[60vh] max-w-[60vw] rounded-xl"
        />
      </div>
    </div>
  );
}

