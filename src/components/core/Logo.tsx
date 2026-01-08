import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router-dom";

const Logo = () => {
  gsap.registerPlugin(useGSAP, TextPlugin);
  const lines: string[] = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ];

  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (logoRef.current) {
      const tl = gsap.timeline({ repeat: -1 });

      lines.forEach((line) => {
        tl.set(logoRef.current, {
            y: 5, 
            opacity: 0,
            onComplete: () => {
              if (logoRef.current) logoRef.current.textContent = line;
            },
          })
          .to(logoRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.9,
          })
          .to({}, { duration: 1.9 })
          .to(
            logoRef.current,
            {
              y: -4,
              opacity: 0,
              duration: 0.9,
            },
            "-=0.3"
          );
      });
    }
  }, []);

  return (
    <div className="">
      <Link to={"/"} className="flex flex-col items-start">
        <span className="text-lg md:text-2xl">Kushal.</span>
      </Link>
      <p
        ref={logoRef}
        className="text-xs -mt-1.5 text-nowrap text-muted-foreground will-change-transform overflow-hidden "
      ></p>
    </div>
  );
};

export default Logo;
