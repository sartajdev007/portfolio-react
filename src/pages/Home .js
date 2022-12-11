import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import { ContactUs } from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <Skills></Skills>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;