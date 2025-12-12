import { RevealOnScroll } from "../RevealOnScroll";
import JumpNotification from "../JumpNotification";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


export const Home = () => {
    const sentences = [
        "Graduate student at the University of Auckland.",
        "Aspiring Software Developer.",
        "Tech enthusiast and lifelong learner.",
        "Cat Lover.",
        "Powerlifter.",
    ];

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // fade out
            setVisible(false);
            // after fade-out, switch sentence and fade in
            timeoutRef.current = setTimeout(() => {
                setIndex((i) => (i + 1) % sentences.length);
                setVisible(true);
            }, 300); // match duration of CSS transition
        }, 3000); // time each sentence stays visible

        return () => {
            clearInterval(interval);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <RevealOnScroll>
        <section
            id="home"
            className="min-h-screen relative flex items-center justify-center"
        >
            {/* Foreground content */}
            
            <div>
                <h1 className="text-center text-5xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right"> 
                    Hi, I'm Jayden Pham.
                </h1>

                <p
                    className={`text-center text-lg mb-12 max-w-lg mx-auto flex justify-center transition-opacity duration-300`}
                    style={{
                        color: "var(--text-color)",
                        opacity: visible ? 1 : 0,
                    }}
                >
                    {sentences[index]}
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
                <Link 
                    to="/about" 
                    className="text-m flex justify-center py-3 hover:text-blue-500 transition">
                    Learn more about me
                </Link>
            </div>
            <JumpNotification />
        </section>
        </RevealOnScroll>
    );
}