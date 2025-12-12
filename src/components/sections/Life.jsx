import { RevealOnScroll } from "../RevealOnScroll";
import tofuImage from '../../assets/images/tofu.png';

export const Life = () => {
  return (
    
    <section
      id="wip"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div>
            <p className="text-[67px] flex justif-center">Work in progress</p>
            <p className="text-[25px] flex justify-center">Pls come back later!</p>
            <img 
                /* Remove the hover scale if wanted */
                className="w-125 h-175 flex justify-center mt-8 mx-auto" 
                src={tofuImage} alt="Profile Image"
            />
        </div>
        </RevealOnScroll>
    </section>
    
  );
}

