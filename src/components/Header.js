import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl text-emerald-500 font-bold">Portfolio</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='' className='text-fuchsia-500 font-semibold'>Home</Link></li>
                        <li>
                            <Link to="#projects" className='text-fuchsia-500 font-semibold' smooth>Projects</Link>
                        </li>
                        <li><Link to='#skills' className='text-fuchsia-500 font-semibold' smooth>Skills</Link></li>
                        <li><Link to='#about' className='text-fuchsia-500 font-semibold' smooth>About</Link></li>
                        <li><Link to='#contact' className='text-fuchsia-500 font-semibold' smooth>Contact</Link></li>
                        <li><Link to='/blogs' className='text-fuchsia-500 font-semibold'>Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;