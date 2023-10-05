// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
// import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
import profile_about from "./assets/profile_2.png"
// Tech stack images
// import html from "./assets/techstack/html.png";
// import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
// import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
// import tailwind from "./assets/techstack/tailwind.png";
// import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Project Images
import projectImage1 from "./assets/projects/ZYM.png";
import projectImage2 from "./assets/projects/Hotel.png";
import projectImage3 from "./assets/projects/Keyboard_event.png";
import projectImage4 from "./assets/projects/Amazon_watchpage.png";
import projectImage5 from "./assets/projects/tic_tak_toe.png";
import projectImage6 from "./assets/projects/Brick_ball.png";

// logos for tech
import c from "./assets/tech/c.svg"
import cpp from "./assets/tech/cpp.svg"
import python from "./assets/tech/python.svg"
import java from "./assets/tech/java.svg"
import js from "./assets/tech/jscript.svg"
import html from "./assets/tech/html.svg";
import css from "./assets/tech/css.svg";
import jquery from "./assets/tech/jquery.svg";
import react from "./assets/tech/react.svg";
import bootstrap from "./assets/tech/bootstrap.svg";
import tailwind from "./assets/tech/tailwind.svg";
import express from "./assets/tech/express (1).svg";
import node from "./assets/tech/node.svg";
import mysql from "./assets/tech/mysql.svg";
import oracle from "./assets/tech/oracle (1).svg";
import mongodb from "./assets/tech/mongodb.svg";
import hindi from "./assets/tech/hindi.svg";
import english from "./assets/tech/english.svg";


// Logos
export const logos = {
    logogradient: logogradient,
    // logo: logo,
};

// Tech Stack and Tools
export const techStackDetails = {
    html: html,
    css: css,
    js: js,
    react: react,
    redux: redux,
    sass: sass,
    tailwind: tailwind,
    bootstrap: bootstrap,
    vscode: vscode,
    postman: postman,
    npm: npm,
    git: git,
    github: github,
    figma: figma,
    c: c,
    cpp: cpp,
    python: python,
    java: java,
    jquery: jquery,
    node: node,
    express: express,
    mysql: mysql,
    oracle: oracle,
    mongodb: mongodb,
    english: english,
    hindi: hindi,
};


// Enter your Personal Details here
export const personalDetails = {
    name: "RAHUL CHAURASIYA",
    tagline: `“Passionate Java Developer & MERN Stack Enthusiast Building the Digital Future.”`,
    img: profile,
    img_about: profile_about,
    about: `As a student at IIPS, DAVV Indore. I am passionate about coding and web development. I have extensive knowledge in programming languages such as C++, C, Java, HTML 5, and JavaScript, and I am proficient in using tools such as Bootstrap, Tailwind, and Proficient in java Backend Development. I am also interested in exploring other developement fields. In my free time, I enjoy playing online games such as BGMI and participating in coding competitions and hackathones. I am also a competitive programmer with a 5-star rating in C++ and C on HackerRank and a 3-star rating on CodeChef. Currently, I am working to improve my skills by solving problems on LeetCode. I have a love for sports. I am driven, dedicated, and eager to continuously grow and improve my skills. I am confident that my diverse set of interests and abilities will make me a valuable asset to any team.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
    linkdein: "https://www.linkedin.com/in/rahul-chaurasiya-97072b208/",
    github: "https://github.com/Rahul-chaurasiya",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/____itz_rahul____/",
};

// Enter your Work Experience here
export const workDetails = [
    {
        Position: "JAVA Developer",
        Company: `Samyak Technology Enterprises`,
        Location: "Indore",
        Type: "Full Time",
        Duration: "Aug 2022 - Feb 2023",
    },
    {
        Position: "Volunteer",
        Company: `Datacode`,
        Location: "Hybrid",
        Type: "Online",
        Duration: "Aug 2021 - Jan 2022",
    },
];

// Enter your Education Details here
export const eduDetails = [
    {
        Position: "MASTER OF TECHNOLOGY (B.TECH + M.TECH)",
        Company: "International Institute of Professional Studies, DAVV",
        Location: "Indore",
        Type: "CGPA - 8.23",
        Duration: "Sept 2020 - Present",
    },

    {
        Position: "HIGH SECONDARY (10+2)",
        Company: `Excellence High Secondary School`,
        Location: "Dabra, Gwalior",
        Type: "Score - 89%",
        Duration: "Aug 2018 - Jul 2020",
    },

    {
        Position: "HIGH School (10)",
        Company: `Sant Kanwar Ram High Secondary School`,
        Location: "Dabra, Gwalior",
        Type: "Score - 90%",
        Duration: "Aug 2017 - Jul 2018",
    },
];


// Enter your Project Details here
export const projectDetails = [
    {
        title: "Website for GYM",
        image: projectImage1,
        description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
        techstack: "HTML5, CSS3, Tailwind css",
        previewLink: "https://rahul-chaurasiya.github.io/zym/",
        githubLink: "https://github.com/Rahul-chaurasiya/zym",
    },
    {
        title: "Website for Hotel",
        image: projectImage2,
        description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
        techstack: "HTML5, CSS3, Javascript",
        previewLink: "https://heuristic-ardinghelli-ce62e8.netlify.app/",
        githubLink: "https://github.com/Rahul-chaurasiya/hotel",
    },
    {
        title: "Music Sound Generator by Keyboard ",
        image: projectImage3,
        description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
        techstack: "HTML/CSS, JavaScript",
        previewLink: "https://relaxed-noyce-5b77f8.netlify.app/",
        githubLink: "https://github.com/Rahul-chaurasiya/javascript-basic-keyboard-event",
    },
    {
        title: "Amazon Watch Web Page",
        image: projectImage4,
        description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
        techstack: "HTML, CSS, JavaScript",
        previewLink: "https://focused-kalam-b9f3f4.netlify.app/",
        githubLink: "https://github.com/Rahul-chaurasiya/amazon_watch_page_by_js",
    },
    {
        title: "TIC-TAC-TOE Game",
        image: projectImage5,
        description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
        techstack: "HTML/CSS, JavaScript",
        previewLink: "https://blissful-cray-be1356.netlify.app/",
        githubLink: "https://github.com/Rahul-chaurasiya/tik-tak-toe_by_js",
    },
    {
        title: "Ball Brick Breaker Game",
        image: projectImage6,
        description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
        techstack: "C/C++, Graphics",
        previewLink: "https://www.linkedin.com/feed/update/urn:li:activity:6892838633703841792/",
        githubLink: "https://github.com/Rahul-chaurasiya/My-c-codes/blob/main/BRICK_BR.C",
    },
];

// Enter your Contact Details here
export const contactDetails = {
    email: "rahulchaurasiadabra@gmail.com",
    phone: "+91 8602327416",
};
