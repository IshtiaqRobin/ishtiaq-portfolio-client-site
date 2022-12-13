import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {

    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => {
                setMyProjects(data)
            });
    }, [])

    return (
        <div id='projects' className='max-w-screen-xl mx-auto my-16'>
            <p className='text-lg font-bold text-center text-[#FF0080] poppies_fonts'>Showcasing some of my best work</p>
            <h1 className='jost_fonts mb-16 text-[#D0D1D1] text-center text-6xl'>Recent Work</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                {
                    myProjects?.map(projects => <ProjectsCard
                        key={projects.id}
                        projects={projects}
                    ></ProjectsCard>)
                }
            </div>
        </div>
    );
};

export default Projects;