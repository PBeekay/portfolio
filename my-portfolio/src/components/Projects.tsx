// src/components/Projects.tsx
"use client"; // This component uses state, so it must be a client component

import React, { useState } from 'react';
import { projectsData, Project } from '@/data/projects';
import { FaServer, FaMobileAlt, FaCloud, FaTimes } from 'react-icons/fa';

// A map to associate project IDs with icons
const icons: { [key: string]: React.ReactElement } = {
  enterprise: <FaServer />,
  mobile: <FaMobileAlt />,
  cloud: <FaCloud />,
};

// Reusable Project Card Component
const ProjectCard = ({ project, onShowDetails }: { project: Project; onShowDetails: () => void }) => (
  <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="text-5xl text-gray-400 dark:text-gray-500 transition-all duration-300 group-hover:text-indigo-500 group-hover:scale-110">
        {icons[project.id]}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <button onClick={onShowDetails} className="w-full text-sm font-semibold py-2 px-4 rounded-lg border-2 border-indigo-500 text-indigo-500 transition-all duration-300 hover:bg-indigo-500 hover:text-white">
        View Details
      </button>
    </div>
  </div>
);

// Main Projects Component
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleShowDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-light text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} onShowDetails={() => handleShowDetails(project)} />
          ))}
        </div>
      </div>

      {/* Modal Logic */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full m-4 p-8 border border-gray-200 dark:border-gray-700">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
              <FaTimes />
            </button>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>{selectedProject.longDescription}</p>
              <p><strong>Role:</strong> {selectedProject.role}</p>
              <p><strong>Duration:</strong> {selectedProject.duration}</p>
              <div className="flex flex-wrap gap-2">
                <strong>Technologies:</strong>
                {selectedProject.technologies.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a href={selectedProject.demoUrl} className="flex-1 text-center py-2 px-4 rounded-lg bg-indigo-600 text-white font-semibold transition-colors hover:bg-indigo-700">View Demo</a>
              <a href={selectedProject.codeUrl} className="flex-1 text-center py-2 px-4 rounded-lg border-2 border-indigo-500 text-indigo-500 font-semibold transition-colors hover:bg-indigo-500 hover:text-white">View Code</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};