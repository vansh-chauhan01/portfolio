import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#Skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className="sticky z-50 top-0 w-full flex flex-col bg-[#13242C]">
            <div className="w-full h-16 md:h-18 flex items-center justify-between">
                <p className="text-[#A9ACAD] hover:text-white text-base sm:text-lg shadow-md ml-3">
                    <a href="#hero">Vansh Chauhan</a>
                </p>

                {/* Desktop nav */}
                <nav className="hidden md:flex mr-5 items-center justify-center text-[#A9ACAD] hover:text-white text-lg">
                    <ul className="flex items-center gap-8 text-[#A9ACAD] text-lg">
                        {navLinks.map((link) => (
                            <li key={link.href} className="hover:text-white">
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden mr-4 text-[#A9ACAD] hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile nav dropdown */}
            <nav
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-60" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col items-start gap-4 text-[#A9ACAD] text-lg px-5 pb-4">
                    {navLinks.map((link) => (
                        <li key={link.href} className="hover:text-white">
                            <a href={link.href} onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;