// src/components/Contact.tsx

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// Reusable component for each contact link
const ContactLink = ({ href, icon, ariaLabel }: { href: string; icon: React.ReactElement; ariaLabel: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="group relative h-16 w-16 flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:border-indigo-500 hover:text-indigo-500 hover:-translate-y-1"
  >
    <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
  </a>
);


export const Contact = () => {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800" id="contact">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">
          Contact
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          If you're seeking a craftsman who values intention over speed and 
          mindfulness over complexity, let's begin a conversation.
        </p>
        
        <div className="flex justify-center items-center gap-8">
          <ContactLink 
            href="mailto:pekersoy.berkay@gmail.com"
            icon={<FaEnvelope />}
            ariaLabel="Email Berkay Pekersoy"
          />
          <ContactLink 
            href="https://www.linkedin.com/in/berkay-pekersoy"
            icon={<FaLinkedin />}
            ariaLabel="LinkedIn Profile"
          />
          <ContactLink 
            href="https://github.com/bpeekay"
            icon={<FaGithub />}
            ariaLabel="GitHub Profile"
          />
        </div>
      </div>
    </section>
  );
};