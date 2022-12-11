import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ProjectThree = () => {
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
                    className='bg-green-200 p-24 grid'
                >
                    <div>
                        <img src="https://i.ibb.co/pXVrNwZ/screencapture-learning-website-react-72397-web-app-2022-12-11-22-58-52.png" alt="" className='w-[300px] h-[300px]' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/mScQT2D/screencapture-learning-website-react-72397-web-app-courses-01-2022-12-11-22-59-31.png" alt="" className='w-[300px] h-[300px]' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/W6h31bQ/screencapture-learning-website-react-72397-web-app-register-2022-12-11-23-02-04.png" alt="" className='w-[300px] h-[300px]' />
                    </div>
                </Carousel>
            </div>
            <div className='my-10 text-center'>
                <h1 className='text-5xl px-12 font-bold text-emerald-500'>Techno GUY</h1>
                <p className='text-lg px-12 pt-4 font-semibold text-fuchsia-600 italic'>A Online Teaching Platform Website</p>
                <div className='text-start px-12'>
                    <h3 className='text-3xl font-semibold'>Features:</h3>
                    <ul class="list-disc pt-10 px-10 text-xl">
                        <li>A full stack project</li>
                        <li>A course learning website</li>
                        <li>9 courses for skill development</li>
                        <li>Checkout page for buying the course after login</li>
                        <li>Course details can be downloaded by pdf</li>
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
                    <a href="https://learning-website-react-72397.web.app/" target='_blank' rel='noreferrer noopener'><FaExternalLinkAlt className='text-2xl mx-3 mt-1'></FaExternalLinkAlt></a>
                    <a href="https://github.com/sartajdev007/technoGuy-learning-client" title='Client Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mx-2'></FaGithub></a>
                    <a href="https://github.com/sartajdev007/technoGuy-learning-server" title='Server Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mx-2'></FaGithub></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;