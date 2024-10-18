import React from 'react';

const Steps = () => {
    return (
        <div className="bg-black flex flex-col lg:flex-row items-center mt-20 py-10">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg shadow-lg p-8 mb-4 lg:mb-0 lg:mr-4 w-full lg:w-1/3 transition-transform transform hover:scale-105 flex flex-col justify-between">
                <h2 className="text-5xl font-bold text-center">1</h2>
                <p className="mt-4 text-lg text-center">
                    <span
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-bold text-green-200 cursor-pointer hover:text-green-100 transition duration-300">
                        Book
                    </span>, simply fill the form and we contact you in a method of your choice.
                </p>
                <div className="w-full bg-green-500 h-2 mt-2 rounded"></div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white rounded-lg shadow-lg p-8 mb-4 lg:mb-0 lg:mr-4 w-full lg:w-1/3 transition-transform transform hover:scale-105 flex flex-col justify-between">
                <h2 className="text-5xl font-bold text-center">2</h2>
                <p className="mt-4 text-lg text-center">72 hours max, or money back guaranteed.</p>
                <div className="w-full bg-yellow-500 h-2 mt-2 rounded"></div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-red-600 to-red-400 text-white rounded-lg shadow-lg p-8 mb-4 lg:mb-0 w-full lg:w-1/3 transition-transform transform hover:scale-105 flex flex-col justify-between">
                <h2 className="text-5xl font-bold text-center">3</h2>
                <p className="mt-4 text-lg text-center">Hosted.</p>
                <div className="w-full bg-red-500 h-2 mt-2 rounded"></div>
            </div>
        </div>
    );
};

export default Steps;
