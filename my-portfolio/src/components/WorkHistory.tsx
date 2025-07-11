// src/components/WorkHistory.tsx
"use client"; // Required for hover effects, which are interactive

import React from 'react';

// Data for the timeline items
const historyData = [
  {
    date: '2021 - 2022',
    title: 'Startup Inc.',
    role: 'Junior Developer',
    description: 'Assisted in the development of core product features and participated in code reviews.',
  },
  {
    date: '2022 - 2024',
    title: 'Previous Company',
    role: 'Backend Developer',
    description: 'Engineered RESTful APIs for mobile applications and managed database systems.',
  },
  {
    date: '2024 - Present',
    title: 'Veriyum',
    role: 'Full Stack Developer',
    description: 'Developing and maintaining web applications using React, Node.js, and modern cloud infrastructure.',
  },
];

// A reusable component for each point on the timeline
const TimelineItem = ({ item }: { item: typeof historyData[0] }) => (
  <div className="group relative flex flex-col items-center">
    {/* Marker */}
    <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 transition-all duration-300 group-hover:bg-indigo-500 group-hover:scale-110"></div>
    {/* Date */}
    <p className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">{item.date}</p>
    
    {/* Pop-up Details Card - appears on hover */}
    <div className="absolute bottom-10 mb-2 w-64 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
      <h4 className="text-md font-semibold text-indigo-500 dark:text-indigo-400 mb-2">{item.role}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
      {/* Arrow pointing down */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-b border-r border-gray-200 dark:border-gray-700 transform rotate-45"></div>
    </div>
  </div>
);

// This "export" keyword is what makes the component available to other files.
export const WorkHistory = () => {
  return (
    <section className="py-24" id="work-history">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-light text-center text-gray-900 dark:text-white mb-20">
          Work History
        </h2>
        
        <div className="relative">
          {/* The horizontal line */}
          <div className="absolute top-2.5 left-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          {/* Flex container for timeline items */}
          <div className="relative flex justify-between">
            {historyData.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};