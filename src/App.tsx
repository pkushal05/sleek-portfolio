import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

const App = () => {

  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-10">
      <h1 className="text-9xl font-bold">Satoshi</h1>
      <div className="h-3 w-3 bg-green-400 rounded-full relative">
        <span className="h-3 w-3 bg-green-400 rounded-full absolute left-0 top-0 animate-ping"></span>
      </div>
      <div className="container bg-amber-400 h-10 w-10 rounded-full"></div>
      <TooltipProvider delay={0}>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                className=""
                size="xl"
                variant={"default"}
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? "Light" : "Dark"}
              </Button>
            }
          ></TooltipTrigger>
          <TooltipPopup>Click to Toogle Theme</TooltipPopup>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default App;
