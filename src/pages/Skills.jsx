import React from "react";

const skills = [
    { name: "HTML", percent: 90, color: "text-orange-500" },
    { name: "CSS", percent: 90, color: "text-blue-600" },
    { name: "JavaScript", percent: 65, color: "text-yellow-500" },
    { name: "React", percent: 70, color: "text-sky-400" },
    { name: "Node.js", percent: 65, color: "text-green-600" },
    { name: "PHP", percent: 75, color: "text-indigo-500" },
    { name: "Laravel", percent: 75, color: "text-red-600" },
    { name: "Express js", percent: 65, color: "text-gray-500" },
]


const SkillCard = ({ name, percent, color }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 mb-4">
                <svg className="w-full h-full rotate-[-90deg]">
                    {/* Background */}
                    <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-700"
                    />
                    {/* Progress */}
                    <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="314"
                        strokeDashoffset={314 - (314 * percent) / 100}
                        className={color}
                        strokeLinecap="round"
                    />
                </svg>

                <span className={`absolute inset-0 flex items-center justify-center font-bold ${color}`}>
                    {percent}%
                </span>
            </div>

            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-gray-400 mt-2">
                Modern & professional experience
            </p>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#061826] text-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-cyan-400">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
