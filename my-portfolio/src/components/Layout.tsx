// src/components/Layout.tsx

import React from 'react';
// Use the absolute path alias for robustness
import { Footer } from '@/components/MyFooter'; 
import { ThemeToggle } from '@/components/ThemeToggle';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      // Apply your custom dark mode background and text colors
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-dark-text px-4 sm:px-8">
        <ThemeToggle />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  };