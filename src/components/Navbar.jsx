import { useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = ({menuOpen, setMenuOpen, isDark, toggleTheme}) => {
    const text = "<Bigmonters/>"

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a
                    href="#home"
                    className="font-mono text-xl font-bold transition-all hover:scale-110"
                    style={{ color: isDark ? 'white' : 'black' }}
                    >
                    {text}
                </a>

                <div 
                    className ="w-7 h-7 relative cursor-pointer z-40 md:hidden text-xl" 
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>
                
                {/* Navigation links */}
                <div className="hidden md:flex items-center space-x-6">
                    <HashLink smooth to="/self-portfolio-project-2025/#home" className="hover:text-blue-500 transition"> Home </HashLink>
                    <Link to="/self-portfolio-project-2025/about" className="hover:text-blue-500 transition"> About </Link>
                    <HashLink smooth to="/self-portfolio-project-2025/#projects" className="hover:text-blue-500 transition"> Projects </HashLink>
                    <HashLink smooth to="/self-portfolio-project-2025/#contact" className="hover:text-blue-500 transition"> Contact </HashLink>
                    <Link to="/self-portfolio-project-2025/wip" className="hover:text-blue-500 transition"> WIP </Link>
                    

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-pressed={isDark}
                        className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-white/5 transition"
                        title="Toggle theme"
                    >
                        <span className="text-sm hidden md:inline">{isDark ? <MdDarkMode size={20}/> : <MdLightMode size={20}/> }</span>

                        <span className={`w-11 h-6 flex items-center p-1 rounded-full transition-colors
                            ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}>
                            <span className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform
                                ${isDark ? 'translate-x-5' : 'translate-x-0'}`}/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
}