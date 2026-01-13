import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";
import { TextPlugin } from "gsap/TextPlugin";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(useGSAP, TextPlugin);

  const greetings: string[] = [
    "Hello", // English
    "Bonjour", // French
    "Hola", // Spanish
    "Ciao", // Italian
    "કેમછો", // Gujarati (Kem cho)
    "नमस्ते", // Hindi
    "こんにちは", // Japanese
  ];

  const { theme } = useTheme();

  const stairParentRef = useRef<HTMLDivElement>(null);
  const stairRefs = useRef<Array<HTMLDivElement | null>>([]);
  const childRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const isFirstLoad = useRef(true);
  const hasAnimated = useRef(false);
  const location = useLocation();

  useGSAP(() => {
    if (hasAnimated.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        isFirstLoad.current = false;
        hasAnimated.current = true;
      },
    });

    greetings.forEach((greet) => {
      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          text: { value: greet, delimiter: " " },
          ease: "power2.inOut",
        }
      );

      tl.to(textRef.current, {
        opacity: 0,
        duration: 0.1,
      });
    });

    tl.to(stairParentRef.current, { opacity: 0, duration: 0.5 });
    tl.to(stairParentRef.current, { display: "none" });
  }, []);

  useGSAP(() => {

    if (!hasAnimated.current) return;

    const targets = stairRefs.current.filter(
      (el): el is HTMLDivElement => !!el
    );
    if (targets.length === 0) return;

    const tl = gsap.timeline();

    tl.set(stairParentRef.current, { display: "block", opacity: 1 });

    tl.set(targets, { yPercent: -100 });

    tl.to(childRef.current, {
      opacity: 0,
      duration: 0.4,
    });

    tl.to(targets, {
      yPercent: 0,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.07,
    });

    tl.to({}, { duration: 0.02 });

    tl.to(childRef.current, {
      opacity: 1,
      duration: 0.2,
    });

    tl.to(targets, {
      yPercent: 100,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: 0.07,
    });

    tl.set(stairParentRef.current, { display: "none", opacity: 0 });
  }, [theme, location.pathname]);

  return (
    <>
      <div
        ref={stairParentRef}
        className="fixed w-screen h-screen left-0 top-0 bg-transparent z-999 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center cursor-none pointer-events-none">
          <h1
            ref={textRef}
            className="text-3xl font-semibold text-background"
          ></h1>
        </div>

        <div className="flex h-full w-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                stairRefs.current[i] = el || null;
              }}
              className="stairs bg-foreground w-1/6 h-full"
            ></div>
          ))}
        </div>
      </div>
      <div ref={childRef}>{children}</div>
    </>
  );
};

export default Stairs;
