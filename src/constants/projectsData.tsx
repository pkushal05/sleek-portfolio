import react from "@/assets/images/react.svg";
import node from "@/assets/images/node.svg";
import tailwind from "@/assets/images/tailwind.svg";
import blogify from "@/assets/images/blogify.png";
import express from "@/assets/images/express.svg";
import mongodb from "@/assets/images/mongodb.svg";
import testingautomation from "@/assets/images/testingautomation.png";
import python from "@/assets/images/python.svg";
import selenium from "@/assets/images/selenium.svg";
import pytest from "@/assets/images/pytest.svg";
import csharp from "@/assets/images/csharp.svg";
import net from "@/assets/images/net.svg";
import spotify from "@/assets/images/spotify.svg";
import spotifyclone from "@/assets/images/spotifyclone.jpeg";
import java from "@/assets/images/java.svg";
import redux from "@/assets/images/redux.svg";
import cipher from "@/assets/images/cipher.png";

type ProjectLink = {
    href: string;
    icon: React.ReactNode;
};

type TechStack = {
    name: string;
    icon: string;
};

export type ProjectCardProps = {
    id: string;
    title: string;
    overview: string;
    image: string;
    features?: string[];
    challenges?: string[];
    githubLink: string;
    tag: string;
    links?: ProjectLink[];
    techStack: TechStack[];
};

export const PROJECTS = [
    {
        id: "blogify",
        title: "Blogify",
        overview:
            "A clean and responsive blogging platform where users can create, manage, and share posts with a smooth reading and writing experience.",
        image: blogify,
        techStack: [
            { name: "React", icon: react },
            { name: "Node.js", icon: node },
            { name: "Express", icon: express },
            { name: "MongoDB", icon: mongodb },
            { name: "Redux Toolkit", icon: redux },
            { name: "Tailwind CSS", icon: tailwind },
        ],
        features: [
            "User authentication using Json Web Token (JWT)",
            "Create, Read, Update and Delete blog posts",
            "Author profiles with user-specific posts",
            "Search and filter posts by keywords or tags",
            "Fully responsive design for mobile & desktop",
            "Modern UI with Tailwind CSS, DaisyUI, and smooth animations via Framer Motion",
            "Image upload support using Multer + Cloudinary",
            "RESTful API built with Express + MongoDB",
        ],
        challenges: [
            "Implementing secure JWT authentication with refresh token rotation to prevent token hijacking",
            "Optimizing MongoDB queries with proper indexing to handle large datasets efficiently",
            "Managing complex state across the application using Redux Toolkit with proper type safety",
            "Handling image uploads with size validation and compression before storing in Cloudinary",
            "Creating a responsive and accessible rich text editor for blog post creation",
            "Implementing proper error boundaries and fallback UI for better user experience",
        ],
        githubLink: "https://github.com/pkushal05/Blogify",
        links: [
            {
                href: "http://blogify-mxdu.onrender.com/",
                icon: (
                    <svg
                        className="h-5 w-5 md:h-6 md:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                    </svg>
                ),
            },
            {
                href: "https://github.com/pkushal05/Blogify",
                icon: (
                    <svg
                        className="h-5 w-5 md:h-6 md:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                    </svg>
                ),
            },
        ],
        tag: "Personal Project",
    },
    {
        id: "spotify-clone",
        title: "Spotify Clone",
        overview:
            "A Windows Forms desktop application integrating with Spotify Web API to browse albums, artists, and tracks. Features a modern dark-themed interface with three search modes, grid layouts, and detailed information panels showcasing album artwork, track listings, and artist profiles.",
        image: spotifyclone,
        techStack: [
            { name: "C#", icon: csharp },
            { name: ".Net WinForms", icon: net },
            { name: "Spotify API", icon: spotify },
        ],
        features: [
            "Spotify Web API integration with OAuth",
            "Three search modes: Albums, Artists, Tracks",
            "Modern Spotify-inspired dark theme",
            "Grid-based layout with detail panels",
        ],
        challenges: [
            "Implementing OAuth 2.0 flow for Spotify API authentication in a desktop application",
            "Managing API rate limits and implementing proper request throttling mechanisms",
            "Creating custom UI controls in WinForms to match Spotify's modern design language",
            "Handling asynchronous API calls without blocking the UI thread in Windows Forms",
            "Implementing efficient image caching to avoid repeated downloads of album artwork",
            "Managing memory efficiently when loading large amounts of data in grid layouts",
        ],
        githubLink: "https://github.com/pkushal05/Spotify_Clone",

        links: [
            {
                href: "https://github.com/pkushal05/Spotify_Clone",
                icon: (
                    <svg
                        className="h-5 w-5 md:h-6 md:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                    </svg>
                ),
            },
        ],
        tag: "Academic Project",
    },
    {
        id: "guru99-automation",
        title: "Testing Automation for Guru99 Banking Site",
        overview:
            "A Selenium-based test automation project for a demo banking website, covering login, account creation, and transaction functionalities to ensure reliability and correctness.",
        image: testingautomation,
        techStack: [
            { name: "Python", icon: python },
            { name: "Selenium", icon: selenium },
            { name: "PyTet", icon: pytest },
        ],
        features: [
            "Automate major features of the demo banking site",
            "Validate input fields, button functionalities, and workflows",
            "Execute 120+ test cases including both positive and negative scenarios",
            "Ensure modular, reusable code with maintainable structure",
            "Generate detailed test reports using PyTest",
            "Implement robust error handling and logging",
        ],
        challenges: [
            "Handling dynamic elements and unpredictable page load times using explicit waits",
            "Designing a maintainable Page Object Model architecture for 120+ test cases",
            "Managing test data and configurations across different test environments",
            "Implementing reliable element locators that work across browser updates",
            "Creating comprehensive test coverage for both positive and negative scenarios",
            "Generating detailed, actionable test reports with screenshots for failed tests",
        ],
        githubLink: "https://github.com/pkushal05/Testing-Automation",

        links: [
            {
                href: "https://github.com/pkushal05/Testing-Automation",
                icon: (
                    <svg
                        className="h-5 w-5 md:h-6 md:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                    </svg>
                ),
            },
        ],
        tag: "Academic Project",
    },
    {
        id: "cipher-gui",
        title: "Cipher - GUI Application",
        overview:
            "A Java Swing desktop application implementing Substitution and Translation cipher algorithms with a user-friendly GUI. Features custom complexity keys, AODA-compliant accessibility design, and modular object-oriented architecture with robust input validation and error handling.",
        image: cipher,
        techStack: [{ name: "Java", icon: java }],
        features: [
            "Java Swing GUI with AODA-compliant design",
            "Substitution and Translation cipher algorithms",
            "Custom complexity key generation for enhanced security",
            "Modular OOP architecture for maintainability",
            "Robust input validation and error handling",
        ],
        challenges: [
            "Ensuring AODA compliance with proper keyboard navigation and screen reader support",
            "Implementing secure key generation algorithms that produce truly random cipher keys",
            "Designing an intuitive UI that makes cryptography concepts accessible to non-technical users",
            "Validating and sanitizing user input to prevent edge cases in cipher operations",
            "Creating comprehensive unit tests for cipher algorithms to ensure encryption/decryption accuracy",
            "Balancing security best practices with usability in a desktop application context",
        ],
        githubLink: "https://github.com/pkushal05/Cipher-GUIApplication",

        links: [
            {
                href: "https://github.com/pkushal05/Cipher-GUIApplication",
                icon: (
                    <svg
                        className="h-5 w-5 md:h-6 md:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                    </svg>
                ),
            },
        ],
        tag: "Academic Project",
    },
];
