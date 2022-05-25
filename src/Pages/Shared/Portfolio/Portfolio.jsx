import React from 'react';
import sayanPic from '../../../assets/portfolio/sayan cut.png'

const Portfolio = () => {
    return (
        <div className='mt-10'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-28 justify-center items-center'>
                <div className=''>
                    <h2 className='text-5xl'>Hey there i am</h2>
                    <h1 className='text-7xl my-2 font-bold text-orange-500'>SAYAN PAUL</h1>
                    <p className='text-xl'>And I'm a <span className='font-bold'>Professional Web Devoloper</span></p>
                    <button className='btn btn-warning text-white mt-2'>Download Cv</button>
                </div>
                <div className='w-[50%] mx-auto'>
                    <img className='w-80 rounded-3xl' src={sayanPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;