"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

// The props are inferred automatically from the library,
// so we don't need to import them directly anymore.
export function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}