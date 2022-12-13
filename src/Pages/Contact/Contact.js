import React from 'react';

const Contact = () => {
    return (
        <div className='h-[550px]'>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <h2 className='poppies_fonts font-bold text-[#FF0080]'>Feel free to contact me anytime?</h2>
                    <h2 className='jost_fonts text-6xl font-bold text-[#D0D1D1] mt-2'>Get in Touch</h2>
                </div>
            </div>
            <div id='contact' className='flex justify-center items-center mt-6 mb-96'>
                <div className='w-96 p-7'>
                    <form
                        action="https://formspree.io/f/xnqrelon"
                        method="POST"
                    >
                        <div className="text-white w-full mb-4">
                            <input name='name' required type="text" placeholder="Name" className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full" />
                        </div>
                        <div className="text-white w-full mb-4">
                            <input name='email' required type="email" placeholder="Email" className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full" />
                        </div>
                        <div className="text-white w-full mb-4">
                            <input name='subject' required type="text" placeholder="Subject" className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full" />
                        </div>
                        <div className="form-control w-full">
                            <textarea name='message' required className="border-b-2 border-[#FF0080] h-12 bg-transparent outline-none focus:border-white w-full" placeholder="Message"></textarea>
                            <label className="label">
                            </label>
                        </div>
                        <div>
                            <button className='border-2 border-[#FF0080] hover:bg-[#FF0080] hover:border-white h-12 bg-transparent outline-none focus:border-white w-full text-white font-semibold'>Contact Me</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;