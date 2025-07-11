// src/components/About.tsx

import React from 'react';

// A reusable component for the philosophy cards
const PhilosophyCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="text-center p-8 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1">
    <div className="text-4xl text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
  </div>
);

export const About = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-light text-center text-gray-900 dark:text-white mb-12">
          About
        </h2>
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            In the tradition of Japanese craftsmanship, I approach digital creation with reverence for the process. 
            Every project is an opportunity to practice intentional design, where simplicity serves purpose and 
            every element has meaning.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I'm not crafting digital experiences, you'll find me exploring the intersection of technology 
            and mindfulness, reading about design philosophy, or simply enjoying the quiet moments that inspire 
            the best ideas.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhilosophyCard 
            icon="間" 
            title="Ma (間)" 
            description="Embracing negative space as an active element in design" 
          />
          <PhilosophyCard 
            icon="簡" 
            title="Kanso (簡素)" 
            description="Simplicity that reveals the essence of functionality" 
          />
          <PhilosophyCard 
            icon="寂" 
            title="Wabi-Sabi (侘寂)" 
            description="Finding beauty in imperfection and transience" 
          />
        </div>
      </div>
    </section>
  );
};