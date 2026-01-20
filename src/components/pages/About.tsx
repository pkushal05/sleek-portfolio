import Marquee from "@/components/core/Marquee";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/constants/aboutData";
import AboutCard from "@/components/core/AboutCard";
import AboutIntroSection from "@/components/core/AboutIntroSection";

const About = () => {

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
                <AboutIntroSection />

                <Marquee />

                {EXPERIENCE_DATA.map((exp, idx) => (
                    <AboutCard key={idx} data={exp} />
                ))}
                {EDUCATION_DATA.map((exp, idx) => (
                    <AboutCard key={idx} data={exp} />
                ))}
            </div>
        </main>
    );
};

export default About;
