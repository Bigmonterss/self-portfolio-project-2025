import { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const text = "<Bigmonters/>"

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    // init theme from localStorage / apply CSS vars + tailwind 'dark' class
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const dark = saved === "dark";
        setIsDark(dark);
        document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", dark);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
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

                <div className="hidden md:flex items-center space-x-6">
                    <a href="#home" className="hover:text-blue-500 transition"> Home </a>
                    <a href="#about" className="hover:text-blue-500 transition"> About </a>
                    <a href="#projects" className="hover:text-blue-500 transition"> Projects </a>
                    <a href="#contact" className="hover:text-blue-500 transition"> Contact </a>

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