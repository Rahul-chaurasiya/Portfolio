import React from "react";
import { techStackDetails } from "../Details";

function TableProgramming() {
    const {
        js,
        c,
        cpp,
        java,
        python,
    } = techStackDetails;

    return (
        <table class="w-full mr-8rem flex-item text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-tab-dark dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-6 ">
                        Programming Languages
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={c} alt="c" style={{ width: "7%" }} />
                            <p className="mx-12">C</p>
                        </div>
                    </th>
                </tr>

                <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={cpp} alt="cpp" style={{ width: "6%" }} />
                            <p className="mx-12">Cpp</p>
                        </div>
                    </th>
                </tr>

                <tr class="bg-white dark:bg-dark-card">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12">
                            <img src={java} alt="java" style={{ width: "6%" }} />
                            <p className="mx-12">Java</p>
                        </div>
                    </th>
                </tr>

                <hr style={{ borderColor: "#374151" }} />
                <tr class="bg-white dark:bg-dark-card">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={python} alt="python" style={{ width: "6%" }} />
                            <p className="mx-12">Python</p>
                        </div>
                    </th>
                </tr>

                <hr style={{ borderColor: "#374151" }} />
                <tr class="bg-white dark:bg-dark-card">
                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="container md:flex items-center mx-12 my-1">
                            <img src={js} alt="js" style={{ width: "6%" }} />
                            <p className="mx-12">Java Sript</p>
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>

    )
}

export default TableProgramming;