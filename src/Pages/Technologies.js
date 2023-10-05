import React from "react";
import TableProgramming from "../Components/TableProgramming";
import TableWeb from "../Components/TableWeb";
import TableBackendDatabase from "../Components/TableBackendDatabase";
import TableVersion from "../Components/TableVersion";

function Technologies() {
    return (
        <main className="container mx-auto max-width pt-10 pb-20">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Tech Stack
                </h1>
                <p className="text-content">
                    <div class="container mx-auto mt-4rem md:flex justify-evenly items-center">
                        <TableProgramming className="my-4" />
                        <TableWeb />
                    </div>
                </p>
            </section>

            <br />

            <section>
                <p className="text-content">
                    <TableBackendDatabase />
                </p>
            </section>

            <br />

            <section>
                <p className="text-content py-2">
                    <TableVersion />
                </p>
            </section>
        </main>
    )
}
export default Technologies;
