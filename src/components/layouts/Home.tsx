import Hero from "@/components/core/Hero";
import ProjectsSection from "@/components/core/ProjectsSection";
import TextScroll from "@/components/core/TextScroll";
import ContactForm from "@/components/core/ContactForm";
import { useEffect, useState } from "react";

type QuoteData = {
    content: string;
    author: string;
};

const Home = () => {
    const url = "https://api.quotable.io/random?tags=motivational";

    const [quote, setQuote] = useState<QuoteData | null>(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch quote");
                }
                const quote: QuoteData = {
                    content: data.content,
                    author: data.author,
                };
                setQuote(quote);
            } catch (error) {
                console.error("Error fetching quote:", error);
            }
        };
        fetchQuote();
    }, []);
    return (
        <main className="w-full min-h-screen bg-background text-foreground">
            <Hero />
            <ProjectsSection />
            <TextScroll />
            <ContactForm className={"px-7"} />
            {quote && (
                <div className="w-full mt-20 px-7">
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
        </main>
    );
};

export default Home;
