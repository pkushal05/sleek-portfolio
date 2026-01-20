import kushal2 from "@/assets/images/kushal2.jpg";
import { useTheme } from "@/context/ThemeContext";
import Marquee from "@/components/core/Marquee";
import walmart from "@/assets/images/walmart.png";
import dc from "@/assets/images/dc.svg";

const About = () => {
    const { theme } = useTheme();

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
                    <Marquee />
                </div>
                <div className="w-full">
                    <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                        Experience
                    </h1>

                    <div className="w-full mt-5">
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2 md:gap-5">
                                <div className="border bg-card p-2 md:p-3 rounded-xl overflow-hidden max-w-10 md:max-w-14 md:h-14 h-10">
                                    <img
                                        src={walmart}
                                        className="w-full h-full object-contain"
                                        alt="Walmart"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <h1 className="text-sm md:text-xl">
                                        Walmart
                                    </h1>
                                    <p className="text-muted-foreground text-sm">
                                        Whitby, ON
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground h-fit text-xs md:text-sm">
                                Oct 2025 - present
                            </p>
                        </div>
                        <div className="mt-3 w-full md:pl-18">
                            <ul className="">
                                <li className="list-disc text-muted-foreground text-sm tracking-wide leading-loose">
                                    Stock and rotate dairy and frozen products
                                    while following FIFO (first in, first out)
                                    to ensure freshness.
                                </li>
                                <li className="list-disc text-muted-foreground text-sm tracking-wide leading-loose">
                                    Monitor product temperatures and maintain
                                    clean, organized coolers/freezers to meet
                                    food safety standards.
                                </li>
                                <li className="list-disc text-muted-foreground text-sm tracking-wide leading-loose">
                                    Assist customers with locating items and
                                    provide friendly, efficient service on the
                                    sales floor.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                        Experience
                    </h1>

                    <div className="w-full mt-5">
                        <div className="flex justify-between w-full">
                            <div className="flex gap-2 md:gap-5">
                                <div className="border bg-card p-2 md:p-3 rounded-xl overflow-hidden max-w-10 md:max-w-14 md:h-14 h-10">
                                    <img
                                        src={dc}
                                        className="w-full h-full object-contain"
                                        alt="Walmart"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <h1 className="text-sm md:text-xl">
                                        Computer Programming and Analysis
                                    </h1>
                                    <p className="text-muted-foreground text-sm">
                                        Oshawa, ON
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground h-fit text-xs md:text-sm">
                                Sep 2024 - Apr 2027
                            </p>
                        </div>
                        <div className="mt-3 w-full md:pl-18">
                            <ul className="">
                                <li className="list-disc text-muted-foreground text-sm tracking-wide leading-loose">
                                    Stock and rotate dairy and frozen products
                                    while following FIFO (first in, first out)
                                    to ensure freshness.
                                </li>
                                <li className="list-disc text-muted-foreground text-sm tracking-wide leading-loose">
                                    Monitor product temperatures and maintain
                                    clean, organized coolers/freezers to meet
                                    food safety standards.
                                </li>
                                <li className="list-disc text-muted-foreground text-sm tracking-wide leading-loose">
                                    Assist customers with locating items and
                                    provide friendly, efficient service on the
                                    sales floor.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
