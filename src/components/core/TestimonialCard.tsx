import type { TestimonialDataType } from "@/constants/testimonialData";
import { ArrowUpRight, Quote } from "lucide-react";

const TestimonialCard = ({
    avatar,
    name,
    role,
    pullQuote,
    open,
}: TestimonialDataType) => {
    return (
        <div className="bg-card border-border border-2 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow min-w-72 md:min-w-96 max-h- flex flex-col justify-between gap-y-10">
            <div>
                <Quote
                    className="mb-4 h-6 w-6 text-primary"
                    strokeWidth={1.5}
                    fill="currentColor"
                />
                {/* Testimonial Content */}
                <p className="text-foreground leading-relaxed italic text-sm md:text-base">
                    {pullQuote}
                </p>
            </div>
            <div className="flex flex-col items-start gap-4 mb-">
                <div className="flex items-center gap-x-4">
                    <img
                        src={avatar}
                        alt={name}
                        className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-border object-cover"
                    />
                    <div>
                        <h4 className="font-bold text-foreground md:text-lg leading-tight">
                            {name}
                        </h4>
                        <p className="text-muted-foreground text-xs md:text-sm mt-0.5">
                            {role}
                        </p>
                    </div>
                </div>
                <button
                    onClick={open}
                    className="w-full mt-5 flex items-center gap-1 self-start text-sm font-medium text-teal-700 transition-colors hover:text-teal-500 cursor-pointer"
                >
                    Read full review
                    <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCard;
