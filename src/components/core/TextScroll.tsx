import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);


const TextScroll = () => {

  const { theme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      transform: 'translateX(-40%)',
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: 'body',
        markers: false,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 3,
        pin: true,
      }
    })
  })



    return (
        <div
            ref={containerRef}
            className="w-screen h-screen px-7 overflow-x-hidden select-none mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]"
        >
            <div className="w-full h-full flex items-center justify-center">
                <h1
                    ref={textRef}
                    className="text-foreground text-9xl text-nowrap translate-x-[40%]"
                >
                    Building seamless{" "}
                    <span
                        className={`font-bold bg-linear-to-r ${
                            theme === "light"
                                ? "from-[#b92b27] to-[#1565c0]"
                                : "from-indigo-500 via-purple-500 to-pink-500"
                        } bg-clip-text text-transparent font-[DMSerifDisplay] italic`}
                    >
                        web experiences
                    </span>{" "}
                    from concept to deployment
                </h1>
            </div>
        </div>
    );
};

export default TextScroll;
