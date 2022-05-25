import React from 'react';
import sayanPic from '../../../assets/portfolio/sayan cut.png'
import sayanTow from '../../../assets/portfolio/2nd.jpeg'
import html from '../../../assets/portfolio/tools/Expertise/html.png'
import css from '../../../assets/portfolio/tools/Expertise/css.png'
import bootstrap from '../../../assets/portfolio/tools/Expertise/bootstrap.png'
import tailwind from '../../../assets/portfolio/tools/Expertise/tailwind.png'
import Js from '../../../assets/portfolio/tools/Expertise/js.png'
import react from '../../../assets/portfolio/tools/Expertise/react.png'
import es6 from '../../../assets/portfolio/tools/Expertise/es6.png'
import reactBootstrap from '../../../assets/portfolio/tools/Expertise/reactstrap.png'

import node from '../../../assets/portfolio/tools/Familiar/nodejs.abecfc00.png'
import express from '../../../assets/portfolio/tools/Familiar/expressjs.b62fd807.png'
import mongodb from '../../../assets/portfolio/tools/Familiar/mongodb.28ec40a4.png'
import metarial from '../../../assets/portfolio/tools/Familiar/meta.978c1206.png'
import firebase from '../../../assets/portfolio/tools/Familiar/firebase.c24b6b9c.png'
import heroku from '../../../assets/portfolio/tools/Familiar/heroku.png'

import chromedev from '../../../assets/portfolio/tools/tools/choromeDev.5aed3098.png'
import git from '../../../assets/portfolio/tools/tools/git.png'
import npm from '../../../assets/portfolio/tools/tools/npm.0cfd04ae.png'
import vsCode from '../../../assets/portfolio/tools/tools/vs-code.1f5d1f79.png'
import figma from '../../../assets/portfolio/tools/tools/figma.efb492c0.png'

import healthy from '../../../assets/portfolio/projects/Healthy-Piorr.png'
import phonix from '../../../assets/portfolio/projects/Phonix-com.png'
import doctors from '../../../assets/portfolio/projects/doctors-portal.png'




