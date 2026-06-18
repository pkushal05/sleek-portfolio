import TestimonialCard from "@/components/core/TestimonialCard";
import { TESTIMONIALDATA } from "@/constants/testimonialData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Quote, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [closing, setClosing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardsParentRef = useRef<HTMLDivElement>(null);
    const tweensRef = useRef<gsap.core.Tween[]>([]);

    const DURATION = 30;

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tCards = cardsParentRef.current?.querySelectorAll(".t-card");

            if (tCards) {
                tweensRef.current = Array.from(tCards).map((card) =>
                    gsap.to(card, {
                        x: "-100%",
                        repeat: -1,
                        duration: DURATION,
                        ease: "linear",
                    }),
                );
            }
        }, cardsParentRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        tweensRef.current.forEach((tween) => tween.pause());
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (activeIndex === null) {
            tweensRef.current.forEach((tween) => tween.play());
        }
    };

    useEffect(() => {
        if (activeIndex !== null) {
            tweensRef.current.forEach((tween) => tween.pause());
        } else if (!isHovered) {
            tweensRef.current.forEach((tween) => tween.play());
        }
    }, [activeIndex, isHovered]);

    const open = (index: number | null) => {
        setClosing(false);
        setActiveIndex(index);
    };

    const close = () => {
        setClosing(true);
        setTimeout(() => setActiveIndex(null), 200);
    };

    const active = activeIndex !== null ? TESTIMONIALDATA[activeIndex] : null;

    return (
        <div className="max-w-2xl lg:max-w-3xl mx-auto px-7 flex flex-col gap-8 mb-14">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Testimonials
            </h1>
            <div
                ref={cardsParentRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex flex-row overflow-hidden gap-5 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
                <div className="t-card flex gap-x-5">
                    {TESTIMONIALDATA.map((t, index) => (
                        <TestimonialCard
                            key={index}
                            {...t}
                            open={() => open(index)}
                        />
                    ))}
                </div>
                <div className="t-card flex gap-x-5">
                    {TESTIMONIALDATA.map((t, index) => (
                        <TestimonialCard
                            key={index}
                            {...t}
                            open={() => open(index)}
                        />
                    ))}
                </div>
            </div>
            {active && (
                <div
                    onClick={close}
                    role="presentation"
                    className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-6 transition-all duration-300 ${
                        closing ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Full testimonial from ${active.name}`}
                        className={`relative w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-xl transition-all duration-200 ${
                            closing
                                ? "scale-95 opacity-0"
                                : "scale-100 opacity-100"
                        }`}
                    >
                        <button
                            onClick={close}
                            aria-label="Close"
                            className="absolute right-5 top-5 text-stone-400 transition-colors hover:text-stone-700 cursor-pointer"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <Quote
                            className="mb-4 h-7 w-7 text-primary"
                            strokeWidth={1.5}
                            fill="currentColor"
                        />
                        <p className="mb-6 text-[10px] md:text-base leading-relaxed text-foreground">
                            {active.content}
                        </p>

                        <div className="flex items-center gap-3 border-t border-stone-300 pt-5">
                            <img
                                src={active.avatar}
                                alt={active.name}
                                className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-border object-cover"
                            />
                            <div>
                                <p className="text-sm font-medium text-foreground">
                                    {active.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {active.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialSection;
