import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const MobileMenu = ({menuOpen, setMenuOpen, isDark, toggleTheme}) => {

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close Menu"
            >
            &times;
            </button>
            <HashLink 
                smooth to="/#home" 
                onClick={() => setMenuOpen(false)} 
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            > 
                Home 
            </HashLink>
            <Link 
                to="/about" 
                onClick={() => setMenuOpen(false)} 
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            > 
                About 
            </Link>
            <HashLink 
                smooth to="/#projects" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            > 
                Projects 
            </HashLink>
            <HashLink 
                smooth to="/#contact" 
                onClick={() => setMenuOpen(false)} 
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            > 
                Contact 
            </HashLink>

            {/* Theme control for mobile menu */}        
            <div className={`mt-2 flex items-center gap-3 transition-all duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <span className="text-white">{isDark ? <MdDarkMode size={20}/> : <MdLightMode size={20}/> }</span>
                <button
                    onClick={toggleTheme}
                    aria-pressed={isDark}
                    className={`w-11 h-6 flex items-center p-1 rounded-full transition-colors
                        ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
                    title="Toggle theme"
                >
                    <span className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform
                        ${isDark ? 'translate-x-5' : 'translate-x-0'}`}/>
                </button>
            </div>
            
        </div>
    );

}