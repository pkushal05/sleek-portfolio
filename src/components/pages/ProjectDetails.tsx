import { ALL_PROJECTS } from "@/constants/projectsData";
import { useParams } from "react-router-dom";
import type { ProjectCardProps } from "@/constants/projectsData";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = ALL_PROJECTS.find(
        (proj: ProjectCardProps) => proj.id === projectId
    );

    return (
        <main className="max-w-2xl md:max-w-3xl mx-auto px-7 min-h-screen bg-background text-foreground pt-20">
            <div className="w-full h-full">
                <h1 className="text-center mt-15 text-3xl md:text-5xl font-[DMSerifDisplay] italic font-semibold">
                    {project?.title}
                </h1>
                <p className="text-center text-sm text-muted-foreground mt-2">({project?.tag})</p>

                <div className="w-full mt-18 overflow-hidden relative">
                    <img src={project?.image} alt="" className="rounded-lg" />
                </div>
                <div className="mt-8">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-2xl font-semibold mb-1">
                            Overview
                        </h1>
                        <div className="flex gap-4">
                            {project?.links.map((link, i) => (
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
                    <p className="text-lg md:text-xl text-muted-foreground tracking-tight">
                        {project?.overview}
                    </p>
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    <div>
                        <h1 className="text-2xl font-semibold mb-1">
                            Features
                        </h1>
                        <ul className="list-disc list-inside">
                            {project?.features?.map((feature, index) => (
                                <li
                                    className="text-muted-foreground text-lg md:text-xl tracking-tight"
                                    key={index}
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold mb-1">
                            Technologies Used
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {project?.techStack.map((tech, index) => (
                                <Button key={index} variant="logo">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className={`h-5 w-5 object-cover ${
                                            tech.name === "Express"
                                                ? "dark:invert"
                                                : ""
                                        }`}
                                    />
                                    {tech.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Challenges</h1>
                        <ul className="list-disc list-inside">
                            {project?.challenges?.map((challenge, index) => (
                                <li
                                    className="text-muted-foreground text-lg md:text-xl tracking-tight"
                                    key={index}
                                >
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
