export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'attas',
    title: 'Automatic Teaching Tasks Assignment Scheduler',
    description: 'A software solution to streamline teacher task assignment in educational settings. Automates task allocation based on teacher skills, workload, and availability with multiple constraints and objectives.',
    image: '/images/projects/attas.png',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'CSS', 'Docker'],
    githubUrl: 'https://github.com/chaubnmhe153019/SEP490_G14',
  },
  {
    id: 'project-2',
    title: 'Project Title',
    description: 'Project description goes here. Replace this with your actual project details.',
    image: '/images/projects/placeholder.png',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: 'project-3',
    title: 'Project Title',
    description: 'Project description goes here. Replace this with your actual project details.',
    image: '/images/projects/placeholder.png',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project',
  },
];

