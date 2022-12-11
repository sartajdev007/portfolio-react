import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import bg from '../assets/White Minimalist Dental Clinic Facebook Cover.png'

const About = () => {
    return (
        <div className='my-10 relative'>
            <img src={bg} alt="" className='w-full h-fit' />
            <div className='absolute top-32 pr-12 md:px-12 lg:px-12'>
                <h1 className='text-5xl font-bold text-emerald-500'>Hello There!!</h1>
                <p className='text-xs pt-4 font-semibold text-fuchsia-600 lg:text-xl italic'>This is Sartaj Kaiser, A front-end web developer</p>
                <p className='hidden w-[700px] md:hidden lg:block text-md leading-loose pt-4 pr-24'>I am a highly professional goal oriented web developer. I aim to make a great career in this field and enrich my knowledge constantly. I have created and developed various projects using MERN stack including 4 full stack websites. <br />
                    I am from Chittagon, Bangladesh. I have recently finished my bachelors in Public Administration from University of Chittagong. I now want to work in a company/organization where I can contribute actively and get the chance learn from my seniors and colleagues.
                </p>
                <div className='flex pt-10 gap-5'>
                    <h3 className='text-sm text-fuchsia-600 font-bold lg:text-xl'>Find me on: </h3>
                    <a href="https://github.com/sartajdev007"><FaGithub className='text-xl text-emerald-500 lg:text-5xl'></FaGithub></a>
                    <a href="https://www.linkedin.com/in/sartaj-kaiser-9277311b6/"><FaLinkedin className='text-xl text-emerald-500 lg:text-5xl'></FaLinkedin></a>
                    <a href="https://www.facebook.com/md.sartaz.92/"><FaFacebookSquare className='text-xl text-emerald-500 lg:text-5xl'></FaFacebookSquare></a>
                </div>
            </div>
        </div>
    );
};

export default About;