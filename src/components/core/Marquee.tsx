import { SKILLS_DATA } from "@/constants/skillsData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Marquee = () => {
    useGSAP(() => {
        const wheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                gsap.to(".marquee-wrapper", {
                    transform: "translateX(-200%)",
                    duration: 10,
                    repeat: -1,
                    ease: "none",
                });
            } else {
                gsap.to(".marquee-wrapper", {
                    transform: "translateX(0%)",
                    duration: 10,
                    repeat: -1,
                    ease: "none",
                });
            }
        };

        window.addEventListener("wheel", wheel);
        return () => window.removeEventListener("wheel", wheel);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Skills
            </h1>
            <div className="w-full marquee-wrapper flex gap-8 md:gap-15 py-5 -translate-x-full">
                {SKILLS_DATA.map((skill, idx) => {
                    return (
                        <div
                            key={idx}
                            className="marquee shrink-0 flex flex-col items-center"
                        >
                            <img
                                src={skill.icon}
                                className={`h-6 w-6 md:h-10 md:w-10 object-contain ${skill.name == "Express" ? "dark:invert" : ""}`}
                                alt={skill.name}
                            />
                            <h1 className="text-muted-foreground text-sm">
                                {skill.name}
                            </h1>
                        </div>
                    );
                })}
                {SKILLS_DATA.map((skill, idx) => {
                    return (
                        <div
                            key={idx}
                            className="marquee shrink-0 flex flex-col items-center"
                        >
                            <img
                                src={skill.icon}
                                className={`h-6 w-6 md:h-10 md:w-10 object-contain ${skill.name === "Express" ? "dark:invert" : ""}`}
                                alt={skill.name}
                            />
                            <h1 className="text-muted-foreground text-sm">
                                {skill.name}
                            </h1>
                        </div>
                    );
                })}
                {SKILLS_DATA.map((skill, idx) => {
                    return (
                        <div
                            key={idx}
                            className="marquee shrink-0 flex flex-col items-center"
                        >
                            <img
                                src={skill.icon}
                                className={`h-6 w-6 md:h-10 md:w-10 object-contain ${skill.name === "Express" ? "dark:invert" : ""}`}
                                alt={skill.name}
                            />
                            <h1 className="text-muted-foreground text-sm">
                                {skill.name}
                            </h1>
                        </div>
                    );
                })}
                {SKILLS_DATA.map((skill, idx) => {
                    return (
                        <div key={idx} className="marquee shrink-0">
                            <img
                                src={skill.icon}
                                className="h-10 w-10 object-contain"
                                alt={skill.name}
                            />
                            <h1 className="text-muted-foreground text-sm">
                                {skill.name}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Marquee;
