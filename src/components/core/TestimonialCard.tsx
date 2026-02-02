import type { TestimonialDataType } from "@/constants/testimonialData";

const TestimonialCard = ({avatar, name, role, content}: TestimonialDataType) => {
    return (
        <div className="bg-card border-border border-2 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={
                        avatar ||
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    }
                    alt={name}
                    className="w-10 h-10 rounded-full border border-border object-cover"
                />
                <div>
                    <h4 className="font-bold text-foreground text-lg leading-tight">
                        {name}
                    </h4>
                    <p className="text-muted-foreground text-sm">{role}</p>
                </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;{content}&rdquo;
            </p>
        </div>
    );
};

export default TestimonialCard;