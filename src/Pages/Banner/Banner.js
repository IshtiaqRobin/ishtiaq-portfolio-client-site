import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css';
import pdf from '../../assets/my_resume/Minimalist Clean Signature CV Resume_11.pdf';

const Banner = () => {

    return (
        <div>
            <div className='mt-24'>
                <p className="text-lg font-bold text-white poppies_fonts">WELCOME TO MY WORLD</p>
                <h1 className="font-Syne text-5xl text-white font-semibold mt-4 jost_fonts">HI, I'M ISHTIAQ ROBIN</h1>

                <div className='mt-2'>
                    <span className='font-extrabold text-3xl text-white custom_font'>A</span> <span className='text-[#ff0080] font-extrabold text-3xl custom_font'>

                        <Typewriter
                            words={[
                                'Font End Developer',
                                'React.Js Developer',
                                'Mern Stack Developer',
                                'Web Developer',
                                'Web Designer'
                            ]}
                            loop={100}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <p className="text-white text-lg mt-4 poppies_fonts">
                    From Bangladesh, Dhaka. I have rich experience in web Development, also I am good at
                    <br />
                    Web Design. I love to talk with you about our unique. I have a strong passion for learning &
                    <br />
                    implementing web technologies and standards.</p>
            </div>
            <div>
                <a className="mt-16 btn border border-white rounded-none text-white hover:bg-[#ff0080] hover:border-white" href={pdf} download="Portfolio">Download Resume</a>
            </div>
        </div>
    );
};

export default Banner;