import { RevealOnScroll } from "../RevealOnScroll";
import homeImage from "../../assets/images/home.png";


export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen relative flex items-center justify-center"
        >
            {/* Background image layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
                style={{ backgroundImage: `url(${homeImage})` }}   
            >
                {/*Background bottom blur */}
                <div 
                    className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-transparent to-black"
                    >
                </div>
            </div>

            {/* Foreground content */}
            <RevealOnScroll>
            <div>
                <h1 className="text-center text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right"> 
                    Hi, I'm Jayden Pham
                </h1>
                <p className ="text-center text-gray-400 text-lg mb-8 max-w-lg mx-auto flex justify-center">
                    A final year CompSci student at the University of Auckland.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded-3xl font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                        View Projects
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-3xl font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}