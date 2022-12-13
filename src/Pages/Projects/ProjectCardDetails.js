import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectCardDetails = () => {
    const projectDetails = useLoaderData();

    const { img1, img2, img3, img4, details } = projectDetails[0]

    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-8 mt-16'>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img3} alt="Shoes" /></figure>
                </div>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img4} alt="Shoes" /></figure>
                </div>
            </div>
            <div>
                <div className="chat chat-start my-8">
                    <div className="chat-bubble bg-[#FF0080] text-white">{details[0]}</div>
                    <div className="chat-bubble bg-white text-black mt-4">{details[1]}</div>
                    <div className="chat-bubble bg-[#FF0080] text-white mt-4">{details[2]}</div>
                    <div className="chat-bubble bg-white text-black mt-4">{details[3]}</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardDetails;