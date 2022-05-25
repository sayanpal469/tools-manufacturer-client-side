import React from 'react';
import signUp from '../../../../assets/Login/signUp.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../Loading/Loading';
import useToken from '../../../Hooks/useToken';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [User] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate()
      const location = useLocation()
      const from = location.state?.from?.pathname || '/' ;
      let signInError;

      const [token] = useToken(User || user || gUser)

      if(loading || gLoading) {
          return <Loading/>
      }

      if(user || gUser) {
        navigate(from, {replace: true})
      }

      if(error || gError || updateError) {
        signInError= <small className='text-red-500 my-2 text-center'>{error?.message || gError?.message || updateError.message}</small>
        }

        const onSubmit = async (data) => {
            //console.log(data)
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data.name });
            
        };

    return (
        <div className='grid lg:grid-cols-2 px-20 gap-10 items-center py-20'>
            <div className=''>
                <img className='' src={signUp} alt="" />
            </div>

            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                            {signInError}
                    <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    <label class="label">
                        <Link to='#' href='#' class="text-md label-text-alt">Already hava an account?</Link>
                        <Link to='/login' class=" text-md label-text-alt">Please Login</Link>
                    </label>
                    </form>
                <div className="divider">OR</div>
                <button
                onClick={() => signInWithGoogle()}
                 className="btn btn-outline"
                 ><FcGoogle className='text-4xl'
                 ></FcGoogle>
                 <p>Continue with Google</p>
                 </button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;