import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, AppDesign, Contact, GraphicDesign, Locations, WebDesign, Home} from "../pages"
import { Navigation } from "../components"
import {ContactLayout, MainLayout} from "../layouts"

const Routing = () => {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/App-Design" element={<MainLayout><AppDesign /></MainLayout>} />
                <Route path="/Contact" element={<ContactLayout><Contact /></ContactLayout>} />
                <Route path="/About" element={<MainLayout><About /></MainLayout>} />
                <Route path="/Graphic-Design" element={<MainLayout><GraphicDesign /></MainLayout>} />
                <Route path="/Locations" element={<MainLayout><Locations /></MainLayout>} />
                <Route path="/Web-Design" element={<MainLayout><WebDesign /></MainLayout>} />
            </Routes>
        </Router>
    )
}

export default Routing