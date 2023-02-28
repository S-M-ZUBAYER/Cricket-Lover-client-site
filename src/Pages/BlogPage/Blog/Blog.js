import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12">
            <div className="mx-24  space-y-4">
                <details data-aos="fade-up" data-aos-duration="2000" className="group rounded-lg bg-gray-50 p-6" open>
                    <summary data-aos="fade-up" data-aos-duration="2000" className="flex cursor-pointer items-center justify-between">
                        <h2 className="font-medium text-gray-900">
                            1. What are the different ways to manage a state in a React application?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p data-aos="fade-up" data-aos-duration="2000" className="mt-4 leading-relaxed text-gray-700 text-left">
                        <h3 className="text-xl font-bold text-green-800">Ways to manage a state in a React application:-</h3>
                        <span>There are four main types of state you need to properly manage in your React apps:</span>
                        <span><br /> 1. Local state
                            <br />
                            2. Global state
                            <br />
                            3. Server state
                            <br />4. URL state
                            <br />
                        </span>
                        <br />
                        <h4 className="text-lg font-semibold text-gray-700">Local (UI) state:</h4>
                        <span> Local state is data we manage in one or another component. <br />
                            Local state is most often managed in React using the useState hook. <br />
                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</span>
                        <br />
                        <br />
                        <h4 className="text-lg font-semibold text-gray-700">Global (UI) state:</h4>
                        <span> Global state is data we manage across multiple components. <br />
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <br />
                            Sometimes state we think should be local might become global.</span>
                        <br />
                        <br />
                        <h4 className="text-lg font-semibold text-gray-700">Server state:</h4>
                        <span> Data that comes from an external server that must be integrated with our UI state.

                            <br />
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />
                            Fortunately there are tools such as SWR and React Query that make managing server state much easier.</span>
                        <br />
                        <br />
                        <h4 className="text-lg font-semibold text-gray-700">URL state :</h4>
                        <span>  Data that exists on our URLs, including the pathname and query parameters.

                            <br />
                            URL state is often missing as a category of state, but it is an important one. <br />
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! <br />
                            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</span>
                        <br />
                        <br />
                    </p>
                </details>

                <details data-aos="fade-up" data-aos-duration="2000" className="group rounded-lg bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="font-medium text-gray-900">
                            2. How does prototypical inheritance work?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 text-left">
                        <h3 className="text-xl font-bold text-green-800">Prototype Inheritance in JavaScript: :-</h3>
                        <br />
                        <span className="text-lg font-semibold"> Following bullet points will try to analyze the basics behind Prototype Inheritance in JavaScript-</span>
                        <span><br /> * Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.)
                            <br />
                            * JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance.
                            <br />
                            * In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.
                            <br /> * All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).
                        </span>
                        <br />
                    </p>
                </details>
                <details data-aos="fade-up" data-aos-duration="2000" className="group rounded-lg bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="font-medium text-gray-900">
                            3. What is a unit test? Why should we write unit tests?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700 text-left">
                        <h3 className="text-xl font-bold text-green-800">unit test:-</h3>
                        <span>Unit tests are simple scripts that check whether a given unit—class, function, module, etc.—is working as expected. They are meant to be rather simple, to cover the happy path of the code plus a few edge cases. They contribute to the long-term success of a project because of the reasons I discuss below.</span>
                        <br />
                        <br />
                        <h3 className="text-xl font-bold text-green-800">Reason to write unit tests:-</h3>
                        <h4 className="text-lg font-semibold text-gray-700">Speed up development testing:</h4>
                        <span>When you start building applications, the most natural thing is to test the code with the user interface. You can make this process way faster and more reliable by writing a script that will check the code for you. With tests in place, rerunning all of them takes no mental energy from you; you can do it as often as you feel like. This leads to a shorter feedback loop too, which will help you stay focused and productive.</span>
                        <br />
                        <br />
                        <h4 className="text-lg font-semibold text-gray-700">Ensure that your code is composed of units:</h4>
                        <span>When you add unit tests to your code, you see what is easy to test and what is not. As your code grows in size and complexity, tests will force you to break it into manageable pieces. This is great because it will help you take the quality of your code to the next level. Every segment that received excessive responsibilities will require exponentially more complicated unit tests. In those cases, it’s a good idea to stop and rethink how you organize your logic.</span>
                        <br />
                        <br />
                        <h4 className="text-lg font-semibold text-gray-700">Discover edge cases:</h4>
                        <span>Writing unit tests makes me think about edge cases—all the situations that are rare, unexpected, or wrong. When you write the logic, it’s normal to focus on the happy path, or what’s normal and expected to happen. When you write tests, you can set up checks for the edge cases and define what should happen in each of them. This makes your code more resilient in cases of unexpected inputs.</span>
                    </p>
                </details>
                <details data-aos="fade-up" data-aos-duration="2000" className="group rounded-lg bg-gray-50 p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="font-medium text-gray-900">
                            4. React vs. Angular vs. Vue?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 text-left text-gray-700">
                        <>
                            <h3 className="text-xl font-bold text-green-800">React:-</h3>
                            <span> Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: we must solve the model and controller yourself.With React.js, we handle the markup and the logic in the same file, which means we can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.</span>
                            <span><br /> * Fast loading of new data.
                                <br />
                                * One file contains both markup and logic (JSX).
                                <br />
                                * Enables the separation of data and presentation.</span>
                            <span><br /> * It is just a JavaScript library, not a framework.
                                <br />
                                * No possibility to implement MVC architecture.
                                <br />
                                * Only worth using if web applications need to be highly interactive.</span>
                            <br />
                            <br />
                        </>
                        <>
                            <h3 className="text-xl font-bold text-green-800">Angular:-</h3>
                            <span>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.</span>
                            <span><br /> * Allows MVC architecture.
                                <br />
                                * Web applications built with Angular perform very well.
                                <br />
                                * Angular lets you manage microfrontend architecture</span>
                            <span><br /> * Reloads the complete HTML tags tree structure.
                                <br />
                                * Slow loading time due to the Ionic app.
                                <br />
                                * Because of the given framework, Angular is relatively stiff and inflexible.</span>
                            <br />
                            <br />
                        </>
                        <>
                            <h3 className="text-xl font-bold text-green-800">Vue:-</h3>
                            <span> Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.</span>
                            <span><br /> * A list of tools and libraries (Vue.js official CLI, Development Tools, Vue Loader, Vue Router).
                                <br />
                                * Flexibility and simplicity in the utilization.
                                <br />
                                * Reusable in the terms of adding numerous reactive components to the existing code</span>
                            <span><br /> * Limited community comparing to Angular and React
                                <br />
                                * Language handicap because a large number of users are non-English speakers
                                <br />
                                * Overcomplications with flexibility</span>
                            <br />
                            <br />
                        </>

                    </p>
                </details>

            </div>
        </div>
    );
};

export default Blog;