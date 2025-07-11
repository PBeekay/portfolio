import Image from "next/image";
import { Layout } from "@/components/Layout"; // Import the Layout component
import { About } from "@/components/About";   // Import the About component
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { WorkHistory } from "@/components/WorkHistory";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    // 1. Use the Layout component as the main wrapper
    <Layout>
      {/* 2. Place your Hero Section inside the Layout */}
      <section className="text-center max-w-2xl mx-auto py-24 px-4">
        {/* Profile Photo */}
        <div className="mb-8">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D03AQFWpheoASSTPQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681724832119?e=1755734400&v=beta&t=HtkypdkfrIFQQ557qmZde29ldJ1ZwmQqgGxpSHCtKZo"
            alt="Headshot of Berkay Pekersoy"
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-4">
          Berkay Pekersoy
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-6">
          Digital Craftsman
        </p>

        {/* Hero Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          Crafting mindful digital experiences with intention and simplicity. 
          Each line of code is written with purpose, each design choice made with care.
        </p>

        {/* Hero Status */}
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          Currently crafting at Veriyum
        </div>
      </section>

      {/* 3. Add the About component right after the Hero section */}
      <About />
      
      <Skills />

      <Projects />

      <WorkHistory />

      <Contact />

    </Layout>
  );
}