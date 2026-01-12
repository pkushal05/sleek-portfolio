import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";

const Stairs = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(useGSAP);

  const { theme } = useTheme();

  const stairParentRef = useRef<HTMLDivElement>(null);
  const stairRefs = useRef<Array<HTMLDivElement | null>>([]);
  const childRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    tl.to("targets", { duration: 0.02 });

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
  }, [theme]);

  return (
    <>
      <div
        ref={stairParentRef}
        className="fixed w-screen h-screen left-0 top-0 pointer-events-none bg-transparent z-100 overflow-hidden"
      >
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
