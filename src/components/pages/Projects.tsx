import { PERSONAL_PROJECTS, ACADEMIC_PROJECTS } from "@/constants/projectsData";
import ProjectCard from "@/components/core/ProjectCard";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const Projects = () => {
    const [tab, setTab] = useState(() => {
        return sessionStorage.getItem("projectsTab") || "tab-1";
    });

    useEffect(() => {
        sessionStorage.setItem("projectsTab", tab);
    }, [tab]);

    return (
        <main className="max-w-2xl md:max-w-3xl mx-auto px-7 min-h-screen bg-background text-foreground pt-20">
            <div className="w-full h-full flex flex-col gap-15">
                <div className="w-full mt-15">
                    <h1 className="text-center text-3xl md:text-5xl font-bold italic font-[DMSerifDisplay]">
                        Projects
                    </h1>
                    <p className="text-center text-muted-foreground text-xl leading-tight md:leading-loose">
                        Where{" "}
                        <span className="font-[DMSerifDisplay] italic">
                            ideas
                        </span>{" "}
                        come to life
                    </p>
                </div>
                {/* <div className="w-full flex justify-center bg-red-300"> */}
                <Tabs
                    value={tab}
                    onValueChange={(value) => setTab(value)}
                    className="w-full"
                >
                    <TabsList className="mx-auto">
                        <TabsTab value="tab-1">Personal Projects</TabsTab>
                        <TabsTab value="tab-2">Academic Projects</TabsTab>
                    </TabsList>
                    <div className="mt-10">
                        <TabsPanel value="tab-1">
                            <div className="w-full h-full grid grid-cols-1 gap-8 md:p-10">
                                {PERSONAL_PROJECTS.map((project, _) => {
                                    return <ProjectCard key={_} {...project} />;
                                })}
                            </div>
                        </TabsPanel>
                        <TabsPanel value="tab-2">
                            <div className="w-full h-full grid grid-cols-1 gap-8 md:p-10">
                                {ACADEMIC_PROJECTS.map((project, _) => {
                                    return <ProjectCard key={_} {...project} />;
                                })}
                            </div>
                        </TabsPanel>
                    </div>
                </Tabs>
                {/* </div> */}
            </div>
        </main>
    );
};

export default Projects;
