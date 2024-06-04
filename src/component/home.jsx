import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import {NavLink} from 'react-router-dom';
import logo from './../../public/logo/logo.png'
import { SiOpenlayers } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import heroBackground from '../Assets/hero.mp4'
import courseFeatureBackground from '../Assets/courseFeatureBackground.jpg'
import SementicRightImage from '../Assets/SementicRightImage.png'
import blogThumbnail from '../Assets/blogThumbnail.jpeg'
import courseThumbain from '../Assets/courseThumbnail.jpg'

const courseFeature = [
    'https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Home = () => {
    return (
        <>
            <LandingPage>
                <div>
                    <header className='mt-5 absolute w-full'>
                        <nav className='flex justify-between px-5 w-full'>
                            <div className='w-32' >
                                <img src={logo} alt="Logo" width='100%' />
                            </div>
                            {/* Center nav bar */}
                            <div className='hidden'>
                                <div className='flex'>
                                    <div>
                                        <NavLink>Home</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Courses</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Blogs</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>About</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Contact</NavLink>
                                    </div>
                                </div>
                                {/* login logout */}
                                <div>
                                    <button>Get Started</button>
                                </div>
                            </div>
                            <div>
                                <IoMenu size={'3rem'} color='white'/>                            
                            </div>
                        </nav>
                    </header>    
                    {/* hero part */}
                    <div>
                        <div className='h-screen' >
                            <video src={heroBackground} autoPlay loop muted className='h-full w-full object-cover'></video>
                            <div className='absolute top-0 text-white h-full flex flex-col justify-center w-4/5 px-5'>
                                <h1 className='font-semibold text-9xl leading-tight'>Master the Stock Market with Our Expert-Led Courses</h1>
                                <p className='text-5xl font-normal mt-10 leading-snug'>Learn the secrets of stock market investing from industry professionals.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* feature Course Page */}
                <div className='feature-course-page my-10'>
                    <h1 className='text-8xl text-center my-10'>Our Course Feature</h1>
                    {/* container */}
                    <div className='feature-container p-8 flex justify-around flex-wrap'> 
                        {/* card */}
                        <div className='course-feature w-72'>
                            {/* image */}
                            <div className='h-96 rounded-lg border-4 border-black'></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-72'>
                            {/* image */}
                            <div className='h-96 rounded-lg border-4 border-black'></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-72'>
                            {/* image */}
                            <div className='h-96 rounded-lg border-4 border-black'></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sementic */}
                <div className='grid grid-cols-2 gap-10 px-5 my-10'> 
                    {/* left */}
                    <div className='flex flex-col'>
                        <div className='self-center'>
                            <h2 className='text-7xl	mb-10 '>Schematic</h2>
                            <button className='text-xl border-2 rounded-3xl border-black py-2 px-7'>Brand Identity</button>    
                        </div>
                        {/* content */}
                        <div className='gap-y-14 mt-14 max-w-md self-end'>
                            <div className='flex gap-11 mb-12'> 
                                {/* numberr */}
                                <div className='text-7xl'>01</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl font-semibold'>Background</h3>
                                    <p className='text-2xl leading-10 mt-3'>Give a brief overview of your project here. 
                                        You may talk about the client brand and the main project challenge.</p>
                                </div>
                            </div>
                            <div className='flex gap-11'> 
                                {/* numberr */}
                                <div className='text-7xl'>02</div>
                                {/* paragraph */}
                                <div>
                                    <h3 className='text-4xl font-semibold'>Solution</h3>
                                    <p className='text-2xl leading-10 mt-3'>Talk about your idea here. Expound a bit on how you solved the challenge and how your work helped your..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div>
                        <div className='p-10'>
                            <img src={SementicRightImage} alt="" width="100%" />
                        </div>
                    </div>
                </div>
                {/* Courses */}
                <div className='my-10 py-10'>
                    <h1 className='text-8xl text-center my-10'>Course</h1>
                    {/* container */}
                    <div className='p-8 flex justify-around flex-wrap'> 
                        {/* card */}
                        <div className='border-2 border-black'>
                            {/* image */}
                            <div className='h-52 w-80'>
                                <img src={courseThumbain} alt="" className='h-full object-cover	'/>
                            </div>
                            {/* content */}
                            <div className=''>
                                <div className='max-w-80 py-2 px-3'>
                                    <button className='bg-[#2495D6] text-white py-1 px-3 rounded-md'>Begginer</button>
                                    <p className='text-[#2495D6]'>Programming Language</p>
                                    <p className='font-bold text-xl font-bold		'>Angular - The Complete Guide (2020 Edition)</p>
                                    <p className='text-base	 font-semibold '>From Setup to Deployment, this course it all! You’ll Learn all.</p>
                                </div>

                                <div className='flex bg-gray-900 text-white justify-between px-4 py-1'>
                                    <span>Instructor</span>
                                    <span>Name</span>
                                </div>
                                <div className='p-4 flex justify-between font-semibold py-1 px-2'>
                                    <div>
                                        <p className='mb-2'>Price Value</p>
                                        <i>Star</i>
                                    </div>
                                    <div className='text-center'>
                                        <p className='mb-2'>599 Rs.</p>
                                        <button className='text-white bg-red-600 py-1 px-3 rounded-xl '>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-3xl'>
                        <button className='inline-flex	 gap-5 text-white bg-red-600 py-2 px-6 rounded-3xl'><SiOpenlayers />View All</button>
                    </div>
                </div>
                {/* Subscription */}
                <div className='text-center'>
                    <h1 className='text-6xl max-w-2xl'>Choice your best <span className='font-semibold'>SUBSCRIPTION</span>Plan</h1>
                    <div className='p-8 flex justify-around flex-wrap'> 
                        <div className='border-2 border-black rounded-3xl	'>
                        {/* card */}
                            <div className='p-6'>
                                <h2 className='text-5xl py-3 px-12 bg-red-600 rounded-full font-semibold'>Monthly</h2>
                                <div className='flex flex-col subcription-card'>
                                    <div className='font-semibold my-7'>
                                        <p className='text-5xl'>25 Rs</p>
                                        <p className='text-2xl'>Per Month</p>
                                    </div>
                                    <div className='self-center mb-5'>
                                        <ul className='text-2xl list-disc text-start'>
                                            <li>Data Analyst</li>
                                            <li>Up to 5 Member</li>
                                            <li>Get 5 GB Storage</li>
                                            <li>Monthly Report</li>
                                        </ul>
                                    </div>
                                    <button className='text-2xl py-2.5 bg-red-600 rounded-full font-semibold'>Join</button>
                                </div>
                            </div>                            
                        </div>
                        <div className='border-2 border-black rounded-3xl m-auto'>
                        {/* card */}
                            <div className='p-6'>
                                <h2 className='text-5xl py-3 px-12 bg-red-600 rounded-full font-semibold'>Monthly</h2>
                                <div className='flex flex-col subcription-card'>
                                    <div className='font-semibold my-7'>
                                        <p className='text-5xl'>25 Rs</p>
                                        <p className='text-2xl'>Per Month</p>
                                    </div>
                                    <div className='self-center mb-5'>
                                        <ul className='text-2xl list-disc text-start'>
                                            <li>Data Analyst</li>
                                            <li>Up to 5 Member</li>
                                            <li>Get 5 GB Storage</li>
                                            <li>Monthly Report</li>
                                        </ul>
                                    </div>
                                    <button className='text-2xl py-2.5 bg-red-600 rounded-full font-semibold'>Join</button>
                                </div>
                            </div>                            
                        </div>
                        <div className='border-2 border-black rounded-3xl	'>
                        {/* card */}
                            <div className='p-6'>
                                <h2 className='text-5xl py-3 px-12 bg-red-600 rounded-full font-semibold'>Monthly</h2>
                                <div className='flex flex-col subcription-card'>
                                    <div className='font-semibold my-7'>
                                        <p className='text-5xl'>25 Rs</p>
                                        <p className='text-2xl'>Per Month</p>
                                    </div>
                                    <div className='self-center mb-5'>
                                        <ul className='text-2xl list-disc text-start'>
                                            <li>Data Analyst</li>
                                            <li>Up to 5 Member</li>
                                            <li>Get 5 GB Storage</li>
                                            <li>Monthly Report</li>
                                        </ul>
                                    </div>
                                    <button className='text-2xl py-2.5 bg-red-600 rounded-full font-semibold'>Join</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                {/* Latest Blogs */}
                <div className='flex justify-center flex-col latest-blog'>
                    <h1 className='text-8xl text-center'>Latest Blogs</h1>
                    <div className='max-w-7xl m-auto'>
                        {/* images */}
                        <div className=' flex  gap-20 my-20 flex-wrap'>
                            <div className='w-96'>
                                <img src={courseThumbain} alt="" className='w-full h-full'/>
                            </div>
                            {/* content */}
                            <div className='max-w-2xl'> 	
                                <h2 className='text-5xl	mb-7 leading-10'>Start your journey now, level up your skill</h2>
                                <p className='text-lg leading-10'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius</p>
                            </div>
                        </div>
                        <div className=' flex m-auto gap-20 my-20 flex-wrap-reverse'>
                            {/* content */}
                            <div className='max-w-2xl'> 	
                                <h2 className='text-5xl	mb-7 leading-10'>Start your journey now, level up your skill</h2>
                                <p className='text-lg leading-10'>Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate. Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna, eget mattis turpis aliquam a. In sagittis bibendum consequat. Quisque porta volutpat ligula sit amet varius</p>
                            </div>
                            <div className='w-96'>
                                <img src={courseThumbain} alt="" className='w-full h-full'/>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-3xl'>
                        <button className='inline-flex	 gap-5 text-white bg-red-600 py-2 px-6 rounded-3xl'><SiOpenlayers />View All</button>
                    </div>
                </div>
                    {/* Call to Actions */}
                <div className='px-32'>
                    <div className='mb-20'>
                        <h1 className='text-7xl	mb-10'>Call to Action</h1>
                        <p className='text-4xl	'>Join Now and Start Your Journey to Financial Mastery!</p>
                    </div>
                    <div>
                        <h1 className='text-7xl	mb-10'>What we do</h1>
                        <p className='text-4xl	'>Elevate your brand and make your mark in history.</p>
                    </div>
                    <div className='mt-20' >
                        <div className='flex justify-around mb-10'>
                            <button className='text-xl py-6 px-32 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-32 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-32 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                        </div>
                        <div className='flex justify-around'>
                            <button className='text-xl py-6 px-32 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-32 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                            <button className='text-xl py-6 px-32 rounded-3xl border-2 border-black flex items-center gap-5	'>Trading Guide <FaArrowRightLong /></button>
                        </div>
                    </div>
                    

                </div>
            </LandingPage>            
        </>
    )       
}

export default Home;
const LandingPage = styled.div`
.feature-course-page {
    background-image: url(${courseFeatureBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
 .feature-container > div > div:nth-child(1){
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
 }   
 .feature-container > div:nth-child(1) > div:nth-child(1){
    background-image: url(${courseFeature[0]});
 }   
 .feature-container > div:nth-child(2) > div:nth-child(1){
    background-image: url(${courseFeature[1]});
 }   
 .feature-container > div:nth-child(3) > div:nth-child(1) {
    background-image: url(${courseFeature[2]});
 }   
 .subcription-card li{
    margin-bottom: 16px;
 }
 .latest-blog h2{
    line-height: 3.5rem;
 }

`