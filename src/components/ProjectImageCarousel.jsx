import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight  } from "react-icons/fa";
{/*Podcast images*/}
import podcastImage1 from '../assets/images/podcast/podcast-image1.jpg';
import podcastImage2 from '../assets/images/podcast/podcast-image2.jpg';
import podcastImage3 from '../assets/images/podcast/podcast-image3.jpg';

{/*Figma prototype images*/}
import landingPage from '../assets/images/prototype/landing.png';
import registerPage from '../assets/images/prototype/register.png';

{/*Concert service images*/}
import concertImage1 from '../assets/images/concert/booking-page.png';
import concertImage2 from '../assets/images/concert/concerts-page.png';
import concertImage3 from '../assets/images/concert/view-performer.png';

{/*Bearlingo images*/}
import bearlingoImage1 from '../assets/images/bearlingo/1.png';
import bearlingoImage2 from '../assets/images/bearlingo/2.png';
import bearlingoImage3 from '../assets/images/bearlingo/3.png';
import bearlingoImage4 from '../assets/images/bearlingo/4.png';
import bearlingoImage5 from '../assets/images/bearlingo/5.png';
import bearlingoImage6 from '../assets/images/bearlingo/6.png';
import bearlingoImage7 from '../assets/images/bearlingo/7.png';
import bearlingoImage8 from '../assets/images/bearlingo/8.png';

const podcastImages = [podcastImage1, podcastImage2, podcastImage3];
const prototypeImages = [landingPage, registerPage];
const concertImages = [concertImage1, concertImage2, concertImage3];
const bearlingoImages = [bearlingoImage1, bearlingoImage2, bearlingoImage3, bearlingoImage4, bearlingoImage5, bearlingoImage6, bearlingoImage7, bearlingoImage8]

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
        // set fixed height and ensure images fill it
        <div className="relative overflow-hidden w-full h-64">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Carousel ${index + 1}`}
                        className="w-full h-64 flex-shrink-0 object-cover"
                    />
                ))}
            </div>

            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/60 z-10"
            >
                <FaLongArrowAltLeft />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/60 z-10"
            >
                <FaLongArrowAltRight />
            </button>
        </div>
    );
};

// Export images too, if you want to import them from here
export { podcastImages, prototypeImages, concertImages, bearlingoImages };
