import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_u54as6k", "template_1a4y6oo", form.current, "G6G6R8wmHHzBlT8Ch").then((result) => {
            console.log(result.text);
            console.log("message sent");
        },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section>
            <div class="py-8 dark:border-gray-600 lg:py-16 px-24 mx-auto mx-48 rounded min-width-full">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Contact Us</h2>
                <p class="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">Let's connect and look for ways to work together on exciting projects and contribute to the ever-changing digital world."</p>
                <form ref={form} onSubmit={sendEmail} class="space-y-8">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="from_name" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your good name" required/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name="from_email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how we can help you"></textarea>
                    </div>
                    <button type="submit" value="Send" class=" bg-gradient hover:bg-blue-600 text-white font-800 py-2 px-4 rounded">Send message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;








// import React, { useState } from "react";

// const Contact = () => {
//     const [formState, setFormState] = useState({});

//     // const config = {
//     //     Username: "rahulchaurasiadabra@gmail.com",
//     //     Password: "AAF863635CE83E0B5FF0DE89842123CE778D",
//     //     Host: "smtp.elasticemail.com",
//     //     Port: 2525,
//     //     To: 'them@website.com',
//     //     From: "you@isp.com",
//     //     Subject: "This is the subject",
//     //     Body: "And this is the body"
//     // };

//     const changeHandler = (event) => {
//         setFormState({ ...formState, [event.target.name]: event.target.value });
//     }

//     const submitHandler = (event) => {
//         event.preventDefault();
//         const config = {
//             SecureToken: '923486d1-30f9-4011-8c2c-62e375a525cb',
//             To: "rahulchaurasiadabra@gmail.com",
//             From: formState.email,
//             Subject: "This is the subject",
//             Body: `${formState.name} connected to you over email`,
//         };

//         if (window.Email) {
//             window.Email.send(config).then(() => console.log(config));
//         }
//     }

//     return (
//         <section>
//             <div class="py-8 dark:border-gray-600 lg:py-16 px-24 mx-auto mx-48 rounded min-width-full">
//                 <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Contact Us</h2>
//                 <p class="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">Let's connect and look for ways to work together on exciting projects and contribute to the ever-changing digital world."</p>
//                 <form className="space-y-8" onSubmit={submitHandler}>
//                     <div>
//                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
//                         <input type="text" name="name" value={formState.name || ''} onChange={changeHandler} id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your good name" required />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//                         <input type="email" id="email" name="email" value={formState.email || ''} onChange={changeHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
//                     </div>
//                     <div>
//                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Contact</label>
//                         <input type="tel" id="number" name="number" value="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="12345" />
//                     </div>
//                     <div class="sm:col-span-2">
//                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
//                         <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how we can help you"></textarea>
//                     </div>
//                     <button type="submit" value="Send" className=" bg-gradient hover:bg-blue-600 text-white font-800 py-2 px-4 rounded">Send message</button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Contact;








