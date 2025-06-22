import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const text = "<Bigmonters/>"

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);



    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white transition-all hover:scale-110"> 
                    {text}
                </a>

                <div 
                    className ="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="hover:text-blue-500 transition"> Home </a>
                    <a href="#about" className="hover:text-blue-500 transition"> About </a>
                    <a href="#projects" className="hover:text-blue-500 transition"> Projects </a>
                    <a href="#contact" className="hover:text-blue-500 transition"> Contact </a>
                </div>
            </div>
        </div>
    </nav>
}