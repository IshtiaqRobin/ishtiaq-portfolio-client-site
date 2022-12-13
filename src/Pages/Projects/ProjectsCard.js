import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ projects }) => {

    const { live_link, img, id } = projects;
    return (
        <div
            className="rounded-md shadow-xl image-full">
            <figure className='flex justify-center items-center '><img className='w-full h-48' src={img} alt="" /></figure>
            <div className="card-actions text-lg font-semibold justify-around mt-2 text-white w-full bg-[#FF1B5C]">
                <div>
                    <a href={live_link} target='_blank' rel="noreferrer">Live Site</a>
                </div>
                <div>
                    <Link to={`/project/${id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;