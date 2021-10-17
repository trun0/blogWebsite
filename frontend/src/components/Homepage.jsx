import React from "react";
import Home from "./homeContent/Home";
import Contact from "./homeContent/Contact";
import About from "./homeContent/About";
import './homeContent/h.css';

function Homepage() {
    return (
        <div>
            <Home />
            <About />
            <Contact />
        </div>
    );
}

export default Homepage;