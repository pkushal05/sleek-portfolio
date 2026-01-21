import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";
import { TextPlugin } from "gsap/TextPlugin";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }: { children: React.ReactNode }) => {
    gsap.registerPlugin(useGSAP, TextPlugin);

    const greetings: string[] = [
        "Hello", // English
        "Bonjour", // French
        "Hola", // Spanish
        "Ciao", // Italian
        "કેમછો", // Gujarati (Kem cho)
        "नमस्ते", // Hindi
        "こんにちは", // Japanese
    ];

    const { theme } = useTheme();

    const [numStairs, setNumStairs] = useState(() =>
        window.innerWidth >= 768 ? 5 : 3,
    );
    const stairParentRef = useRef<HTMLDivElement>(null);
    const stairRefs = useRef<Array<HTMLDivElement | null>>([]);
    const childRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const isFirstLoad = useRef(true);
    const hasAnimated = useRef(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setNumStairs(window.innerWidth >= 768 ? 5 : 3);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useGSAP(() => {
        if (hasAnimated.current) return;

        gsap.set(stairParentRef.current, {
            scaleY: 1,
            transformOrigin: "bottom",
        });

        const tl = gsap.timeline({
            onComplete: () => {
                hasAnimated.current = true;
                isFirstLoad.current = false;
            },
        });

        greetings.forEach((greet) => {
            tl.fromTo(
                textRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.3,
                    text: { value: greet, delimiter: " " },
                    ease: "linear",
                },
            );

            tl.to(textRef.current, {
                opacity: 0,
                duration: 0.1,
            });
        });

        tl.to(stairParentRef.current, {
            scaleY: 0,
            duration: 0.8,
            ease: "power4.inOut",
        });

        tl.set(stairParentRef.current, { display: "none" });
    }, []);

    useGSAP(() => {
        if (!hasAnimated.current) return;

        const targets = stairRefs.current.filter(
            (el): el is HTMLDivElement => !!el,
        );
        if (targets.length === 0) return;

        const tl = gsap.timeline();

        tl.set(stairParentRef.current, {
            display: "block",
            opacity: 1,
            scaleY: 100,
        });

        tl.set(targets, { yPercent: -100 });

        tl.set(childRef.current, {
            opacity: 0,
        });

        tl.to(targets, {
            yPercent: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "expo.out",
        });

        tl.to(
            targets,
            {
                yPercent: 100,
                stagger: 0.05,
                duration: 0.8,
                ease: "expo.out",
            },
            "-=0.05",
        );

        tl.to(
            childRef.current,
            {
                opacity: 1,
            },
            "-=0.5",
        );
        tl.set(stairParentRef.current, { display: "none", opacity: 0 });
    }, [theme, location.pathname]);

    return (
        <>
            <div
                ref={stairParentRef}
                className="fixed w-screen h-screen left-0 top-0 bg-transparent z-999 overflow-hidden will-change-transform origin-bottom"
            >
                <div className="absolute inset-0 flex items-center justify-center cursor-none pointer-events-none">
                    <h1
                        ref={textRef}
                        className="text-3xl font-semibold text-background"
                    ></h1>
                </div>

                <div className="flex h-full w-full">
                    {[...Array(numStairs)].map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                stairRefs.current[i] = el || null;
                            }}
                            className="stairs bg-foreground h-full"
                            style={{ width: `${100 / numStairs}%` }}
                        ></div>
                    ))}
                </div>
            </div>
            <div ref={childRef}>{children}</div>
        </>
    );
};

export default Stairs;
