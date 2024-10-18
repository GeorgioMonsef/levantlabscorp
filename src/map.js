import React from 'react';

const Map = () => {
    return (
        <div className="bg-black h-screen flex flex-col lg:flex-row">
            {/* Left Side - Map */}
            <div className="lg:w-1/2 w-full p-0 bg-black mt-20 mb-20">
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.3010919291537!2d-75.68537168464812!3d45.41077107910071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce00e71b546205%3A0xa4c08d13f7da2f5a!2s310%20Miwate%20Private%2C%20Ottawa%2C%20ON%20K1W%204X7%2C%20Canada!5e0!3m2!1sen!2sus!4v1697401123890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Right Side - Our Services */}
            <div className="bg-black lg:w-1/2 w-full p-8 m-4 text-white flex flex-col justify-start mt-20 rounded-lg shadow-lg">
                <h2 className="text-7xl font-bold mb-6 text-center">Our Services</h2>
                <ul className="list-disc list-inside text-2xl space-y-6">
                    <li>Your vision, a reality: consultation, 72 hours, hosted.</li>
                    <li>Offering ongoing support and maintenance services.</li>
                    <li>Custom web application development tailored to your needs.</li>
                    <li>Responsive design for all devices to enhance user experience.</li>
                    <li>Optimization to improve your online visibility.</li>
                    <li>Database design and management for efficient data handling.</li>
                </ul>

                <div className="flex justify-center mt-8">
                    <a
                        href="/projects"
                        className="bg-yellow-400 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition duration-300"
                    >
                        View Our Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Map;
