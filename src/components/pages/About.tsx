import kushal2 from "@/assets/images/kushal2.jpg";
import { useTheme } from "@/context/ThemeContext";
import { SKILLS_DATA } from "@/constants/skillsData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
    const { theme } = useTheme();

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
        <main className="max-w-2xl md:max-w-3xl mx-auto px-7 min-h-screen bg-background text-foreground pt-20">
            <div className="w-full h-full flex flex-col gap-15">
                <div className="w-full mt-15">
                    <h1 className="text-center text-3xl md:text-5xl font-bold italic font-[DMSerifDisplay]">
                        About Me
                    </h1>
                    <p className="text-center text-muted-foreground text-xl leading-tight md:leading-loose">
                        Something{" "}
                        <span className="font-[DMSerifDisplay] italic">
                            about
                        </span>{" "}
                        myself
                    </p>
                </div>
                <div className="text-lg text-muted-foreground leading-relaxed flex flex-col md:flex-row items-center md:items-start md:gap-8">
                    <div className="max-w-88 p-3 bg-card border rounded-xl aspect-3/4 md:h-112">
                        <img
                            className={`w-full h-full object-cover rounded ${theme === "dark" ? "saturate-0" : ""}`}
                            src={kushal2}
                            width="352"
                            height="448"
                            alt="Picture"
                        />
                        <div className="mt-5">
                            <h1 className="text-2xl text-primary">
                                Kushal Patel
                            </h1>
                            <p className="text-muted-foreground text-sm">
                                Full-Stack Developer | ON, Canada
                            </p>
                        </div>
                    </div>
                    <div className="mt-25 md:mt-0">
                        <p className=" text-base md:text-lg">
                            I'm a Computer Programming and Analysis student at
                            Durham College with a passion for building{" "}
                            <span className="text-primary font-semibold">
                                Web applications
                            </span>{" "}
                            that solve real-world problems. What started as
                            curiosity about "how websites work" turned into a
                            full-blown love for development. I find joy in
                            transforming complex problems into simple, elegant
                            solutions.
                        </p>
                        <p className="mt-4 text-base md:text-lg">
                            I specialize in{" "}
                            <span className="text-primary font-semibold">
                                Full-Stack Development
                            </span>
                            , working with technologies like React, Node.js,
                            MongoDB and more. I'm constantly exploring new tools
                            and frameworks to stay ahead in this fast-paced
                            industry.
                        </p>
                        <p className="mt-4 text-base md:text-lg">
                            Apart from coding, I love watching movies and going
                            to gym. Check out my{" "}
                            <a
                                href="#"
                                className="text-primary hover:underline font-semibold"
                            >
                                favourite
                            </a>{" "}
                            movies of all time.
                        </p>

                        <p className="mt-4 text-base md:text-lg">
                            Currently based in the Oshawa and actively seeking{" "}
                            <span className="text-primary font-semibold">
                                Co-op opportunities for Summer 2026
                            </span>{" "}
                            where I can contribute my skills and continue
                            growing as a developer.
                        </p>
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                        Skills
                    </h1>
                    <div className="w-full marquee-wrapper flex gap-15 py-5 -translate-x-full">
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
                <div className="w-full h-screen"></div>
            </div>
        </main>
    );
};

export default About;
