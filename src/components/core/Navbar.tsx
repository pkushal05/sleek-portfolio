import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const { toggleTheme } = useTheme();

  useGSAP(
    () => {
      // Initial hidden state
      gsap.set(navRef.current, { right: "-50%" });

      tl.current = gsap
        .timeline({ paused: true })
        .to(navRef.current, {
          right: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .from(
          ".nav-links",
          {
            x: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "-=0.1"
        );
    },
    { scope: navRef }
  );

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
      <nav className="max-w-2xl lg:max-w-4xl mx-auto h-16 flex items-center justify-between px-7 pt-5 rounded-b-xl backdrop-blur-2xl">
        <Logo />

        <ul className="hidden lg:flex space-x-4 items-center">
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <CgMenuRight size={20} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={navRef}
        className="fixed top-0 right-0 h-screen w-1/2 bg-background/95 z-50 p-6 backdrop-blur-2xl border-l"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 cursor-pointer"
          aria-label="Close menu"
        >
          <IoMdClose size={24} />
        </button>

        <ul className="h-full flex flex-col gap-y-10 justify-center">
          <li className="nav-links">
            <Link
              to="#projects"
              className="text-3xl"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="nav-links">
            <Link
              to="#about"
              className="text-3xl"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-links">
            <Button onClick={() => {toggleTheme(); setIsOpen(false);}} variant="outline">Toggle Theme</Button>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
