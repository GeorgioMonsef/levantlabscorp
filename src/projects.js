import React from 'react';

const Projects = () => {
    return (
        <div className="bg-black text-white p-8">
            <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">Our Projects</h1>

            <div className="flex flex-col lg:flex-row justify-between">
                {/* Personal Portfolios Section */}
                <section className="mb-16 lg:w-1/2 lg:mr-4">
                    <h2 className="text-4xl font-semibold mb-4 text-center">Personal Portfolios</h2>
                    <p className="text-lg mb-4 text-center">
                        Here are some of the personal portfolio projects we've created for our clients:
                    </p>
                    <ul className="list-none">
                        <li className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://karimalmalki.com" target="_blank" rel="noopener noreferrer"
                               className="font-bold text-green-400 text-xl text-center block hover:underline">
                                Karim Al Malki
                            </a>
                            <p className="mt-2 text-center">A sleek and modern design demonstrating this university
                                student's portfolio.</p>
                        </li>
                        <li className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="#"
                               className="font-bold text-green-400 text-xl text-center block hover:underline cursor-not-allowed">
                                Saad Azeem
                            </a>
                            <p className="mt-2 text-center">This project is currently under development.</p>
                        </li>
                        <li className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="#"
                               className="font-bold text-green-400 text-xl text-center block hover:underline cursor-not-allowed">
                                Amer Ammari
                            </a>
                            <p className="mt-2 text-center">This project is currently under development.</p>
                        </li>
                        <li className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="#"
                               className="font-bold text-green-400 text-xl text-center block hover:underline cursor-not-allowed">
                                Laura Monsef
                            </a>
                            <p className="mt-2 text-center">This project is currently under development.</p>
                        </li>
                        <li className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="#"
                               className="font-bold text-green-400 text-xl text-center block hover:underline cursor-not-allowed">
                                Maroun Tarabey
                            </a>
                            <p className="mt-2 text-center">This project is currently under development.</p>
                        </li>
                        <li className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="#"
                               className="font-bold text-green-400 text-xl text-center block hover:underline cursor-not-allowed">
                                Georgio Monsef
                            </a>
                            <p className="mt-2 text-center">This project is currently under development.</p>
                        </li>
                    </ul>
                </section>

                {/* Company Websites Section */}
                <section className="mb-16 lg:w-1/2 lg:ml-4">
                    <h2 className="text-4xl font-semibold mb-4 text-center">Company Websites</h2>
                    <p className="text-lg mb-4 text-center">
                        Explore some of the company websites we have developed for our clients:
                    </p>
                    <ul className="list-none">
                        <li className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg transition-transform transform hover:scale-105">
                            <a href="https://canadianclimateenergy.org" target="_blank" rel="noopener noreferrer"
                               className="font-bold text-yellow-400 text-xl text-center block hover:underline">
                                Canadian Climate Energy
                            </a>
                            <p className="mt-2 text-center">Sustainable energy company specializing in HVAC and Solar based in Ontario, Canada.</p>
                        </li>

                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Projects;
