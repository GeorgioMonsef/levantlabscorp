import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPaintBrush, faCode, faTools } from '@fortawesome/free-solid-svg-icons';
import ottawaImage from './ottawa3.jpeg'; // Import the ottawa3.jpeg file
import Form from './Form'; // Import the Form component

const Welcome = () => {
    const [isFormVisible, setFormVisible] = useState(false); // State to control form visibility
    const servicesRef = useRef(null);  // Create a reference for the "Our Services" section

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });  // Scroll to "Our Services"
    };

    return (
        <div
            className="min-h-screen flex flex-col justify-between items-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${ottawaImage})` }}
        >
            {/* Main Section */}
            <div className="text-center p-6 bg-black bg-opacity-90 rounded-lg shadow-lg max-w-6xl mt-20 sm:mt-40 mx-auto sm:px-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 mb-4">
                    Wed <span className="line-through decoration-yellow-500">developers</span> designers.
                </h1>
                <div className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 mb-4">
                    Book, Consult, Hosted, 72 hours
                </div>
                <p className="text-lg sm:text-xl text-yellow-400 max-w-xl mx-auto mb-8 px-4">
                    We are dedicated to providing top-tier services and innovative solutions that empower businesses to
                    thrive. With a focus on quality and excellence, we ensure results on time, every time.
                </p>

                {/* Buttons */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full"
                        onClick={() => setFormVisible(true)}
                    >
                        Get started
                    </button>
                    {/* Button to scroll down */}
                    <button
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full"
                        onClick={scrollToServices}  // Scroll when clicked
                    >
                        Learn more
                    </button>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-green-400">Best price guaranteed</h3>
                        <p className="text-sm sm:text-base text-gray-500 mt-2">You beat our price? Send us the invoice we match by 10% additional.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Beating industry standards</h3>
                        <p className="text-sm sm:text-base text-gray-500 mt-2">Website up and running in perfection 72 hours at the latest following the consultation</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-red-400">Maintainability</h3>
                        <p className="text-sm sm:text-base text-gray-500 mt-2">Contact us for any updates you wish to do on your website, we respond within one hour.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="w-full bg-black bg-opacity-40 py-8 text-center mt-16" ref={servicesRef}>  {/* Ref here */}
                <h2 className="text-2xl sm:text-3xl text-white font-bold mb-4">Why Choose Us?</h2>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
                    Our team combines creativity, industry knowledge, and technical expertise to deliver exceptional
                    results. We prioritize communication, speed, and top-quality outcomes that meet your needs perfectly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
                    <div className="text-center">
                        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Experienced Team</h3>
                        <p className="text-gray-400 mt-2">Our developers and designers have years of experience in delivering high-quality websites and applications.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Customer Focused</h3>
                        <p className="text-gray-400 mt-2">We work closely with you to ensure that we understand your goals and provide the best solutions.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Fast & Reliable</h3>
                        <p className="text-gray-400 mt-2">We guarantee fast delivery and constant communication throughout the project.</p>
                    </div>
                </div>

                {/* Development Processes Section */}
                <div className="mt-12 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-800 text-white p-4 rounded-lg flex items-start">
                            <FontAwesomeIcon icon={faClipboardList} className="text-yellow-400 text-3xl mr-2"/>
                            <div>
                                <h4 className="font-bold text-lg text-yellow-400">1. Planning</h4>
                                <p className="text-sm">We book a meeting on your time on the platform of your choice.</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-lg flex items-start">
                            <FontAwesomeIcon icon={faPaintBrush} className="text-yellow-400 text-3xl mr-2"/>
                            <div>
                                <h4 className="font-bold text-lg text-yellow-400">2. Design</h4>
                                <p className="text-sm">We turn your vision into a reality. Don't have a clear vision? Our web experts will fill in the blanks and create a masterpiece.</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-lg flex items-start">
                            <FontAwesomeIcon icon={faCode} className="text-yellow-400 text-3xl mr-2"/>
                            <div>
                                <h4 className="font-bold text-lg text-yellow-400">3. Development</h4>
                                <p className="text-sm">Simply wait up to 72 hours. We send you updates during the development stage.</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 text-white p-4 rounded-lg flex items-start">
                            <FontAwesomeIcon icon={faTools} className="text-yellow-400 text-3xl mr-2"/>
                            <div>
                                <h4 className="font-bold text-lg text-yellow-400">4. Maintenance</h4>
                                <p className="text-sm">Launch the application, perform final testing, and support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Overlay */}
            {isFormVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
                    <div
                        className="bg-black rounded-lg p-8 w-full h-auto overflow-y-auto relative"
                    >
                        {/* Close button (X) */}
                        <button
                            onClick={() => setFormVisible(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        {/* Form content */}
                        <Form/>

                    </div>
                </div>
            )}

        </div>
    );
};

export default Welcome;
