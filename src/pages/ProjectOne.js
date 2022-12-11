import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ProjectOne = () => {
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
                    className='bg-green-200 p-28 grid'
                >
                    <div>
                        <img src="https://i.ibb.co/1QcJ2nj/screencapture-phone-down-shop-web-app-2022-12-11-21-52-44.png" alt="" className='w-[250px] h-[300px]' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/7tGTVtS/screencapture-phone-down-shop-web-app-categories-63820951b9533ee1de397975-2022-12-11-21-55-19.png" alt="" className='w-[250px] h-[300px]' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/rtGkjr8/screencapture-phone-down-shop-web-app-categories-63820951b9533ee1de397977-2022-12-11-22-18-47.png" alt="" className='w-[250px] h-[300px]' />
                    </div>
                </Carousel>
            </div>
            <div className='my-10 text-center'>
                <h1 className='text-5xl px-12 font-bold text-emerald-500'>Phone Down</h1>
                <p className='text-lg px-12 pt-4 font-semibold text-fuchsia-600 italic'>A second hand phone reselling website</p>
                <div className='text-start px-12'>
                    <h3 className='text-3xl font-semibold'>Features:</h3>
                    <ul class="list-disc pt-10 px-10 text-xl">
                        <li>A full stack project</li>
                        <li>Separate dashboards for Admins, Buyers,and Sellers</li>
                        <li>Sellers can add, remove and advertise products in the homepage</li>
                        <li>Buyers can book,report and pay for orders by Stripe</li>
                        <li>Sellers can be verified by Admin and admin can delete reported products</li>
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
                    <a href="https://phone-down-shop.web.app/" target='_blank' title='Live Site' rel='noreferrer noopener'><FaExternalLinkAlt className='text-2xl mx-3 mt-1'></FaExternalLinkAlt></a>
                    <a href="https://github.com/sartajdev007/phone-down-client" title='Client Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mx-2'></FaGithub></a>
                    <a href="https://github.com/sartajdev007/phone-down-server" title='Server Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mx-2'></FaGithub></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectOne;