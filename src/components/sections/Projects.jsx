import { RevealOnScroll } from "../RevealOnScroll";
import { ImageCarousel, podcastImages, prototypeImages, concertImages, bearlingoImages } from '../ProjectImageCarousel';

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        <h3 className="text-xl font-bold mb-2">Podcast Library</h3>
                        <p className="mb-4" style={{ color: "var(--text-color)" }}>
                            A full-stack group project where we had to create a podcast library web app where you are able to add, remove and browse for podcasts. 
                            It features a user authentication system, as well as using a database to store all podcasts, ratings, playlists, and login credentials.
                        </p>
                        <div className="mb-4">
                            {["Python", "Flask", "HTML", "CSS", "Git",].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="relative mb-4">
                            <ImageCarousel images={podcastImages}/>
                        </div>
                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/Bigmonterss/2024-podcast-library-groupproject" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colours"
                            >   
                                View Project ➜
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        <h3 className="text-xl font-bold mb-2">Concert Booking Web Service</h3>
                        <p className="mb-4" style={{ color: "var(--text-color)" }}>
                            Given a fully styled frontend and other relevant code, our backend work focused on implementing a RESTful web service for browsing concerts, checking seat availability, and making secure reservations with authentication and real-time sell-out alerts. This was a group project.
                        </p>
                        <div className="mb-4">
                            {["Java", "SQL", "XML", "Git"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                         <div className="relative">
                            <ImageCarousel images={concertImages}/>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        <h3 className="text-xl font-bold mb-2">High-Fidelity Prototype</h3>
                        <p className="mb-4" style={{ color: "var(--text-color)" }}>
                            High-fidelity prototype of a pet-sitting service website featuring a landing page and user registration form. Focused on visual design, accessibility for users, and brand colour consistency derived from a custom HSL value. Includes layout based on Gestalt principles, semantic structure, and user-friendly form elements.
                        </p>
                        <div className="mb-4">
                            {["UX/UI", "Figma"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="relative mb-4">
                            <ImageCarousel images={prototypeImages}/>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://www.figma.com/design/NPadKXRe7nwKTqYZb9xH0Y/Hi-Fidelity-Prototype-COMPSCI-345?node-id=34-230&t=RfbLftyNpM6TEAcr-1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colours"
                            >  
                                View Project ➜
                            </a>
                        </div>
                    </div>

                    {/* Capstone */}
                    <div className="p-6 rounded-xl border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]"
                        style={{ borderColor: 'var(--border-color)' }}
                    >
                        <h3 className="text-xl font-bold mb-2">Capstone Project - BearLingo</h3>
                        <p className="mb-4" style={{ color: "var(--text-color)" }}>
                            An AI cross-platform job-seeking and career progression/learning application inspired by Duolingo. My responsibilities included building the frontend with a modular, 
                            component-based design, and integrating Firebase for authentication and real-time database features. Delivering biweekly progress updates and live demos to the client.
                        </p>
                        <div className="mb-4">
                            {["Flutter", "Dart", "Firebase", "OpenAI", "Git"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="relative mb-4">
                            <ImageCarousel images={bearlingoImages}/>
                        </div>

                        <div className="flex justify-between items-center">
                            {/* for later */}
                            <a href="https://github.com/uoa-compsci399-s2-2025/capstone-project-s2-2025-team-14.git" 
                                target="_blank"
                                rel="noopener norefferer"
                                className="text-blue-400 hover:text-blue-300 transition-colours my-4">
                                View Project ➜
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}