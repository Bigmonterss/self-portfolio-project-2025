import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import ContinuousCarousel from "../ContinuousCarousel";
import ImageModal from "../ImageModal";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";

// Import images for w2e
import danielKim from '../../assets/images/w2e/danielkim.png';
import theBoys from '../../assets/images/w2e/theboys.png';
import w2eCrew1 from '../../assets/images/w2e/w2ecrew1.png';
import w2eCrew2 from '../../assets/images/w2e/w2ecrew2.png';
import yungKai1 from '../../assets/images/w2e/yungkai1.png';
import loveVideo from '../../assets/images/w2e/videos/love.mp4';
// Video imports
import badVideo from '../../assets/images/w2e/videos/bad.mp4';
import annieVideo from '../../assets/images/w2e/videos/annie.mp4';
import peacheyesVideo from '../../assets/images/w2e/videos/peacheyes.mp4';
import seasonsVideo from '../../assets/images/w2e/videos/seasons.mp4';
import howdoyoudanceVideo from '../../assets/images/w2e/videos/howdoyoudance.mp4';
import blueVideo from '../../assets/images/w2e/videos/blue.mp4';
// Thumbnail imports
import w2ethumb1 from '../../assets/images/w2e/thumbnails/w2ethumb1.png';
import w2ethumb2 from '../../assets/images/w2e/thumbnails/w2ethumb2.png';
import w2ethumb3 from '../../assets/images/w2e/thumbnails/w2ethumb3.png';
import w2ethumb4 from '../../assets/images/w2e/thumbnails/w2ethumb4.png';
import w2ethumb5 from '../../assets/images/w2e/thumbnails/w2ethumb5.png';
import w2ethumb6 from '../../assets/images/w2e/thumbnails/w2ethumb6.png';
import w2ethumb7 from '../../assets/images/w2e/thumbnails/w2ethumb7.png';

// Import images for omanawanui hike
import omanawanui1 from '../../assets/images/omanawanui/omanawanui1.jpg';
import omanawanui2 from '../../assets/images/omanawanui/omanawanui2.jpg';
import omanawanui3 from '../../assets/images/omanawanui/omanawanui3.jpg';
import omanawanui4 from '../../assets/images/omanawanui/omanawanui4.jpg';
import omanawanui5 from '../../assets/images/omanawanui/omanawanui5.jpg';
// Video imports for omanawanui
import omanavid1 from '../../assets/images/omanawanui/videos/omanavid1.mov';
import omanavid2 from '../../assets/images/omanawanui/videos/omanavid2.mov';
// Thumbnail imports
import omanathumb1 from '../../assets/images/omanawanui/thumbnails/omanathumb1.png';
import omanathumb2 from '../../assets/images/omanawanui/thumbnails/omanathumb2.png';

// Import images for nationals
import nationals1 from '../../assets/images/2025nationals/nationals1.png';
import nationals2 from '../../assets/images/2025nationals/nationals2.jpg';
import nationals3 from '../../assets/images/2025nationals/nationals3.jpg';
import nationals4 from '../../assets/images/2025nationals/nationals4.jpg';
import nationals5 from '../../assets/images/2025nationals/nationals5.jpg';
// Thumbnail imports for nationals
import nationalsSquatThumb from '../../assets/images/2025nationals/thumbnails/nationalsthumb1.png';
import nationalsBenchThumb from '../../assets/images/2025nationals/thumbnails/nationalsthumb2.png';
import nationalsDeadThumb from '../../assets/images/2025nationals/thumbnails/nationalsthumb3.png';
// Video imports for nationals
import nationalsSquatVid from '../../assets/images/2025nationals/videos/2025natsquat.mov';
import nationalsBenchVid from '../../assets/images/2025nationals/videos/2025natbench.mov';
import nationalsDeadliftVid from '../../assets/images/2025nationals/videos/2025natdeadlift.mov';

// Import images for mercer bay hike
import mercerBay1 from '../../assets/images/mercer/mercer1.jpg';
import mercerBay2 from '../../assets/images/mercer/mercer2.jpg';
import mercerBay3 from '../../assets/images/mercer/mercer3.jpg';
import mercerBay4 from '../../assets/images/mercer/mercer4.jpg';
import mercerBay5 from '../../assets/images/mercer/mercer5.jpg';
import mercerBay6 from '../../assets/images/mercer/mercer6.jpg';
import mercerBay7 from '../../assets/images/mercer/mercer7.jpg';

