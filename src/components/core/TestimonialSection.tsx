import TestimonialCard from "@/components/core/TestimonialCard";
import { TESTIMONIALDATA } from "@/constants/testimonialData";

const TestimonialSection = () => {
  return (
      <div className="max-w-2xl lg:max-w-3xl mx-auto px-7 flex flex-col gap-8 mb-14">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Testimonials
          </h1>
          <div className="grid grid-cols-1  gap-6">
              {TESTIMONIALDATA.map((t, index) => (
                  <TestimonialCard key={index} {...t} />
              ))}
          </div>
      </div>
  );
}

export default TestimonialSection