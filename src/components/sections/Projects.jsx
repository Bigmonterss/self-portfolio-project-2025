import { RevealOnScroll } from "../RevealOnScroll";
import { ImageCarousel, podcastImages, prototypeImages, concertImages, bearlingoImages, portfolioImages } from '../ProjectImageCarousel';
import { useState, useEffect } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

export const Projects = () => {
    const projects = [
        { title: 'Podcast Library', desc: 'A full-stack group project where we had to create a podcast library web app where you are able to add, remove and browse for podcasts. It features a user authentication system, as well as using a database to store all podcasts, ratings, playlists, and login credentials.', tech: ['Python','Flask','HTML','CSS','Git'], images: podcastImages, link: 'https://github.com/Bigmonterss/2024-podcast-library-groupproject' },
        { title: 'Concert Booking', desc: 'Given a fully styled frontend and other relevant code, our backend work focused on implementing a RESTful web service for browsing concerts, checking seat availability, and making secure reservations with authentication and real-time sell-out alerts.', tech: ['Java','SQL','XML'], images: concertImages, link: '#' },
        { title: 'High-Fidelity Prototype', desc: 'High-fidelity prototype of a pet-sitting service website featuring a landing page and user registration form. Focused on visual design, accessibility, and brand colour consistency. Based on Gestalt principles, semantic structure, and user-friendly form elements.', tech: ['UX/UI','Figma'], images: prototypeImages, link: 'https://www.figma.com' },
        { title: 'Capstone - BearLingo', desc: 'An AI cross-platform job-seeking and career progression/learning application inspired by Duolingo. With a modular, component-based design, and integrating authentication and real-time database features. Delivering biweekly progress updates and live demos to the client.', tech: ['Flutter','Dart','Firebase','OpenAI','Git'], images: bearlingoImages, link: 'https://github.com/uoa-compsci399-s2-2025/capstone-project-s2-2025-team-14.git' },
        { title: 'Portfolio Website', desc: 'A personal portfolio website to showcase my projects, skills, life, and experience. Built with a focus on responsive design, accessibility, and performance optimization to ensure a seamless user experience across all devices.', tech: ['React','Tailwind CSS','JavaScript'], images: portfolioImages, link: 'https://github.com/Bigmonterss/self-portfolio-project-2025.git'}
    ];

    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
    const next = () => setIndex((i) => (i + 1) % projects.length);

    // keyboard support
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl mb-2 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <p className="text-lg flex justify-center mb-8" style={{ color: 'var(--text-color)' }}>A showcase of projects I have contributed in.</p>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
                                {projects.map((p, i) => (
                                    <div key={i} className="w-full flex-shrink-0 px-2">
                                        <div className="p-5 rounded-xl border w-full max-w-sm md:max-w-2xl mx-auto" style={{ borderColor: 'var(--border-color)' }}>
                                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-color)' }}>{p.title}</h3>
                                            <p className="mb-4" style={{ color: 'var(--text-color)' }}>{p.desc}</p>
                                            <div className="mb-4">
                                                {p.tech.map((t, k) => (
                                                    <span key={k} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm mr-2 mb-2 inline-block">{t}</span>
                                                ))}
                                            </div>

                                            <div className="relative mb-4">
                                                <div className="mx-auto max-w-full">
                                                    <ImageCarousel images={p.images} />
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Project ➜</a>
                                            </div>

                                            {/* Mobile arrows below card */}
                                            <div className="flex justify-between mt-4 md:hidden">
                                                <button
                                                    aria-label="Previous project"
                                                    onClick={prev}
                                                    style={{ backgroundColor: "var(--theme-toggle-bg)", border: "1px solid var(--border-color)", color: "var(--color)" }}
                                                    className="p-3 rounded-full shadow hover:opacity-90 transition"
                                                >
                                                    <FaLongArrowAltLeft size={18} />
                                                </button>
                                                <button
                                                    aria-label="Next project"
                                                    onClick={next}
                                                    style={{ backgroundColor: "var(--theme-toggle-bg)", border: "1px solid var(--border-color)", color: "var(--color)" }}
                                                    className="p-3 rounded-full shadow hover:opacity-90 transition"
                                                >
                                                    <FaLongArrowAltRight size={18} />
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Desktop arrows on sides */}
                        <button
                            aria-label="Previous project"
                            onClick={prev}
                            style={{ backgroundColor: "var(--theme-toggle-bg)", border: "1px solid var(--border-color)", color: "var(--color)" }}
                            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg z-20 hover:opacity-90 transition sm:left-4 md:left-6 lg:left-20"
                        >
                            <FaLongArrowAltLeft size={20} />
                        </button>
                        <button
                            aria-label="Next project"
                            onClick={next}
                            style={{ backgroundColor: "var(--theme-toggle-bg)", border: "1px solid var(--border-color)", color: "var(--color)" }}
                            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg z-20 hover:opacity-90 transition sm:right-4 md:right-6 lg:right-20"
                        >
                            <FaLongArrowAltRight size={20} />
                        </button>

                        <div className="flex justify-center gap-2 mt-6">
                            {projects.map((_, i) => (
                                <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300/40'}`}></button>
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
