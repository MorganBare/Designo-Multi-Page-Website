import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { About, AppDesign, Contact, GraphicDesign, Locations, WebDesign, Home} from "../pages"
import { MobileNavigation, Navigation } from "../components"
import {ContactLayout, MainLayout} from "../layouts"
import ScrollToTop from "./ScrollToTop";

const Routing = () => {

    return (
        <HashRouter basename="/">
                <ScrollToTop/>
                <Navigation/>
                <MobileNavigation/>
                <Routes>
                    <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                    <Route path="/App-Design" element={<MainLayout><AppDesign /></MainLayout>} />
                    <Route path="/Contact" element={<ContactLayout><Contact /></ContactLayout>} />
                    <Route path="/About" element={<MainLayout><About /></MainLayout>} />
                    <Route path="/Graphic-Design" element={<MainLayout><GraphicDesign /></MainLayout>} />
                    <Route path="/Locations" element={<MainLayout><Locations /></MainLayout>} />
                    <Route path="/Web-Design" element={<MainLayout><WebDesign /></MainLayout>} />
                </Routes>
        </HashRouter>
    )
}

export default Routing