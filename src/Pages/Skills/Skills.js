import React from 'react';

const mySkills = [
    {
        "name": "HTML5",
        "value": 95,
    },
    {
        "name": "CSS3",
        "value": 88,
    },
    {
        "name": "Javascript",
        "value": 55,
    },
    {
        "name": "Bootstrap",
        "value": 80,
    },
    {
        "name": "Tailwind",
        "value": 90,
    },
    {
        "name": "React Js",
        "value": 75,
    },
    {
        "name": "Node Js",
        "value": 25,
    },
    {
        "name": "Express Js",
        "value": 20,
    },
    {
        "name": "MongoDB",
        "value": 85,
    },
]

const Skills = () => {
    return (
        <div>
            <h1 className='jost_fonts mb-16 text-[#D0D1D1] text-center text-6xl'>Skills</h1>
            <div id='skills' className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-24'>
                {
                    mySkills?.map((skills, i) => <div
                        key={i}
                        className="card w-full bg-[#1E293B] hover:bg-[#3b5175] text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className="radial-progress text-[#FF0080] hover:text-white" style={{
                                "--value": `${skills.value}`
                            }}>{skills.value}%</div>
                            <div className="card-actions justify-end">
                                <h1 className='font-bold text-white'>{skills.name}</h1>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;