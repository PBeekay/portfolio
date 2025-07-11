// src/data/projects.ts

export type Project = {
    id: 'enterprise' | 'mobile' | 'cloud';
    title: string;
    description: string;
    longDescription: string;
    role: string;
    duration: string;
    technologies: string[];
    demoUrl?: string;
    codeUrl?: string;
  };
  
  export const projectsData: Project[] = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Scalable microservices architecture for enterprise clients, reducing deployment time by 70%.',
      longDescription: 'Developed scalable microservices architecture for enterprise clients, implementing containerization with Docker and orchestration with Kubernetes. The solution reduced deployment time by 70% and improved system reliability.',
      role: 'Lead Full Stack Developer',
      duration: '8 months',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 'mobile',
      title: 'Mobile Applications',
      description: 'Cross-platform mobile solutions with Flutter, focusing on intuitive user experiences.',
      longDescription: 'Built cross-platform mobile solutions using Flutter, focusing on intuitive user experiences and performance optimization. The app achieved 4.8/5 rating on app stores.',
      role: 'Mobile Developer',
      duration: '6 months',
      technologies: ['Flutter', 'Firebase', 'Dart', 'REST APIs', 'State Management'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 'cloud',
      title: 'Cloud Architecture',
      description: 'DevOps and CI/CD implementations that streamline development workflows.',
      longDescription: 'Implemented comprehensive DevOps and CI/CD pipelines using Jenkins, Docker, and AWS. Streamlined development workflows and improved deployment frequency by 300%.',
      role: 'DevOps Engineer',
      duration: '4 months',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform', 'Ansible'],
      demoUrl: '#',
      codeUrl: '#',
    },
  ];