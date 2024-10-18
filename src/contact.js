import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-8 bg-black text-white"> {/* Set min-h-screen for taller page */}
            {/* Left Side: Contact Information */}
            <div className="lg:w-1/2 pr-8 pt-5 lg:pt-0"> {/* Responsive padding */}
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="mb-2 text-lg">
                    <span className="font-semibold">Email: </span>
                    <a href="mailto:admin@levantsolutionsinc.com" className="text-yellow-300 hover:underline">
                        admin@levantsolutionsinc.com
                    </a>
                </p>
                <p className="mb-2 text-lg">
                    <span className="font-semibold">Phone: </span>
                    <a href="tel:6136009723" className="text-yellow-300 hover:underline">
                        613-600-9723
                    </a>
                </p>
                <p className="mb-2 text-lg">
                    <span className="font-semibold">Address: </span>
                    <span className="text-yellow-300">310 Miwate Private</span>
                </p>
                <p className="mb-2 text-lg">
                    <span className="font-semibold">Hours: </span>
                    <span className="text-yellow-300">24 hours, Monday-Saturday</span>
                </p>
            </div>

            {/* Right Side: Map */}
            <div className="lg:w-1/2 mt-8 lg:mt-0"> {/* Margin for spacing on mobile */}
                <h2 className="text-3xl font-semibold mb-4 pt-5">Our Location</h2>
                <div className="h-[80vh] w-full"> {/* Set to a specific height for the map */}
                    <iframe
                        title="Google Map"
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.442593442342!2d-75.71526658452165!3d45.36704787910107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05dc6c1786f7%3A0x9e2da460cc30353f!2s310%20Miwate%20Private%2C%20Ottawa%2C%20ON%20K1V%205G4%2C%20Canada!5e0!3m2!1sen!2sus!4v1697707506464!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
