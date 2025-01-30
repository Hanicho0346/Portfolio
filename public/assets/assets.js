// Importing Assets
import webicon from "./world-wide-web.png";
import codeIcon from "./code.png";
import codeIconDark from "./code.png";
import eduIcon from "./graduation.png";
import eduIconDark from "./graduation.png";
import projectIcon from "./blueprint.png";
import projectIconDark from "./blueprint.png";
import uiIcon from "./figma.png";
import tutor from "./tutor.png";
import vscode from "./vscode.png";
import mongodb from "./mongodb.jpg";
import figma from "./figma.png";
import git from "./git.png";
import work1 from "./movieb.jpg"
import work2 from "./music.jpg"
import work3 from "./finance.jpg"

// Information List
export const infoList = [
    {
        icon: codeIcon,
        iconDark: codeIconDark,
        title: "Languages",
        description: "HTML, CSS, JavaScript, React.js, Next.js"
    },
    {
        icon: eduIcon,
        iconDark: eduIconDark,
        title: "Education",
        description: "B.Sc. in Software Engineering"
    },
    {
        icon: projectIcon,
        iconDark: projectIconDark,
        title: "Projects",
        description: "Built over 5 projects, including web apps and mobile applications."
    }
];


export const toolsData = [
    {
        name: "VS Code",
        icon: vscode
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "Figma",
        icon: figma
    },
    {
        name: "Git",
        icon: git
    }
];

// Services Offered
export const ServiceData = [
    {
        icon: webicon,
        title: "Web Development",
        description: "Building responsive and modern web applications using cutting-edge technologies.",
        link: "#"
    },
    {
        icon: uiIcon,
        title: "UI/UX Design",
        description: "Creating visually appealing and user-friendly interfaces with a seamless user experience.",
        link: "#"
    },
    {
        icon: tutor,
        title: "Tutoring",
        description: " I offer tutoring sessions focused on helping you understand key concepts, solve coding challenges, and build strong programming foundations."
    }
];

// Work Portfolio
export const workData = [
    {
        title: "Frontend Project",
        description: "A modern web design project showcasing UI/UX principles.",
        bgImage: work1
    },
    {
        title: "Music App",
        description: "A mobile application for streaming and discovering music.",
        bgImage: work2
    },
    {
        title: "Finance Management",
        description: "A web-based application for managing personal and business finances.",
        bgImage: work3
    }
];
