import Logo from "@/components/core/Logo";

const Footer = () => {
  return (
      <footer className="w-screen h-72 border-t mt-20 md:mt-25">
          <div className="max-w-2xl lg:max-w-3xl mx-auto px-7 h-full py-15 flex flex-col md:flex-row justify-between gap-10">
              <div className="flex flex-col justify-between h-full">
                  <Logo />
                  <div>
                      <p className="text-sm text-foreground">
                          &copy; {new Date().getFullYear()} Kushal Patel. All
                          Rights Reserved
                      </p>
                      <p className="text-xs text-muted-foreground">Built with caffeine and lots of Stack Overflow.</p>
                  </div>
              </div>
              <div>
                <div>
                    <h1>MAIN</h1>

                </div>
                <div>Links
                </div>
              </div>
          </div>
      </footer>
  );
}

export default Footer