const Portfolio = () => {
    return (
        <div className='mt-10'>
            {/* First section */}
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-28 justify-center items-center gap-10'>
                <div className=''>
                    <h2 className='text-5xl'>Hey there i am</h2>
                    <h1 className='text-7xl my-2 font-bold text-orange-500'>SAYAN PAUL</h1>
                    <p>and I'm a Frontend devoloper who is pasionate about making error-free websites with 100% client satisfaction. I have a passion for learning and sharing my knowlage with others as publicly as possible. I love solve rea-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintain excellent communication. I enjoy working with ReactJs, Javascript.</p>
                    <button className='btn btn-warning text-white mt-5'>Download Cv</button>
                </div>
                <div className='w-[50%] mx-auto'>
                    <img className='w-80 rounded-3xl' src={sayanPic} alt="" />
                </div>
            </div>

            {/* Second section */}
            <div className='mt-28'>
                <h1 className='text-5xl text-center'>About me</h1>
                <p className='mt-5 text-center'>Become a Full-stack web developer. <br /> That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20 px-28 justify-center items-center gap-10'>

                    <div className='w-[50%] mx-auto'>
                        <img className='w-80 rounded-3xl' src={sayanTow} alt="" />
                    </div>

                    <div>
                        <h1 className='text-4xl mb-3 text-orange-500'>I'm Sayan Paul</h1>
                        <p>I live in India. My hometown is West Bengal. I am a student of BA and my subject is Bengali. But now I am learning MERN STACK Devolopment form <span className='font-bold'>Programming Hero</span>. I have a passion for learning and sharing my knowlage with others as publicly as possible. I love solve rea-world problems. I am strategic, goal-oriented, and always work with an end goal in mind.My goal is to be Full Stack web developer,which i believe is going to be a great career choice for the future alongwith i want to be a web developer tutor,work on a system that has X scale or complexity.</p>
                    </div>
                </div>
            </div>

            {/* Skills area */}
            <div className='my-28 bg-black text-white py-10'>
                <h1 className='text-5xl text-center'>My skills for Web Development</h1>
                <div className='text-xl text-orange-500 mt-10  font-semibold text-center'>EXPERTISE</div>
                <div className='grid  lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 mt-10 px-28 justify-center items-center gap-5'>
                    <img className='w-14' src={html} alt="" />
                    <img className='w-14' src={css} alt="" />
                    <img className='w-14' src={bootstrap} alt="" />
                    <img className='w-14' src={tailwind} alt="" />
                    <img className='w-14' src={Js} alt="" />
                    <img className='w-14' src={es6} alt="" />
                    <img className='w-14' src={react} alt="" />
                    <img className='w-14' src={reactBootstrap} alt="" />
                </div>

                <div className='text-xl text-orange-500 mt-16 font-semibold text-center'>FAMILIAR</div>
                <div className='grid  lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 mt-10 px-28 justify-center items-center gap-5'>
                    <img className='w-14' src={node} alt="" />
                    <img className='w-14' src={express} alt="" />
                    <img className='w-14' src={mongodb} alt="" />
                    <img className='w-14' src={metarial} alt="" />
                    <img className='w-14' src={firebase} alt="" />
                    <img className='w-14' src={heroku} alt="" />

                </div>

                <div className='text-xl text-orange-500 mt-16 font-semibold text-center'>TOOLS</div>
                <div className='grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mt-10 px-28 justify-center items-center gap-5'>
                    <img className='w-14' src={chromedev} alt="" />
                    <img className='w-14' src={vsCode} alt="" />
                    <img className='w-14' src={git} alt="" />
                    <img className='w-14' src={npm} alt="" />
                    <img className='w-14' src={figma} alt="" />
                </div>
            </div>

            {/* Project */}
            <div className='mb-10 px-14'>
                <h1 className='text-center text-5xl'>Some Projects</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 mt-10'>
                    <div class="card max-w-lg bg-base-100 shadow-xl ">
                        <div className='h-60 overflow-auto'>
                        <figure><img className='w-full h-full' src={healthy} alt="Shoes" /></figure>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Healthy Piorr</h2>
                            <p>1- It is a warehouse management system website.</p>
                            <p>2- Users can log in to this website using Google or an email password.</p>
                            <p>3- Users can add product and delete product and users can add product quantity and delever</p>
                            <p><span className='text-xl font-bold'>Technology </span>HTML,CSS,Bootstrap,JavaScript,ReactJs,React Router, NodeJs, MongoDB,Firebase.</p>
                            <div class="card-actions justify-center mt-5">
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/grocery-warehouse-management-client-side'>Client Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/grocery-warehouse-management-server-side'>Server Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://grocery-warehouse-7968d.web.app/'>Live Side</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card max-w-lg bg-base-100 shadow-xl ">
                        <div className='h-60 overflow-auto'>
                        <figure><img className='w-full h-full' src={phonix} alt="Shoes" /></figure>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Phonix.com</h2>
                            <p>1- It is a independent wild life photography services website</p>
                            <p>2- Users and Admin can sign up and log in to this website using google</p>
                            <p><span className='text-xl font-bold'>Technology </span>HTML, CSS, Bootstrap, JavaScript, ReactJs, React Router, Firebase.</p>
                            <div class="card-actions justify-center mt-5">
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/independent-service-provider'>Github</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://tourmaline-malasada-6308d2.netlify.app/'>Live Side</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card max-w-lg bg-base-100 shadow-xl ">
                        <div className='h-60 overflow-auto'>
                        <figure><img className='w-full h-full' src={doctors} alt="Shoes" /></figure>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Doctors Portal</h2>
                            <p>1- It is a doctor’s portal website. Patients get appointments by the date.</p>
                            <p>2- Patients and doctors can log in to this website using Google or an email password.</p>
                            <p>3- A Patient shows all the service and booking an appointment.</p>
                            <p><span className='text-xl font-bold'>Technology </span>HTML,CSS,Tailwind Css,JavaScript,ReactJs, React Router, NodeJs, MongoDB,Firebase.</p>
                            <div class="card-actions justify-center mt-5">
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/doctors-portal-client-side'>Client Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/doctors-portal-server-side-'>Server Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://doctors-portal-8801a.web.app/'>Live Side Side</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;