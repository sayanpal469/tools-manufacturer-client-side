import React, { useRef } from 'react';
import login from '../../../../assets/Login/login.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../Loading/Loading';
import useToken from '../../../Hooks/useToken';


const Login = () => {
    const emailRef = useRef('')
    const [User] = useAuthState(auth)
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );
    const navigate = useNavigate()
    let location = useLocation();

    let loginError;
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(User || user || gUser)

    if(gLoading || loading) {
        return <Loading/>
    }

    if(gUser || user) {
        navigate(from, { replace: true });
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if(email) {
            await sendPasswordResetEmail(email)
            alert('email sent')
        } else{
            alert('please enter your email')
        }
    }

    if(error || gError || resetError) {
        loginError= <span className='label-text-alt text-red-500'>{error?.message || gError?.message}</span>
    }
    
    return (
        <div className='grid lg:grid-cols-2 px-20 gap-10 items-center'>
            <div className=''>
                <img className='' src={login} alt="" />
            </div>
            <div>
                <form onSubmit={handleSubmit} class="card max-w-lg bg-base-100 shadow-xl h-auto">
                    <div class="card-body">
                        <h2 class="font-bold text-center text-4xl mb-5">Login</h2>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Please enter your email</span>
                            </label>
                            <input ref={emailRef} name='email' required type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {/* {loginError} */}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Please enter your password</span>
                            </label>
                            <input name='password' required type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                                {/* {loginError} */}
                        </div>
                        <div class="card-actions justify-center px-14">
                            <input type='submit' class="btn btn-warning w-full text-white font-semibold" value='Login' />
                        </div>
                        <label class="label px-14">
                                <Link onClick={resetPassword} to='#' href='#' class="text-md label-text-alt">Forgot Password?</Link>
                                <Link to='/signUp' class=" text-md label-text-alt">Create new account</Link>
                        </label>
                        <div className="divider">OR</div>
                        <div className='px-14'>
                            <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline w-full"
                            ><FcGoogle className='text-4xl'
                            ></FcGoogle>
                            <p>Continue with Google</p>
                            </button>
                        </div>
                        <span class="label-text-alt text-md text-red-500 text-center ">{loginError}</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;