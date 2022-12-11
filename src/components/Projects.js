import React from 'react';
import img1 from '../assets/phoneD.png'
import img2 from '../assets/dw.png'
import img3 from '../assets/tg.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='my-10' id='projects'>
            <h1 className='text-5xl px-12 font-bold text-emerald-500'>Projects</h1>
            <p className='text-lg px-12 pt-4 font-semibold text-fuchsia-600 italic'>Have a look at my recent projects</p>
            <div className="grid grid-cols-1 gap-2 justify-items-center pt-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-lg shadow-teal-300 pt-5">
                    <figure><img src={img1} className='h-[200px]' alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Phone Down <div className="badge bg-lime-500">MERN</div></h2>
                        <p>A Full Stack second hand phone reselling website</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to='/projectone'>View Details</Link></button>
                            <a href="https://phone-down-shop.web.app/" target='_blank' rel='noreferrer noopener'><FaExternalLinkAlt className='text-2xl mt-3 mx-2'></FaExternalLinkAlt></a>
                            <a href="https://github.com/sartajdev007/phone-down-client" title='Client Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mt-2'></FaGithub></a>
                            <a href="https://github.com/sartajdev007/phone-down-server" title='Server Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mt-2'></FaGithub></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg shadow-teal-300 pt-5">
                    <figure><img src={img2} className='h-[200px]' alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dental Whiz <div className="badge bg-lime-500">MERN</div></h2>
                        <p>A Full Stack dental service website</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to='/projecttwo'>View Details</Link></button>
                            <a href="https://dental-whiz-website.web.app/" target='_blank' rel='noreferrer noopener'><FaExternalLinkAlt className='text-2xl mt-3 mx-2'></FaExternalLinkAlt></a>
                            <a href="https://github.com/sartajdev007/dental-whiz-client" title='Client Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mt-2'></FaGithub></a>
                            <a href="https://github.com/sartajdev007/dental-whiz-server" title='Server Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mt-2'></FaGithub></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg shadow-teal-300 pt-5">
                    <figure><img src={img3} className='h-[200px]' alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Techno Guy <div className="badge bg-lime-500">MERN</div></h2>
                        <p>A Full Stack course learning website</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to='/projectthree'>View Details</Link></button>
                            <a href="https://learning-website-react-72397.web.app/" target='_blank' rel='noreferrer noopener'><FaExternalLinkAlt className='text-2xl mt-3 mx-2'></FaExternalLinkAlt></a>
                            <a href="https://github.com/sartajdev007/technoGuy-learning-client" title='Client Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mt-2'></FaGithub></a>
                            <a href="https://github.com/sartajdev007/technoGuy-learning-server" title='Server Side' target='_blank' rel='noreferrer noopener'><FaGithub className='text-3xl mt-2'></FaGithub></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;