import React from 'react';
import img1 from '../assets/html.png'
import img2 from '../assets/css.png'
import img3 from '../assets/js.png'
import img4 from '../assets/react.png'
import img5 from '../assets/node.png'
import img6 from '../assets/tw.png'
import img7 from '../assets/firebase.png'
import img8 from '../assets/mdb.png'
import img9 from '../assets/bootstrap.png'

const Skills = () => {
    return (
        <div className='mt-10' id='skills'>
            <h1 className='text-5xl px-12 font-bold text-emerald-500'>Skills</h1>
            <p className='text-lg px-12 pt-4 font-semibold text-fuchsia-600 italic'>Skills that I am perfecting</p>
            <div className='grid grid-cols-4 gap-8 pt-5 p-10 mt-5 justify-items-center bg-base-200 mx-10 shadow-lg shadow-emerald-200'>
                <img src={img1} alt="" className='w-[100px] h-[105px]' />
                <img src={img2} alt="" className='w-[100px] h-[105px]' />
                <img src={img3} alt="" className='w-[100px] h-[105px]' />
                <img src={img4} alt="" className='w-[150px] h-[105px]' />
                <img src={img5} alt="" className='w-[100px] h-[105px]' />
                <img src={img6} alt="" className='w-[120px] h-[80px]' />
                <img src={img7} alt="" className='w-[100px] h-[105px]' />
                <img src={img8} alt="" className='w-[100px] h-[105px]' />
                <img src={img9} alt="" className='w-[100px] h-[80px]' />
            </div>
        </div>
    );
};

export default Skills;