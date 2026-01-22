import kushal2 from "@/assets/images/kushal2.jpg";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const AboutIntroSection = () => {

    const { theme } = useTheme();

  return (
      <div className="text-lg text-muted-foreground leading-relaxed flex flex-col md:flex-row items-center md:items-start md:gap-8">
          <div className="max-w-88 p-3 bg-card border rounded-xl aspect-3/4 md:h-112">
              <img
                  className={`w-full h-full object-cover rounded ${theme === "dark" ? "saturate-0" : ""}`}
                  src={kushal2}
                  width="352"
                  height="448"
                  alt="Picture"
              />
              <div className="mt-5">
                  <h1 className="text-2xl text-primary">Kushal Patel</h1>
                  <p className="text-muted-foreground text-sm">
                      Full-Stack Developer | ON, Canada
                  </p>
              </div>
          </div>
          <div className="mt-25 md:mt-0">
              <p className=" text-base md:text-lg">
                  I'm a Computer Programming and Analysis student at Durham
                  College with a passion for building{" "}
                  <span className="text-primary font-semibold">
                      Web applications
                  </span>{" "}
                  that solve real-world problems. What started as curiosity
                  about "how websites work" turned into a full-blown love for
                  development. I find joy in transforming complex problems into
                  simple, elegant solutions.
              </p>
              <p className="mt-4 text-base md:text-lg">
                  I specialize in{" "}
                  <span className="text-primary font-semibold">
                      Full-Stack Development
                  </span>
                  , working with technologies like React, Node.js, MongoDB and
                  more. I'm constantly exploring new tools and frameworks to
                  stay ahead in this fast-paced industry.
              </p>
              <p className="mt-4 text-base md:text-lg">
                  Apart from coding, I love watching movies and going to gym.
                  Check out my{" "}
                  <Link
                      to="/movies"
                      className="text-primary hover:underline font-semibold"
                  >
                      Favourite
                  </Link>{" "}
                  movies of all time.
              </p>

              <p className="mt-4 text-base md:text-lg">
                  Currently based in the Oshawa and actively seeking{" "}
                  <span className="text-primary font-semibold">
                      Co-op opportunities for Summer 2026
                  </span>{" "}
                  where I can contribute my skills and continue growing as a
                  developer.
              </p>
          </div>
      </div>
  );
}

export default AboutIntroSection