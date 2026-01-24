import Marquee from "@/components/core/Marquee";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/constants/aboutData";
import AboutCard from "@/components/core/AboutCard";
import AboutIntroSection from "@/components/core/AboutIntroSection";
import ContactForm from "@/components/core/ContactForm";
import { useEffect, useState } from "react";

type QuoteData = {
    content: string;
    author: string;
};

const About = () => {
    const url = "https://corsproxy.io/?https://zenquotes.io/api/random";

    const [quote, setQuote] = useState<QuoteData | null>(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(`${url}&nocache=${Math.random()}`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch quote");
                }
                if (data) {
                    setQuote({ content: data[0].q, author: data[0].a });
                }
            } catch (error) {
                console.error("Error fetching quote:", error);
            }
        };
        fetchQuote();
    }, []);
    return (
        <main className="max-w-2xl md:max-w-3xl mx-auto px-7 min-h-screen bg-background text-foreground pt-20">
            <div className="w-full h-full flex flex-col gap-15">
                <div className="w-full mt-15">
                    <h1 className="text-center text-3xl md:text-5xl font-bold italic font-[DM_Serif_Display]">
                        About Me
                    </h1>
                    <p className="text-center text-muted-foreground text-xl leading-tight md:leading-loose">
                        Something{" "}
                        <span className="font-[DM_Serif_Display] italic">
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
                <div className="w-full">
                    <ContactForm />
                </div>
                {quote && (
                    <div className="w-full mt-3">
                        <div className="bg-card max-w-md border-2 mx-auto py-5 px-4 rounded-2xl shadow-2xl">
                            <blockquote className="">
                                &ldquo;{quote.content}&rdquo;{" "}
                                <footer className="text-right">
                                    &mdash; {quote.author}
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default About;
