import React from 'react';
import img from '../../assets/banner_img/banner-img.png'

const About = () => {
    return (
        <div id='about' className='my-16'>
            <h2 className='text-lg font-bold text-center text-[#FF0080] poppies_fonts'>Who Am I?</h2>
            <h2 className='jost_fonts mb-4 text-[#D0D1D1] text-center text-6xl'>About Me</h2>
            <div className='max-w-screen-xl mb-12'>
                <div className="hero">
                    <div className="hero-content flex-col p-0 lg:py-16 lg:flex-row-reverse">
                        <img src={img} className="rounded-lg lg:w-1/2" alt='' />
                        <div>
                            <h1 className="text-3xl jost_fonts font-bold text-white">I'm Isthiaq Robin, a Creative Web Designer and Web Developer</h1>
                            <p className="pt-6 font-bold poppies_fonts text-[#D0D1D1]">I am a Front-End Developer based in the Bangladesh and I have been building noteworthy Web Developer and websites for years, which comply with the latest developer trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and idea faster.</p>
                            <div className="divider h-0.5 bg-[#D0D1D1]"></div>
                            <div className='flex justify-between jost_fonts mt-8'>
                                <div>
                                    <p><span className='text-white'>Name:</span> Ishtiaq Robin</p>
                                </div>
                                <div>
                                    <p><span className='text-white'>Email:</span> robin.pass36@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex justify-between jost_fonts mb-12'>
                                <div>
                                    <p><span className='text-white'>Age:</span> 21 Years</p>
                                </div>
                                <div>
                                    <p><span className='text-white'>From:</span> Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <button className='border-2 border-[#FF0080] hover:bg-[#FF0080] hover:border-white h-12 bg-transparent outline-none focus:border-white w-2/5 text-white font-semibold'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;