import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {



  return (
    <header>
      <nav className="max-w-4xl mx-auto h-16 flex items-center justify-between px-4">
        <div className="font-bold text-lg">My Portfolio</div>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"#about"}>About</Link>
          </li>
          <div>
            <ThemeToggle />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
