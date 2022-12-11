import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ProjectTwo = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div>
                <Carousel
                    responsive={responsive}
                    className='bg-green-200 p-36 grid'
                >
                    <div>
                        <img src="https://i.ibb.co/hY3wtMy/screencapture-dental-whiz-website-web-app-2022-12-11-23-05-57.png" alt="" className='w-[200px] h-[300px]' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/1nFZtYy/screencapture-dental-whiz-website-web-app-services-2022-12-11-23-06-29.png" alt="" className='w-[200px] h-[300px]' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/tB1gTDz/screencapture-dental-whiz-website-web-app-services-636aa7bfafb3ac780f5d02e5-2022-12-11-23-07-15.png" alt="" className='w-[200px] h-[300px]' />
                    </div>
                </Carousel>
            </div>
            <div className='my-10 text-center'>
                <h1 className='text-5xl px-12 font-bold text-emerald-500'>Dental Whiz</h1>
                <p className='text-lg px-12 pt-4 font-semibold text-fuchsia-600 italic'>A Dental Service Review Website</p>
                <div className='text-start px-12'>
                    <h3 className='text-3xl font-semibold'>Features:</h3>
                    <ul class="list-disc pt-10 px-10 text-xl">
                        <li>A full stack project</li>
                        <li>Patients can review service of the doctor</li>
                        <li>There are a variety of services by the doctor</li>
                        <li>After logging in service can be added</li>
                        <li>Patients can add, edit, and remove reviews</li>
                        <li>Patients can book appointments</li>
                    </ul>
                </div>
                <div className='text-start px-12 mt-5'>
                    <h3 className='text-3xl font-semibold'>Technlogies and Tools:</h3>
                    <ul class="list-disc pt-10 px-10 text-xl">
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>DaisyUI</li>
                        <li>Node JS</li>
                        <li>Express JS</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className='text-start px-12 mt-5 flex'>
                    <h3 className='text-xl font-semibold'>Links:</h3>
                    <a href="https://dental-whiz-website.web.app/" target='_blank' rel='noreferrer noopener'><FaExternalLinkAlt className='text-2xl mx-3 mt-1'></FaExternalLinkAlt></a>
                    <a href="https://github.com/sartajdev007/dental-whiz-client" title='Client Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mx-2'></FaGithub></a>
                    <a href="https://github.com/sartajdev007/dental-whiz-server" title='Server Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mx-2'></FaGithub></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectTwo;