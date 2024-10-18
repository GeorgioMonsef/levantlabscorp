import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './welcome';
import Map from './map';
import Projects from './projects';
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import Steps from "./steps"; // Import Steps component
import Contact from "./contact"; // Import Contact component
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
    return (
        <div>
            <Welcome />
            <Map />
            <Steps /> {/* Add Steps component here */}
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div className="bg-black min-h-screen">
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Show both Welcome, Map, and Steps */}
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
