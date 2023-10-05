import React from "react";
import { techStackDetails } from "../Details";

function TableWeb() {
    const {
        html,
        css,
        react,
        tailwind,
        bootstrap,
        jquery
    } = techStackDetails;

    return (
        <table class="w-full mr-8rem flex-item text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-tab-dark dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-6 ">
                        Web Frontend
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 ">
                            <img src={html} alt="html" style={{ width: "7%" }} />
                            <p className="mx-12">HTML5</p>
                        </div>
                    </th>
                </tr>

                <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={css} alt="css" style={{ width: "6%" }} />
                            <p className="mx-12">CSS3</p>
                        </div>
                    </th>
                </tr>

                <tr class="bg-white dark:bg-dark-card">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={jquery} alt="jquery" style={{ width: "5%" }} />
                            <p className="mx-12">Jquery</p>
                        </div>
                    </th>
                </tr>

                <hr style={{ borderColor: "#374151" }} />
                <tr class="bg-white dark:bg-dark-card">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12">
                            <img src={bootstrap} alt="bootstrap" style={{ width: "5%" }} />
                            <p className="mx-12">Bootstrap</p>
                        </div>
                    </th>
                </tr>

                <hr style={{ borderColor: "#374151" }} />
                <tr class="bg-white dark:bg-dark-card">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={react} alt="react" style={{ width: "5%" }} />
                            <p className="mx-12">React</p>
                        </div>
                    </th>
                </tr>

                <hr style={{ borderColor: "#374151" }} />
                <tr class="bg-white dark:bg-dark-card">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={tailwind} alt="tailwind" style={{ width: "5%" }} />
                            <p className="mx-12">Tailwind</p>
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>

    )
}

export default TableWeb;