import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Toolbar = () => {
    const [isOpenRight, setIsOpenRight] = useState(false);
    const [isOpenLeft, setIsOpenLeft] = useState(false);

    const handleMouseEnterRight = () => setIsOpenRight(true);
    const handleMouseLeaveRight = () => setIsOpenRight(false);

    const handleMouseEnterLeft = () => setIsOpenLeft(true);
    const handleMouseLeaveLeft = () => setIsOpenLeft(false);

    return (
        <div className="w-full fixed top-0 left-0 bg-transparent px-4 py-2 flex justify-between items-center z-50">
            {/* Left side - Levant Labs */}
            <a
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to red-500"
            >
                Levant Labs
            </a>

            {/* Left Dropdown Menu */}
            <div className="relative">
                <button
                    onMouseEnter={handleMouseEnterLeft}
                    onMouseLeave={handleMouseLeaveLeft}
                    className="flex items-center px-4 focus:outline-none"
                >
                    {/* Grid Icon */}
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"/>
                    </svg>
                </button>

                <div
                    className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
                        isOpenLeft ? 'opacity-100 scale-y-100 max-h-40' : 'opacity-0 scale-y-0 max-h-0'
                    } origin-top`}
                    onMouseEnter={handleMouseEnterLeft}
                    onMouseLeave={handleMouseLeaveLeft}
                >
                    <ul className="overflow-hidden">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <a href="/contact">Contact</a> {/* Link to Contact page */}
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <Link to="/projects">Projects</Link> {/* Link to Projects page */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
