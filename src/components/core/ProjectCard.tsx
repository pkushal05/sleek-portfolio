import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipPopup,
} from "@/components/ui/tooltip";
import { ToggleGroup } from "@/components/ui/toggle-group";

type ProjectLink = {
    href: string;
    icon: React.ReactNode;
};

type TechStack = {
    name: string;
    icon: string;
};

type ProjectCardProps = {
    id: string;
    title: string;
    description: string;
    image: string;
    links?: ProjectLink[];
    techStack: TechStack[];
};

const ProjectCard = ({
    id,
    title,
    description,
    image,
    links = [],
    techStack,
}: ProjectCardProps) => {
    return (
        <div className="project-card border rounded-xl p-4 overflow-hidden bg-secondary/50 hover:shadow-md">
            {/* Header */}
            <div className="project-card-header w-full">
                <div className="project-card-title w-full flex items-center justify-between">
                    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>

                    <div className="flex gap-3">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-muted-foreground"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <p className="project-card-description line-clamp-2 text-lg font-medium text-muted-foreground mt-2 tracking-wide leading-tight">
                    {description}
                </p>
            </div>

            {/* Image */}
            <div className="project-card-img mt-6 rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full translate-x-[15%] rounded-lg transition duration-300
                     hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]
                     hover:translate-x-[10%]"
                />
            </div>

            {/* Footer */}
            <div className="project-card-footer flex items-center justify-between mt-4">
                <div>
                    <h3 className="text-lg text-muted-foreground font-medium">
                        Tech Stack:
                    </h3>

                    <div className="mt-1 ">
                        <TooltipProvider>
                            <ToggleGroup className="flex flex-wrap gap-1.5 md:gap-3">
                                {techStack.map((tech, i) => (
                                    <Tooltip key={i}>
                                        <TooltipTrigger
                                            delay={100}
                                            render={
                                                <span className="inline-block">
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className={`h-6 w-6 object-cover ${
                                                            tech.name ==
                                                            "Express"
                                                                ? "dark:invert"
                                                                : ""
                                                        } hover:scale-110 transition-transform duration-200 cursor-pointer`}
                                                    />
                                                </span>
                                            }
                                        />
                                        <TooltipPopup>{tech.name}</TooltipPopup>
                                    </Tooltip>
                                ))}
                            </ToggleGroup>
                        </TooltipProvider>
                    </div>
                </div>
                <div>
                    <Link
                        to={`/projects/${id}`}
                        className="text-muted-foreground font-medium flex items-center gap-1 hover:underline"
                    >
                        View Details <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
