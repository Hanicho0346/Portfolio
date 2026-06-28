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
import gira from './code.png'
import work1 from "./movieb.jpg"
import work2 from "./music.jpg"
import work3 from "./finance.jpg"

// Information List
export const infoList = [
    {
        icon: codeIcon,
        iconDark: codeIconDark,
        title: "Languages",
        description: "HTML, CSS, JavaScript, React.js, Next.js,ReactNative ,Nodejs ,Express,Python"
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
        name: "JIRA",
        icon: gira 
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
