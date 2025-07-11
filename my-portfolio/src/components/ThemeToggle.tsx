// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Using react-icons for the sun/moon

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Don't render anything on the server to avoid hydration mismatch
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-indigo-500" />}
    </button>
  );
};