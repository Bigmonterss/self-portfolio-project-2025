import profileImage from '../../assets/images/me.png';
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills =["React", "TailwindCSS", "HTML5", "CSS3"]
    const backendSkills = ["Java", "JavaScript", "Python", "Node.js", "Flask", "MySQL" ]

    return (
        <section id="about" className="flex items-center justify-center py-50">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <div className='flex justify-center mb-4'>
                    <img 
                        /* Remove the hover scale if wanted */
                        className="w-50 h-50 rounded-full transition-all hover:scale-220" 
                        src={profileImage} alt="Profile Image"/>
                </div>

                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="flex justify-center mb-4 gap-3">
                    <a 
                        href="https://www.linkedin.com/in/jayden-pham-6043812b5/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all hover:text-blue-500"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a 
                        href="https://github.com/Bigmonterss" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all hover:text-blue-500"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a 
                        href="https://www.instagram.com/bigmonters/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all hover:text-blue-500"
                    >
                        <FaInstagram size={30} />
                    </a>
                </div>
            

                {/* Small intro about me section*/}
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I am a final year student currently studying a Bachelor of Science (BSc) majoring in Computer Science at The University of Auckland. 
                        I chose to pursue in Computer Science because I've always grown up being surrounded by technology. 
                        I am passionate into becoming a front-end developer with expertise in creative and technical skills to create or solve products for clients.
                        I am always willing to look for opportunities to upskill and improve on building more meaningful and effective applications.  
                    </p>

                    {/*Frontend and Backend skills section*/}
                    <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work and Education section*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> BSc in Computer Science</strong> - University of Auckland (2023-2025)
                            </li>
                            <li>
                                Relevant Coursework: Web Development, UX/UI
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div>
                            <h4 className="font-semibold"> Sales Assistant at Just Group (2022-2025) </h4>
                            <p> Interacting with customers, providing product recommendations or assistance</p>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}