import React from 'react';
import img from '../assets/myImg.png'
import TypeWriterEffect from 'react-typewriter-effect';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl text-emerald-500 font-bold">Portfolio</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/' className='text-rose-500 font-semibold'>Home</a></li>
                        <li>
                            <a href="/" className='text-rose-500 font-semibold'>Projects</a>
                        </li>
                        <li><a href='/' className='text-rose-500 font-semibold'>Skills</a></li>
                    </ul>
                </div>
            </div>
            {/* banner section */}
            <div className="hero bg-base-200" style={{ background: 'url(https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?size=626&ext=jpg&ga=GA1.2.973079058.1669301769)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <img src={img} className="rounded-lg shadow-2xl " alt='' />
                    <div className='lg:mr-96'>
                        <h1 className='text-7xl font-bold text-green-400'>
                            <h1 className='text-4xl text-rose-500'>Hello!! This is </h1>
                            <TypeWriterEffect
                                startDelay={100}
                                cursorColor="red"
                                text="SARTAJ KAISER"
                                typeSpeed={100}
                            />
                        </h1>
                        <p className="py-6 text-3xl text-fuchsia-500 font-bold">Front End Web Developer</p>
                        <button className="btn btn-primary"><a href="https://drive.google.com/file/d/15-Esmr_KHhbNOTHg4KF5xKRlGzTjz3Uk/view?usp=share_link" target='_blank' rel='noreferrer noopener'>See Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;