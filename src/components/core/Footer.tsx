import Logo from "@/components/core/Logo";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="w-screen border-t mt-20 md:mt-25">
            <div className="max-w-2xl lg:max-w-3xl mx-auto px-7 h-full py-15 flex flex-col-reverse md:flex-row md:justify-between gap-6">
                <div className="flex flex-col gap-5 md:gap-15">
                    <Logo />
                    <div>
                        <p className="text-sm text-foreground">
                            &copy; {new Date().getFullYear()} Kushal Patel. All
                            Rights Reserved
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Built with caffeine and lots of Stack Overflow.
                        </p>
                    </div>
                </div>
                <div className="h-full flex gap-6">
                    <div className="flex flex-col gap-5 items-center">
                        <h1>MAIN</h1>
                        <div className="flex flex-col gap-3 items-center">
                            <a className="text-muted-foreground hover:underline" href="/">Home</a>
                            <Link className="text-muted-foreground hover:underline" to="/projects">Projects</Link>
                            <Link className="text-muted-foreground hover:underline scroll-mt-20" to="/about">About</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <h1>LINKS</h1>
                        <div className="flex flex-col gap-3 items-center">
                            <a className="hover:underline text-muted-foreground"
                                href="https://github.com/pkushal05"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                            <a className="hover:underline text-muted-foreground"
                                href="https://www.linkedin.com/in/kushalpatel07"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a className="hover:underline text-muted-foreground"
                                href="https://www.instagram.com/_.kushal1052/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                            <a className="hover:underline text-muted-foreground" href="mailto:patelkushal2363@gmail.com">Mail</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
