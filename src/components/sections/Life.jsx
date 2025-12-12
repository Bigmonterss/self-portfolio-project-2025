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



            <div className="max-w-3xl mx-auto px-4 py-30">
                    <h2 
                      className="text-3xl mb-2 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center"
                    >
                      Hobbies
                    </h2>
            </div>        
        </div>
        </RevealOnScroll>
    </section>
    
  );
}

