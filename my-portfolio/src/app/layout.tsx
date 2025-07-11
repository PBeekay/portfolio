// src/app/layout.tsx
import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // Import the provider

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500'], // Load the weights you need
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Berkay Pekersoy - Digital Craftsman",
  description: "Crafting mindful digital experiences with intention and simplicity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={notoSansJP.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Let's default to your signature dark theme
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}