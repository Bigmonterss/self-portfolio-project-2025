import { useState } from "react";

import podcastImage1 from '../assets/images/podcast/podcast-image1.jpg';
import podcastImage2 from '../assets/images/podcast/podcast-image2.jpg';
import podcastImage3 from '../assets/images/podcast/podcast-image3.jpg';
import landingPage from '../assets/images/prototype/landing.png';
import registerPage from '../assets/images/prototype/register.png';

const podcastImages = [podcastImage1, podcastImage2, podcastImage3];
const prototypeImages = [landingPage, registerPage];

export const ImageCarousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Carousel ${index + 1}`}
                        className="w-full flex-shrink-0 object-cover"
                    />
                ))}
            </div>

            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/60 z-10"
            >
                ◀
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/60 z-10"
            >
                ▶
            </button>
        </div>
    );
};

// Export images too, if you want to import them from here
export { podcastImages, prototypeImages };
