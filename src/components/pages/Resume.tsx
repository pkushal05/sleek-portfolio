import kushalresume from "@/assets/resume/kushalresume.pdf";

const Resume = () => {
    return (
        <div className="max-w-2xl md:max-w-3xl min-h-screen bg-background text-foreground px-7 py-20 mx-auto">
            <div className="w-full ">
                <h1 className="text-center text-3xl md:text-5xl font-bold italic font-[DM_Serif_Display] mt-15">
                    Resume
                </h1>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg mt-15">
                    <object>
                        <embed
                            src={`${kushalresume}#toolbar=0&navpanes=0&scrollbar=0`}
                            type="application/pdf"
                            width="100%"
                            height="800px"
                        />
                    </object>
                </div>
                <div className="mt-8 text-center">
                    <a
                        href={kushalresume}
                        download="kushal-resume.pdf"
                        className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