// Import images for akl cup
import aklcup1 from '../../assets/images/2025aklcup/aklcup1.jpg';
import aklcup2 from '../../assets/images/2025aklcup/aklcup2.jpg';
import aklcup3 from '../../assets/images/2025aklcup/aklcup3.jpg';
import aklcup4 from '../../assets/images/2025aklcup/aklcup4.png';
// Video imports for akl cup
import aklcupSquat from '../../assets/images/2025aklcup/videos/250kg.mov';
import aklcupBench from '../../assets/images/2025aklcup/videos/145kg.mov';
import aklcupDeadlift from '../../assets/images/2025aklcup/videos/270kg.mov';
// Thumbnail imports for akl cup
import aklcupSquatThumb from '../../assets/images/2025aklcup/thumbnails/aklcupthumb1.png';
import aklcupBenchThumb from '../../assets/images/2025aklcup/thumbnails/aklcupthumb2.png';
import aklcupDeadliftThumb from '../../assets/images/2025aklcup/thumbnails/aklcupthumb3.png';



export const Gallery = () => {
  const [dropdowns, setDropdowns] = useState({
    Vietnam: false,
    W2E: false,
    Omanawanui: false,
    Nationals: false,
    MercerBay: false,
    AklCup: false,
  });
  const [modalImg, setModalImg] = useState(null);

  const W2Ephotos = [theBoys, danielKim, w2eCrew1, w2eCrew2, yungKai1];
  const OmanawanuiPhotos = [omanawanui1, omanawanui2, omanawanui3, omanawanui4, omanawanui5];
  const NationalsPhotos = [nationals1, nationals2, nationals3, nationals4, nationals5];
  const MercerBayPhotos = [mercerBay1, mercerBay2, mercerBay3, mercerBay4, mercerBay5, mercerBay6, mercerBay7];
  const AklCupPhotos = [aklcup1, aklcup2, aklcup3, aklcup4];

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <section id="gallery" className="min-h-screen w-full py-40">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl mb-3 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            My Gallery
          </h2>
          <p className="text-lg flex justify-center mb-8" style={{ color: 'var(--text-color)' }}>Some highlighted activities I've done!</p>

          {/* 2026 Section */}
          <p className="text-[25px] font-bold flex justify-center mb-1" style={{ color: 'var(--text-color)' }}>2026</p>
          {/* Vietnam Dropdown */}
          <div>
            <div
              className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
              onClick={() => toggleDropdown("Vietnam")}
            >
              <p className="text-[18px] font-medium" style={{ color: 'var(--text-color)' }}>2025-2026 Vietnam Trip - 25/12/25 - 26/1/26</p>
              {dropdowns.OmanawVietnamanui ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.Vietnam ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
              <ContinuousCarousel
                images={[]}
                speed={40}
                className="mb-2"
                onImageClick={setModalImg}
              />
              <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>Coming soon lel. :P</p>
            </div>
          </div>

          {/* 2025 Section */}
          <p className="text-[25px] font-bold flex justify-center mb-1" style={{ color: 'var(--text-color)' }}>2025</p>
          {/* Omanawanui Dropdown */}
          <div>
            <div
              className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
              onClick={() => toggleDropdown("Omanawanui")}
            >
              <p className="text-[18px] font-medium" style={{ color: 'var(--text-color)' }}>Ōmanawanui Track hike - 8/12/25</p>
              {dropdowns.Omanawanui ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.Omanawanui ? "max-h-[920px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
              <ContinuousCarousel
                images={OmanawanuiPhotos}
                speed={40}
                className="mb-2"
                onImageClick={setModalImg}
              />
              <p className="text-xl font-medium flex justify-center gap-2">Videos <FaVideo /></p>
              {/* Video Gallery */}
              <div className="flex gap-4 py-2 px-2 overflow-x-auto md:overflow-x-visible justify-start md:justify-center scrollbar-hide">
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={omanavid1}
                    loop
                    playsInline
                    poster={omanathumb2}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    Summit view - before sunset
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={omanavid2}
                    loop
                    playsInline
                    poster={omanathumb1}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    Summit view - sunset
                  </p>
                </div>
              </div>
              <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>Such a beautiful sunset hike. 🌅</p>
            </div>
          </div>

          {/* W2E Dropdown */}
          <div>
            <div
              className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
              onClick={() => toggleDropdown("W2E")}
            >
              <p className="text-[18px] font-medium" style={{ color: 'var(--text-color)' }}>Wave to Earth concert ft Yung Kai - 7/12/25</p>
              {dropdowns.W2E ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.W2E ? "max-h-[9200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
              <ContinuousCarousel
                images={W2Ephotos}
                speed={40}
                className="mb-2"
                onImageClick={setModalImg}
              />
              <p className="text-xl font-medium flex justify-center gap-2">Videos <FaVideo /></p>
              {/* Video Gallery */}
              <div className="flex overflow-x-auto gap-2 py-2 px-2 scrollbar-hide">
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={howdoyoudanceVideo}
                    loop
                    playsInline
                    poster={w2ethumb4}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    how do you dance? - Yung Kai
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={blueVideo}
                    loop
                    playsInline
                    poster={w2ethumb3}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    blue - Yung Kai
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={loveVideo}
                    loop
                    playsInline
                    poster={w2ethumb5}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    사랑으로 (love.) - Wave to Earth
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={badVideo}
                    loop
                    playsInline
                    poster={w2ethumb2}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    bad - Wave to Earth
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={annieVideo}
                    loop
                    playsInline
                    poster={w2ethumb1}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    annie - Wave to Earth
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={peacheyesVideo}
                    loop
                    playsInline
                    poster={w2ethumb6}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    peach eyes - Wave to Earth
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={seasonsVideo}
                    loop
                    playsInline
                    poster={w2ethumb7}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    seasons - Wave to Earth
                  </p>
                </div>
              </div>
              <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>"I'll give you all my life, my seasons" 😭🌊</p>
            </div>
          </div>

          {/* Akl Cup Dropdown */}
          <div>
            <div
              className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
              onClick={() => toggleDropdown("AklCup")}
            >
              <p className="text-[18px] font-medium" style={{ color: 'var(--text-color)' }}>2025 Auckland Cup - 30/11/25</p>
              {dropdowns.AklCup ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.AklCup ? "max-h-[9200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
              <ContinuousCarousel
                images={AklCupPhotos}
                speed={40}
                className="mb-2"
                onImageClick={setModalImg}
              />
              <p className="text-xl font-medium flex justify-center gap-2">Videos <FaVideo /></p>
              {/* Video Gallery */}
              <div className="flex gap-4 py-2 px-2 overflow-x-auto md:overflow-x-visible justify-start md:justify-center scrollbar-hide">
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={aklcupSquat}
                    loop
                    playsInline
                    poster={aklcupSquatThumb}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    250kg squat
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={aklcupBench}
                    loop
                    playsInline
                    poster={aklcupBenchThumb}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    145kg benchpress
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={aklcupDeadlift}
                    loop
                    playsInline
                    poster={aklcupDeadliftThumb}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    270kg deadlift
                  </p>
                </div>
              </div>
              <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>Last competition for this year, managed to get 2nd with a 665kg total! 🥈</p>
            </div>
          </div>

          {/* Mercer Bay Loop + Comans Track Dropdown */}
          <div>
            <div
              className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
              onClick={() => toggleDropdown("MercerBay")}
            >
              <p className="text-[18px] font-medium" style={{ color: 'var(--text-color)' }}>Mercer Bay Loop + Coman's Track hike - 22/11/25</p>
              {dropdowns.MercerBay ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.MercerBay ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
              <ContinuousCarousel
                images={MercerBayPhotos}
                speed={40}
                className="mb-2"
                onImageClick={setModalImg}
              />
              <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>Most tiring 8km track of my life.</p>
            </div>
          </div>

          {/* 2025 Nationals Dropdown */}
          <div>
            <div
              className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
              onClick={() => toggleDropdown("Nationals")}
            >
              <p className="text-[18px] font-medium" style={{ color: 'var(--text-color)' }}>2025 NZPF Junior Nationals - 25/5/25</p>
              {dropdowns.Nationals ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.Nationals ? "max-h-[9200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
              <ContinuousCarousel
                images={NationalsPhotos}
                speed={40}
                className="mb-2"
                onImageClick={setModalImg}
              />
              <p className="text-xl font-medium flex justify-center gap-2">Videos <FaVideo /></p>
              <div className="flex gap-4 py-2 px-2 overflow-x-auto md:overflow-x-visible justify-start md:justify-center scrollbar-hide">
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={nationalsSquatVid}
                    loop
                    playsInline
                    poster={nationalsSquatThumb}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    227.5kg squat
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={nationalsBenchVid}
                    loop
                    playsInline
                    poster={nationalsBenchThumb}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    142.5kg benchpress
                  </p>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <video
                    src={nationalsDeadliftVid}
                    loop
                    playsInline
                    poster={nationalsDeadThumb}
                    controls
                    preload="metadata"
                    className="w-48 h-64 md:w-60 md:h-80 object-cover rounded-lg"
                  />
                  <p className="text-sm mt-1 text-center" style={{ color: 'var(--text-color)' }}>
                    270kg deadlift
                  </p>
                </div>
              </div>
              <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>A very fun experience and drive down to Hamilton, totaled 640kg! 🏋️</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* GLOBAL MODAL */}
      <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
    </section>
  );
};

