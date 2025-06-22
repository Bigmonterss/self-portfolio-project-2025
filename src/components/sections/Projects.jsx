import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <h3 className="text-xl font-bold mb-2">Podcast Library</h3>
                        <p className="text-gray-400 mb-4">
                            A podcast library web app where you are able to add, remove and browse for podcasts. 
                            The web app features an user authentication system, as well as using a database to store all podcasts, ratings, playlists, and login credentials.
                        </p>
                        <div>
                            {["Python", "Flask", "Jinja", "HTML", "CSS"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            {/* for later */}
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colours my-4">
                                View Project 
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <h3 className="text-xl font-bold mb-2">Concert Booking Web Service</h3>
                        <p className="text-gray-400 mb-4">
                            A RESTful web service for a concert venue, which allows users to browse concerts, check seat availability, and make secure reservations with token-based authentication and real-time sell-out alerts.
                        </p>
                        <div>
                            {["Java", "SQL", "XML"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            {/* for later */}
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colours my-4">
                                View Project 
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <h3 className="text-xl font-bold mb-2">High-Fidelity Prototype</h3>
                        <p className="text-gray-400 mb-4">
                            High-fidelity prototype of a pet-sitting service website featuring a landing page and user registration form. Focused on visual design, accessibility for users, and brand colour consistency derived from a custom HSL value. Includes layout based on Gestalt principles, semantic structure, and user-friendly form elements.
                        </p>
                        <div>
                            {["UX/UI", "Figma"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            {/* for later */}
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colours my-4">
                                View Project 
                            </a>
                        </div>
                    </div>

                    {/* Capstone */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
                        <h3 className="text-xl font-bold mb-2">COMPSCI 399 Capstone</h3>
                        <p className="text-gray-400 mb-4">
                            To be continued
                        </p>
                        <div>
                            {[].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            {/* for later */}
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colours my-4">
                                View Project 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}