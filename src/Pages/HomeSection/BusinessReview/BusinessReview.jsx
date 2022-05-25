import React from 'react';
import CountUp from 'react-countup';
import { AiOutlineFlag } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BsPeople } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';

const BusinessReview = () => {

    return (
        <div className='mt-32'>
            <h1 className='text-center text-5xl text-orange-400'>MILLIONS BUSINESS TRUST US</h1>
            <h2 className='text-center text-xl mt-5'>TRY TO UNDERSTAND USERS EXPECTATION</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 bg-slate-100 px-12 text-center items-center py-28 gap-5'>
            <div class="card max-w-lg">
                <figure><AiOutlineFlag className='text-8xl text-orange-500'></AiOutlineFlag></figure>
                    <div class="card-body text-center">
                        <div class="card-actions justify-center">
                        <CountUp className='text-4xl' start={0} end={67} />
                        </div>
                        <p className='text-xl mt-2 text-orange-500'>Countries</p>
                    </div>
                </div>

                <div class="card max-w-lg">
                <figure><HiOutlineDesktopComputer className='text-8xl text-orange-500'></HiOutlineDesktopComputer></figure>
                    <div class="card-body text-center">
                        <div class="card-actions justify-center">
                        <CountUp className='text-4xl' start={0} end={520} />
                        </div>
                        <p className='text-xl mt-2 text-orange-500'>Complete Project</p>
                    </div>
                </div>

                <div class="card max-w-lg">
                <figure><BsPeople className='text-8xl text-orange-500'></BsPeople></figure>
                    <div class="card-body text-center">
                        <div class="card-actions justify-center">
                        <CountUp className='text-4xl' start={0} end={275} />
                        </div>
                        <p className='text-xl mt-2 text-orange-500'>Happy Clients</p>
                    </div>
                </div>

                <div class="card max-w-lg">
                <figure><FiThumbsUp className='text-8xl text-orange-400'></FiThumbsUp></figure>
                    <div class="card-body text-center">
                        <div class="card-actions justify-center">
                        <CountUp className='text-4xl' start={0} end={523} />
                        </div>
                        <p className='text-xl mt-2 text-orange-500'>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessReview;