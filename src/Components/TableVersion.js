import React from "react";
import { techStackDetails } from "../Details";

function TableVersion() {
    const {
        git,
        github,
        hindi,
        english,
    } = techStackDetails;

    return (
        <div class="container mx-auto mt-4rem md:flex justify-evenly items-center">
            <table class="w-full mr-8rem flex-item text-sm text-left text-gray-500 dark:text-gray-400 my-2">
                <thead class="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-tab-dark dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-6 ">
                            Version Control
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-8">
                                <img src={git} alt="git" style={{ width: "8%" }} />
                                <p className="mx-12">Git</p>
                            </div>
                        </th>
                    </tr>

                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-8">
                                <img src={github} alt="github" style={{ width: "8%" }} />
                                <p className="mx-12">Github</p>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>



            <table class="w-full mr-8rem flex-item text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-tab-dark dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-6 ">
                            Languages
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-12 my-1">
                                <img src={hindi} alt="hindi" style={{ width: "7%" }} />
                                <p className="mx-12">Hindi</p>
                            </div>
                        </th>
                    </tr>

                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-12 my-1">
                                <img src={english} alt="english" style={{ width: "5%" }} />
                                <p className="mx-12">English</p>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableVersion;