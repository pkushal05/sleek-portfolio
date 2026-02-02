import stephenforbes from "@/assets/images/stephenforbes.jpeg";

export type TestimonialDataType = {
    avatar: string;
    name: string;
    role: string;
    content: string;
};

export const TESTIMONIALDATA = [
    {
        name: "Stephen Forbes",
        role: "Professor at Durham College",
        content: `What can I say about Kushal? This is a person you want to hire. From the first time I met Kushal it was obvious he's got a maturity that beyond his years, and the time, attention and intention he dedicates to his studies sets him in the upper echelon of high performing students. A strong communicator, astute observer and detail oriented, Kushal's work is always exemplary, and when necessary he didn't hesitate to seek out feedback AFTER already experimenting and working through things on his own. He always brought me something to consider, rather than just came looking for easy answers to "day-1" questions. Don't sleep on hiring Kushal if his application is in your queue, because you'll miss a perfect opportunity to build up a fresh alumni you won't want to let go of.`,
        avatar: stephenforbes,
    },
];
