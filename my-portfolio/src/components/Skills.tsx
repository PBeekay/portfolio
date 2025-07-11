"use client"; // This component uses hooks, so it must be a client component

import React from 'react';
import { useInView } from 'react-intersection-observer';

// Data for our skills - easy to update later
const skillsData = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'PostgreSQL', level: 80 },
  ],
  devops: [
    { name: 'AWS', level: 80 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 70 },
  ],
};

// A reusable component for each skill bar
const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div>
      <span className="text-sm text-gray-600 dark:text-gray-300">{name}</span>
      <div className="mt-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-2 rounded-full bg-indigo-500 transition-all duration-1000"
          style={{ width: `${level}%` }} // The width is controlled by the 'level' prop
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  // useInView hook detects when the component is visible on screen
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <section 
      ref={ref} // Attach the ref to this section
      className="py-24" 
      id="skills"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-light text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="p-8 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800 dark:text-white">Frontend</h3>
            <div className="space-y-4">
              {skillsData.frontend.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  // Conditionally set the level to 0 until the component is in view
                  level={inView ? skill.level : 0} 
                />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="p-8 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800 dark:text-white">Backend</h3>
            <div className="space-y-4">
              {skillsData.backend.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={inView ? skill.level : 0} 
                />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="p-8 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-800 dark:text-white">DevOps</h3>
            <div className="space-y-4">
              {skillsData.devops.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={inView ? skill.level : 0} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};