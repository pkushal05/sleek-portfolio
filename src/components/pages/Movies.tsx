import { MOVIES_DATA } from "@/constants/moviesData";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Movies = () => {
    const [currentIndex, setcurrentIndex] = useState<number | null>(null);
    const floatingDivRef = useRef<HTMLDivElement>(null);

    const moveX = useRef<gsap.QuickToFunc | null>(null);
    const moveY = useRef<gsap.QuickToFunc | null>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useGSAP(() => {
        moveX.current = gsap.quickTo(floatingDivRef.current, "x", {
            duration: 0.3,
            ease: "power3.out",
        });
        moveY.current = gsap.quickTo(floatingDivRef.current, "y", {
            duration: 0.3,
            ease: "power3.out",
        });
    });

    const handleMouseEnter = (index: number) => {
        setcurrentIndex(index);
        if (floatingDivRef.current) {
            gsap.to(floatingDivRef.current, {
                duration: 0.3,
                opacity: 1,
                scale: 1,
                ease: "power2.out",
            });
        }
    };

    const handleMouseLeave = () => {
        setcurrentIndex(null);
        if (floatingDivRef.current) {
            gsap.to(floatingDivRef.current, {
                duration: 0.3,
                opacity: 0,
                scale: 0.95,
                ease: "power2.out",
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        mouse.current.x = e.clientX + 20;
        mouse.current.y = e.clientY + 20;

        if (moveX.current) moveX.current(mouse.current.x);
        if (moveY.current) moveY.current(mouse.current.y);
    };
    return (
        <div className="max-w-2xl md:max-w-3xl mx-auto px-7 min-h-screen bg-background text-foreground pt-20 relative">
            <div className="w-full h-full flex flex-col gap-15">
                <div className="w-full mt-15">
                    <h1 className="text-center text-3xl md:text-5xl font-bold italic font-[DM_Serif_Display]">
                        Movies
                    </h1>
                    <p className="text-center text-muted-foreground text-xl leading-tight md:leading-loose">
                        Some of my all-time{" "}
                        <span className="font-[DM_Serif_Display] italic">
                            favourites
                        </span>
                    </p>
                </div>
                <div
                    onMouseMove={handleMouseMove}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-7"
                >
                    {MOVIES_DATA.map((movie, index) => (
                        <div
                            className="p-7 border rounded-xl bg-card relative"
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        >
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full h-full rounded-xl object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div
                    ref={floatingDivRef}
                    className="fixed top-0 left-0 z-30 w-96 pointer-events-none hidden md:flex opacity-0"
                >
                    {currentIndex !== null && (
                        <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 shadow-xl backdrop-blur-md w-full">
                            <div className="w-full flex justify-between items-center mb-2">
                                <h1 className="text-xl font-bold text-foreground font-[DM_Serif_Display] italic tracking-tight">
                                    {MOVIES_DATA[currentIndex].title}
                                </h1>
                                <span className="text-sm text-muted-foreground">
                                    {MOVIES_DATA[currentIndex].year}
                                </span>
                            </div>
                            <em className="text-sm text-foreground/80 font-[DM_Serif_Display] leading-relaxed">
                                “{MOVIES_DATA[currentIndex].dialogue}”
                            </em>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Movies;
