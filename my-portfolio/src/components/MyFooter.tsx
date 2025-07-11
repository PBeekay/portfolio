// src/components/Footer.tsx

import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {currentYear} Berkay Pekersoy. All Rights Reserved.
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        Crafted with intention, inspired by simplicity.
      </p>
    </footer>
  );
};