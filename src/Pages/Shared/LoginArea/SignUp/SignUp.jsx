import React from 'react';
import login from '../../../../assets/Login/login.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className='grid lg:grid-cols-2 px-20 gap-10 items-center'>
            <div className=''>
                <img className='' src={login} alt="" />
            </div>
            <div>
                <div class="card max-w-lg bg-base-100 shadow-xl h-auto">
                    <div class="card-body">
                        <h2 class="font-bold text-center text-4xl mb-5">Sign Up</h2>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">What is your name?</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {/* <span class="label-text-alt">Alt label</span> */}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {/* <span class="label-text-alt">Alt label</span> */}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <Link to='/login' class="label-text-alt">Already have an account?</Link>
                            </label>
                        </div>
                        <div class="card-actions justify-center px-14">
                            <input type='submit' class="btn btn-warning w-full text-white font-semibold" value='Sign Up'/>
                        </div>
                        <div className="divider">OR</div>
                        <div className='px-14'>
                        <button
                                className="btn btn-outline w-full"
                                ><FcGoogle className='text-4xl'
                                ></FcGoogle>
                                <p>Continue with Google</p>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;