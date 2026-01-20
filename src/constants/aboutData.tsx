import walmart from "@/assets/images/walmart.png";
import dc from "@/assets/images/dc.svg";

export type EducationDataType = {
    title: string;
    program: string;
    degree: string;
    period: string;
    details: string[];
    icon: string;
    alt: string;
};

export const EDUCATION_DATA = [
    {
        title: "Education",
        program: "Computer Programming and Analysis",
        degree: "Advanced Diploma",
        period: "Sep 2024 - Apr 2027",

        details: [
            "Proven experience in documenting and troubleshooting problems with code.",
            "Learned the practical application of structured, mainframe, and object-oriented programming languages.",
            "Studied database design, management, and analysis, along with software testing and system analysis techniques.",
        ],

        icon: dc,
        alt: "Durham College",
    },
];

export type ExperienceDataType = {
    title: string;
    role: string;
    place: string;
    period: string;
    details: string[];
    icon: string;
    alt: string;
};

export const EXPERIENCE_DATA = [
    {
        title: "Experience",
        role: "Walmart",
        place: "Whitby, ON",
        period: "Oct 2025 - Present",
        details: [
            "Stock and rotate dairy and frozen products while following FIFO (first in, first out) to ensure freshness.",
            "Monitor product temperatures and maintain clean, organized coolers/freezers to meet food safety standards.",
            "Assist customers with locating items and provide friendly, efficient service on the sales floor.",
        ],
        icon: walmart,
        alt: "Walmart",
    },
];
