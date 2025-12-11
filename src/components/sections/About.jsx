import profileImage from '../../assets/images/me.png';
import uoaLogo from '../../assets/images/uoalogo.jpg';
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExperienceItem } from '../ExperienceItem';
import aussIcon from '../../assets/images/experience/auss/auss.jpg'
import calisthenicsPoster from '../../assets/images/experience/auss/calisthenics.jpg'
import duosnightPoster from '../../assets/images/experience/auss/1750676684574.jpg'
import mhsLogo from '../../assets/images/mhslogo.jpg';


export const About = () => {
    const frontendSkills =["React", "TailwindCSS", "HTML", "CSS"]
    const backendSkills = ["Java", "JavaScript", "Python", "Node.js", "Flask", "SQLite" ]

    return (
        <section id="about" className="flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <div className='flex justify-center mb-4'>
                    <img 
                        /* Remove the hover scale if wanted */
                        className="w-50 h-50 rounded-full transition-all hover:scale-220" 
                        src={profileImage} alt="Profile Image"
                    />
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
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <div>
                            <ExperienceItem
                                title="University of Auckland"
                                role="Bachelor's of Computer Science"
                                date="Feb 2023 – Dec 2025"
                                icon={
                                    <img
                                    src={uoaLogo}
                                    alt="University of Auckland Logo"
                                    className="w-10 h-10 object-contain rounded-full"
                                    />
                                }
                                >
                                <div className="text-gray-300 space-y-1">
                                    <p><strong>Certificate of Achievement (A+): </strong> COMPSCI 210, PHYSICS 140</p>
                                    <p><strong>Relevant Coursework: </strong> Web Development, UX/UI, Data Strucures & Algorithms</p>
                                    <p><strong>Activities: </strong> Exec of AUSS (Auckland University Strength Society), Member of UoA Esports Club, WDCC, SESA, and UOACS</p>
                                </div>
                            </ExperienceItem>
                            <ExperienceItem
                                title="Manurewa High School"
                                role="National Certificate of Educational Achievement"
                                date="Jan 2018 – Dec 2022"
                                icon={
                                    <img
                                    src={mhsLogo}
                                    alt="Manurewa High School Logo"
                                    className="w-10 h-10 object-contain rounded-full"
                                    />
                                }
                                >
                                <div className="text-gray-300 space-y-1">
                                    <p><strong>Qualifications: </strong> NCEA Level 1, 2 with Excellence Endorsement, NCEA Level 3 with Achieved</p>
                                    <p><strong>Awards: </strong>Trophy Award Outstanding Contribution to the Creative Arts, Colberty Award for Endeavour in Physics - Trophy + $150</p>
                                    <p><strong>Activities: </strong> Environmental Council, Year 9 Concert Band, Badminton</p>
                                </div>
                            </ExperienceItem>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Experience</h3>
                        <div>
                            <ExperienceItem
                                title="Auckland University Strength Society"
                                role="Social Media Designer Executive"
                                date="Jan 2025 – Dec 2025"
                                icon={
                                    <img
                                    src={aussIcon}
                                    alt="AUSS Logo"
                                    className="w-10 h-10 object-contain rounded-full"
                                    />
                                }
                                >
                                An executive member of the Auckland University Strength Society (AUSS) club in the social media team. 
                                Designing engaging posts to build sign-ups for our training nights using Canva that is uploaded onto our AUSS Instagram page.
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <img 
                                        className="w-full h-auto object-cover rounded-lg" 
                                        src={calisthenicsPoster} 
                                        alt="Calisthenics Training Night Poster"
                                    />
                                    <img 
                                        className="w-full h-auto object-cover rounded-lg" 
                                        src={duosnightPoster} 
                                        alt="Duos Training Night Poster"
                                    />
                                </div>
                            </ExperienceItem>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}