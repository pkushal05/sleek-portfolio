import type { EducationDataType, ExperienceDataType } from "@/constants/aboutData";

type AboutCardProps = {
    data: ExperienceDataType | EducationDataType;
};

const AboutCard = ({data}: AboutCardProps) => {
  return (
      <div className="w-full">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              {data.title}
          </h1>

          <div className="w-full mt-5">
              <div className="flex justify-between w-full">
                  <div className="flex gap-2 md:gap-5">
                      <div className="border bg-card p-2 md:p-3 rounded-xl overflow-hidden max-w-10 md:max-w-14 md:h-14 h-10">
                          <img
                              src={data.icon}
                              className="w-full h-full object-contain"
                              alt="Walmart"
                          />
                      </div>
                      <div className="flex flex-col ">
                          <h1 className="text-sm md:text-xl">
                              {"role" in data ? data.role : data.program}
                          </h1>
                          <p className="text-muted-foreground text-sm">
                              {"place" in data ? data.place : data.degree}
                          </p>
                      </div>
                  </div>
                  <p className="text-muted-foreground h-fit text-xs md:text-sm">
                      {data.period}
                  </p>
              </div>
              <div className="mt-3 w-full md:pl-18">
                  <ul className="">
                      {data.details.map((detail, idx) => (
                          <li className="list-disc text-muted-foreground text-sm tracking-wide leading-loose" key={idx}>{detail}</li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default AboutCard