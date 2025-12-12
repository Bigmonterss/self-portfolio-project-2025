import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import ContinuousCarousel from "../ContinuousCarousel";
import ImageModal from "../ImageModal";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// Import images for w2e
import danielKim from '../../assets/images/w2e/danielkim.png';
import theBoys from '../../assets/images/w2e/theboys.png';
import w2eCrew1 from '../../assets/images/w2e/w2ecrew1.png';
import w2eCrew2 from '../../assets/images/w2e/w2ecrew2.png';
import yungKai1 from '../../assets/images/w2e/yungkai1.png';

// Import images for omanawanui hike
import omanawanui1 from '../../assets/images/omanawanui/omanawanui1.jpg';
import omanawanui2 from '../../assets/images/omanawanui/omanawanui2.jpg';
import omanawanui3 from '../../assets/images/omanawanui/omanawanui3.jpg';
import omanawanui4 from '../../assets/images/omanawanui/omanawanui4.jpg';
import omanawanui5 from '../../assets/images/omanawanui/omanawanui5.jpg';

// Import images for nationals
import nationals1 from '../../assets/images/2025nationals/nationals1.png';
import nationals2 from '../../assets/images/2025nationals/nationals2.jpg';
import nationals3 from '../../assets/images/2025nationals/nationals3.jpg';
import nationals4 from '../../assets/images/2025nationals/nationals4.jpg'; 
import nationals5 from '../../assets/images/2025nationals/nationals5.jpg';

// Import images for mercer bay hike
import mercerBay1 from '../../assets/images/mercer/mercer1.jpg';
import mercerBay2 from '../../assets/images/mercer/mercer2.jpg';
import mercerBay3 from '../../assets/images/mercer/mercer3.jpg';
import mercerBay4 from '../../assets/images/mercer/mercer4.jpg';
import mercerBay5 from '../../assets/images/mercer/mercer5.jpg';
import mercerBay6 from '../../assets/images/mercer/mercer6.jpg';
import mercerBay7 from '../../assets/images/mercer/mercer7.jpg';



export const Gallery = () => {
  const [dropdowns, setDropdowns] = useState({
    Vietnam: false,
    W2E: false,
    Omanawanui: false,
    Nationals: false,
    MercerBay: false,
  });
  const [modalImg, setModalImg] = useState(null);
  
  const W2Ephotos = [theBoys, danielKim, w2eCrew1, w2eCrew2, yungKai1];
  const OmanawanuiPhotos = [omanawanui1, omanawanui2, omanawanui3, omanawanui4, omanawanui5];
  const NationalsPhotos = [nationals1, nationals2, nationals3, nationals4, nationals5];
  const MercerBayPhotos = [mercerBay1, mercerBay2, mercerBay3, mercerBay4, mercerBay5, mercerBay6, mercerBay7];

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
          <p className="text-[25px] font-bold flex justify-center mb-1">2026</p>
          {/* Vietnam Dropdown */}
          <div
            className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
            onClick={() => toggleDropdown("Vietnam")}
          >
            <p className="text-[18px]" style={{ color: 'var(--text-color)' }}>2025-2026 Vietnam Trip - 25/12/25 - 26/1/26</p>
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


          {/* 2025 Section */}
          <p className="text-[25px] font-bold flex justify-center mb-1">2025</p>
          {/* Omanawanui Dropdown */}
          <div
            className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
            onClick={() => toggleDropdown("Omanawanui")}
          >
            <p className="text-[18px]" style={{ color: 'var(--text-color)' }}>Ōmanawanui Track hike - 8/12/25</p>
            {dropdowns.Omanawanui ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
          </div>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.Omanawanui ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
            <ContinuousCarousel
              images={OmanawanuiPhotos} 
              speed={40}
              className="mb-2"
              onImageClick={setModalImg}
            />
            <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>Such a beautiful sunset hike. 🌅</p>
          </div>

          {/* W2E Dropdown */}
          <div
            className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
            onClick={() => toggleDropdown("W2E")}
          >
            <p className="text-[18px]" style={{ color: 'var(--text-color)' }}>Wave to Earth concert ft Yung Kai - 7/12/25</p>
            {dropdowns.W2E ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
          </div>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.W2E ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
            <ContinuousCarousel
              images={W2Ephotos}
              speed={40}
              className="mb-2"
              onImageClick={setModalImg}
            />
            <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>Got to see the amazing Daniel Kim!!! 😱</p>
          </div>

          {/* Mercer Bay Loop + Comans Track Dropdown */}
          <div
            className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
            onClick={() => toggleDropdown("MercerBay")}
          >
            <p className="text-[18px]" style={{ color: 'var(--text-color)' }}>Mercer Bay Loop + Coman's Track hike - 22/11/25</p>
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

          {/* 2025 Nationals Dropdown */}
          <div
            className="mb-2 flex justify-center items-center cursor-pointer space-x-2 hover:text-blue-400 transition"
            onClick={() => toggleDropdown("Nationals")}
          >
            <p className="text-[18px]" style={{ color: 'var(--text-color)' }}>2025 NZPF Junior Nationals - 25/5/25</p>
            {dropdowns.Nationals ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
          </div>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdowns.Nationals ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
            <ContinuousCarousel
              images={NationalsPhotos} 
              speed={40}
              className="mb-2"
              onImageClick={setModalImg}
            />
            <p className="text-lg flex justify-center mb-10" style={{ color: 'var(--text-color)' }}>A very fun experience! 🏋️</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* GLOBAL MODAL */}
      <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
    </section>
  );
};

