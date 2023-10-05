import React from "react";
import { techStackDetails } from "../Details";

function TableBackendDatabase() {
    const {
        java,
        express,
        node,
        mysql,
        oracle,
        mongodb,
    } = techStackDetails;

    return (
        <div class="container mx-auto mt-4rem md:flex justify-evenly items-center">
            <table class="w-full mr-8rem flex-item text-sm text-left text-gray-500 dark:text-gray-400 my-2">
                <thead class="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-tab-dark dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-6 ">
                            Web Backend
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-8">
                                <img src={node} alt="node" style={{ width: "9%" }} />
                                <p className="mx-12">Node Js</p>
                            </div>
                        </th>
                    </tr>

                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-4 my-2">
                                <img src={express} alt="express" style={{ width: "12%" }} />
                                <p className="mx-12">Express Js</p>
                            </div>
                        </th>
                    </tr>

                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-12 my-1">
                                <img src={java} alt="java" style={{ width: "5%" }} />
                                <p className="mx-12">Java Backend (Servlet, JSP, JSTL)</p>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>



            <table class="w-full mr-8rem flex-item text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-tab-dark dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-6 ">
                            Databases
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-12 my-2">
                                <img src={mysql} alt="sql" style={{ width: "5%" }} />
                                <p className="mx-12">MySQL</p>
                            </div>
                        </th>
                    </tr>

                    <tr class="bg-white border-b dark:bg-dark-card dark:border-gray-700">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-12 my-2 ">
                                <img src={oracle} alt="oracle" style={{ width: "8%" }} />
                                <p className="mx-8">Oracle</p>
                            </div>
                        </th>
                    </tr>

                    <tr class="bg-white dark:bg-dark-card">
                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="container md:flex items-center mx-12 my-2">
                                <img src={mongodb} alt="mongodb" style={{ width: "5%" }} />
                                <p className="mx-12">MongoDB</p>
                            </div>
                        </th>
                    </tr>
                    <hr style={{ borderColor: "#374151" }} />
                </tbody>
            </table>
        </div>
    )
}

export default TableBackendDatabase;