import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-black flex pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left text-yellow-400">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2">
                            Find us on any of these platforms, we respond within 1 business hour.
                        </h5>
                        <div className="flex mt-6 lg:mb-0 mb-6">
                            <a
                                href="https://www.instagram.com/levantlabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-yellow-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                            >
                                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
                            </a>
                            <a
                                href="mailto:admin@levantsolutionsinc.com"
                                className="bg-black text-yellow-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                            >
                                <i className="fas fa-envelope"></i> {/* Email Icon */}
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">

                        </div>
                    </div>
                </div>
                <hr className="my-6 border-yellow-400" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-yellow-400 font-semibold py-1">
                            <span>
                                Copyright © <span id="get-current-year">2024</span> by{' '}
                            </span>
                            <a
                                href="https://levantsolutionsinc.com"
                                className="text-yellow-400 hover:text-yellow-300 font-semibold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Levant Solutions Inc.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
