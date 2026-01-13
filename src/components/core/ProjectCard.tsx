type ProjectLink = {
  href: string;
  icon: React.ReactNode;
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  links?: ProjectLink[];
  techStack: string[];
};

const ProjectCard = ({
  title,
  description,
  image,
  links = [],
  techStack,
}: ProjectCardProps) => {
  return (
    <div className="project-card border rounded-lg p-4 overflow-hidden">
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

        <p className="project-card-description line-clamp-2 text-lg font-medium text-muted-foreground mt-2 tracking-wide">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="project-card-img mt-6 rounded-lg">
        <img
          src={image}
          alt={title}
          className="translate-x-[15%] rounded-lg transition duration-300
                     hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]
                     hover:-translate-x-[0.1%]"
        />
      </div>

      {/* Footer */}
      <div className="project-card-footer mt-4">
        <h3 className="text-lg text-muted-foreground font-medium">
          Tech Stack:
        </h3>

        <div className="mt-2 flex flex-wrap gap-3">
          {techStack.map((icon, i) => (
            <span key={i} className="inline-block">
              <img
                src={icon}
                alt=""
                className="h-6 w-6 object-cover dark:brightness-0 dark:invert"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
