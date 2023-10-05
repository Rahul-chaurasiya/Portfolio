// import React from "react";
import Work from "../Components/Work";
import React, { useRef } from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
    const { img_about } = personalDetails;
    const myimageref = useRef();

    return (
        <main className="container mx-auto max-width pt-10 pb-20 ">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    About Me
                </h1>
                <div className="container mt-4rem md:flex items-center">
                    <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
                    <div style={{ width: "300px" }}>

                        <img ref={myimageref} style={{ maxWidth: "300px" }} className="ml-12" src={img_about} alt="Rahul Chaurasiya" />

                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Education
                </h1>
                {React.Children.toArray(
                    eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
                        <Work
                            position={Position}
                            company={Company}
                            location={Location}
                            type={Type}
                            duration={Duration}
                        />
                    ))
                )}
            </section>


            <section className="pt-6 mb-12">
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Work Experience
                </h1>
                {React.Children.toArray(
                    workDetails.map(({ Position, Company, Location, Type, Duration }) => (
                        <Work
                            position={Position}
                            company={Company}
                            location={Location}
                            type={Type}
                            duration={Duration}
                        />
                    ))
                )}
            </section>


            <section className="pt-6">
                <h1 className="pt-6 text-xl text-dark-heading dark:text-light-heading md:text-2xl xl:text-3xl xl:leading-tight font-bold">
                    Achievements & Certifications
                </h1>
            </section>
            <div class="container my-8 block p-3  text-sm rounded-lg border dark:bg-tab-dark dark:border-gray-600">
                <section class="dark:text-light-content md:text-left my-6">
                    <div className="container my-4" >
                        <a href="/" >
                            <img width="30" height="48" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/fluency/48/source-code.png" alt="source-code" />
                            <span className="ml-4">500+ DSA Questions Solved in different Coding Platforms.</span>
                        </a>
                    </div>
                    <div className="container my-4" >
                        <a href="https://leetcode.com/rahulchaurasiadabra/" >
                            <img width="30" height="24" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                            <span className="ml-4">300+ DSA Questions Solved in LeetCode.</span>
                        </a>
                    </div>
                    <div className="container my-4" >
                        <a href="https://www.codechef.com/users/rahul12239" >
                            <img width="32" height="100" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/plasticine/100/codechef.png" alt="codechef" />
                            <span className="ml-3">3 Star on CodeChef + Global Rank 371 in Starters 98 Division 3.</span>
                        </a>
                    </div>
                    <div className="container my-4" >
                        <a href="https://www.hackerrank.com/rahulchaurasiad1">
                            <img width="28" height="24" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png" alt="external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo" />
                            <span className="ml-4">5 Star on HackerRank in C++ & Java.</span>
                        </a>
                    </div>
                    <div className="container my-4" >
                        <a href="https://auth.geeksforgeeks.org/user/rahulchaurasiadabra/practice">
                            <img width="30" height="48" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/color/48/GeeksforGeeks.png" alt="GeeksforGeeks" />
                            <span className="ml-4">100+ DSA Questions Solved in GFG.</span>
                        </a>
                    </div>
                    <div className="container my-4" >
                        <a href="https://www.holopin.io/@rahul_chaurasiya#badges" >
                            <img width="30" height="50" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
                            <span className="ml-4">Successfully completed Hactoberfest 2022.</span>
                        </a>
                    </div>

                    <hr style={{ borderColor: "#545050", margin: "3% 20% 3% 0" }} />

                    <div className="container my-4" >
                        <a href="https://www.linkedin.com/in/rahul-chaurasiya-97072b208/overlay/1635542224666/single-media-viewer/?profileId=ACoAADTKBaQBbEZ-ar1pFPIIWG0wLtE10m3FvfA" >
                            <img width="30" height="35px" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/external-thin-kawalan-studio/24/external-medal-education-thin-kawalan-studio.png" alt="github" />
                            <span className="ml-4">NPTEL Programming in Java by IIT Kharagpur. Score - 81%</span>
                        </a>
                    </div>
                    <div className="container my-4" >
                        <a href="https://www.hackerrank.com/certificates/16e5ca967d21" >
                            <img width="30" height="35px" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/external-thin-kawalan-studio/24/external-medal-education-thin-kawalan-studio.png" alt="github" />
                            <span className="ml-4">HackerRank Certificate for clear the Java Assesment.</span>
                        </a>
                    </div>
                    <div className="container my-4" >
                        <a href="https://drive.google.com/file/d/1EfWJ2mNuoHuVJqNu_HlWoDaWSMk6eK01/view?usp=sharing" >
                            <img width="30" height="35px" style={{ display: "math", borderRadius: "50%" }} src="https://img.icons8.com/external-thin-kawalan-studio/24/external-medal-education-thin-kawalan-studio.png" alt="github" />
                            <span className="ml-4">Samyak Technology Enterprises Certificate for compeletion of Project.</span>
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default About;
