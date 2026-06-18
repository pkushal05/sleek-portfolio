import stephenforbes from "@/assets/images/stephenforbes.jpeg";
import kylechapman from "@/assets/images/kylechapman.jpeg";
import athirageorge from "@/assets/images/athirageorge.jpeg";

export type TestimonialDataType = {
    avatar: string;
    name: string;
    role: string;
    content: string;
    pullQuote: string;
    open: () => void;
};

export const TESTIMONIALDATA = [
    {
        name: "Stephen Forbes",
        role: "Professor at Durham College",
        pullQuote:
            "A strong communicator, astute observer and detail oriented, Kushal's work is always exemplary.",
        content: `What can I say about Kushal? This is a person you want to hire. From the first time I met Kushal it was obvious he's got a maturity that beyond his years, and the time, attention and intention he dedicates to his studies sets him in the upper echelon of high performing students. A strong communicator, astute observer and detail oriented, Kushal's work is always exemplary, and when necessary he didn't hesitate to seek out feedback AFTER already experimenting and working through things on his own. He always brought me something to consider, rather than just came looking for easy answers to "day-1" questions. Don't sleep on hiring Kushal if his application is in your queue, because you'll miss a perfect opportunity to build up a fresh alumni you won't want to let go of.`,
        avatar: stephenforbes,
    },
    {
        name: "Kyle Chapman",
        role: "Professor at Durham College",
        pullQuote:
            "Kushal earned the top grade in both classes, but more importantly, his work showed care, discipline, and genuine understanding.",
        content: `Kushal was a student in two of my courses: Introduction to Programming and Object‑Oriented Programming 3. In both courses, Kushal distinguished himself immediately through his excellent attendance, professionalism, and consistently timely work. He communicates very clearly and asks thoughtful, well‑targeted questions that reflect a deep engagement with the material. Kushal earned the top grade in both classes, but more importantly, his work showed care, discipline, and genuine understanding. His OOP3 term project (with a small group) was particularly impressive: a Unity‑based recreation of the original Super Mario Bros., where he focused on accurately reproducing gameplay behaviours while applying modern object‑oriented principles and design patterns. Unity was not a point of instruction in our program, so Kushal also needed to learn that in a self-directed manner through the semester. Kushal has demonstrated a high level of understanding of various programming technologies and the relationships between them. He's polite, curious, and a pleasure to teach, and I expect him to excel wherever he applies these skills next.`,
        avatar: kylechapman,
    },
    {
        name: "Athira George",
        role: "Professor | Mainframe Developer",
        pullQuote: "When given a task, he delivers - on time, every time.",
        content: `I have had the privilege of knowing Kushal as his Professor at Durham College, and he is one of the standout students I have taught.Speaking about him, Kushal is punctual, respectful, and genuinely eager to learn. From a professional standpoint, he has strong analytical skills, a sharp eye for detail, and always asks the right questions. When given a task, he delivers — on time, every time. I had the chance to see one of his independent projects, built for a technical program at the college, which reflected his true passion for the field — even while managing a demanding academic workload and other commitments. Kushal is someone who brings hard work, collaboration, and a strong work ethic to everything he does. Any employer would be lucky to have him on their team, and I recommend him with full confidence.`,
        avatar: athirageorge,
    },
];
