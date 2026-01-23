import React, { useRef } from "react";
import { Link } from "react-router-dom"; // or 'next/link'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NotFound = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(".char", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "power4.out",
            }).from(
                ".content-fade",
                {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.4",
            );

            gsap.to(".floating", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        },
        { scope: containerRef },
    );

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(textRef.current, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out",
        });
    };

    return (
        <main
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-screen h-screen bg-background flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none floating">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold text-foreground select-none">
                    404
                </div>
            </div>

            <div ref={textRef} className="relative z-10 text-center px-4">
                <h1 className="flex overflow-hidden text-8xl md:text-[12rem] font-bold tracking-tighter leading-none italic uppercase justify-center">
                    {"Lost".split("").map((char, i) => (
                        <span key={i} className="char inline-block">
                            {char}
                        </span>
                    ))}
                </h1>

                <div className="content-fade mt-8 space-y-6">
                    <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto">
                        The digital coordinates you provided lead to a
                        non-existent space. Perhaps it was moved, or never
                        existed at all.
                    </p>

                    <div className="pt-4">
                        <Link
                            to="/"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full transition-transform hover:scale-105 active:scale-95"
                        >
                            Return to Reality
                            <span className="group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </main>
    );
};

export default NotFound;
