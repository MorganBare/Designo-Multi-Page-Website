import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, AppDesign, Contact, GraphicDesign, Locations, WebDesign, Home} from "../pages"
import Navigation from "../components/Navigation";

const Routing = () => {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/App-Design" element={<AppDesign />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Graphic-Design" element={<GraphicDesign />} />
                <Route path="/Locations" element={<Locations />} />
                <Route path="/Web-Design" element={<WebDesign />} />
            </Routes>
        </Router>
    )
}

export default Routing