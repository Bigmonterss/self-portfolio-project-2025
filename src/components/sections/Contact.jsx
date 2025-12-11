import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import emailjs from 'emailjs-com';


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: "" });
        })
        .catch(() => alert ("Oops! Something went wrong, please try again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="mx-auto px-4" style={{ maxWidth: '600px', width: '90vw' }}>
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                        Contact Me.
                    </h2>
                    <p className ="text-center text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Let's Connect! Fill out the form below, or drop me a{' '}
                        <a
                            href="https://www.linkedin.com/in/jayden-pham-6043812b5/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            message on LinkedIn
                        </a>
                    </p>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <p className="text-gray-400 text-lg mb-2">Name</p>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                value={formData.name}
                                className="w-full bg-white/5 border rounded px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                style={{ borderColor: "var(--border-color)", placeholderColor: "var(--placeholder-color)" }}
                                placeholder="Your Name"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <p className="text-gray-400 text-lg mb-2">Email</p>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                className="w-full bg-white/5 border rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                style={{ borderColor: "var(--border-color)", placeholderColor: "var(--placeholder-color)" }}
                                placeholder="Email Address"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <p className="text-gray-400 text-lg mb-2">Message</p>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                style={{ borderColor: "var(--border-color)", placeholderColor: "var(--placeholder-color)" }}
                                placeholder="Your Message"
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
                        {/* Submit button */}
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4
                                        flex items-center justify-center gap-2"
                        >
                            Send Message <IoSend className="text-xl" />
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
} 