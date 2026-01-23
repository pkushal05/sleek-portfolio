import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navRef = useRef<HTMLDivElement>(null);
    const navLinksRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const { theme, toggleTheme } = useTheme();

    useGSAP(() => {
        tl.current = gsap
            .timeline({ paused: true })
            .to(navRef.current, {
                right: "0%",
                duration: 0.3,
                borderRadius: "0px",
            })
            .from(navLinksRef.current?.children || [], {
                x: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.2,
            })
            .from(".close-menu", {
                opacity: 0,
                duration: 0.2,
            });
    }, []);

    useEffect(() => {
        if (!tl.current) return;
        if (isOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isOpen]);

    return (
        <header className="relative">
            <nav className="fixed inset-x-0 max-w-2xl lg:max-w-3xl mx-auto h-16 flex items-center justify-between px-7 pt-5 rounded-b-xl backdrop-blur-sm z-50">
                <div onClick={() => setIsOpen(false)}>
                    <Logo />
                </div>
                <div className="hidden lg:flex space-x-6 items-center">
                    <h4 className="text-2xl font-medium hover:underline hover:text-muted-foreground">
                        <Link to="/projects">Projects</Link>
                    </h4>
                    <h4 className="text-2xl font-medium hover:underline hover:text-muted-foreground">
                        <Link to="/about">About</Link>
                    </h4>
                    <div className="text-2xl font-medium">
                        <ThemeToggle />
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className={`lg:hidden cursor-pointer ${isOpen && "hidden"}`}
                    aria-label="Open menu"
                >
                    <CgMenuRight size={20} />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={navRef}
                className="fixed top-0 right-[-50%] h-screen bg-primary/0 w-1/2 z-50 p-6 border-l rounded-[100%] backdrop-blur-xs"
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="close-menu absolute top-8 right-6 md:right-24 cursor-pointer"
                    aria-label="Close menu"
                >
                    <IoMdClose size={24} />
                </button>

                <div
                    ref={navLinksRef}
                    className="h-full flex flex-col gap-y-10 py-64 items-start"
                >
                    <h4>
                        <Link
                            to="/projects"
                            className="text-3xl"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>
                    </h4>
                    <h4>
                        <Link
                            to="/about"
                            className="text-3xl"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </h4>
                    <h4
                        className="text-3xl cursor-pointer"
                        onClick={() => {
                            toggleTheme();
                            setIsOpen(false);
                        }}
                    >
                        {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </h4>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-transparent z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;
