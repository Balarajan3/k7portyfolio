import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Tools from '../components/Tools';
import WhyWork from '../components/WhyWork';
import SelectedWorks from '../components/SelectedWorks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="min-h-screen bg-[#FCFDFF]">
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Services />
            <Tools />
            <WhyWork />
            <SelectedWorks />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
