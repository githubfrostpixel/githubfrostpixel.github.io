export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  competition: string;
  year: string;
  description: string;
  link?: string;
  demoUrl?: string;
  placement: 'first' | 'second' | 'third' | 'honorable';
}

export const projects: Project[] = [
  {
    id: 'attas',
    title: 'Automatic Teaching Tasks Assignment Scheduler',
    description: 'A software solution to streamline teacher task assignment in educational settings. Automates task allocation based on teacher skills, workload, and availability with multiple constraints and objectives.',
    image: '/images/projects/attas.png',
    technologies: ['OR-Tools', 'Python', 'C#'],
    githubUrl: 'https://github.com/chaubnmhe153019/SEP490_G14',
  }
];

export const awards: Award[] = [
  {
    id: 'vcam-2024',
    title: 'VCAM - Smart Traffic Violation Camera',
    competition: 'Vietnam Traffic Safety Innovation Competition',
    year: '2024',
    description: 'High-speed smart camera device for detecting license plates and traffic violations. Capable of capturing plates at speeds up to 250km/h with 4G/5G connectivity for easy deployment.',
    link: 'https://sangkienatgt.dantri.com.vn/cac-tac-gia-xuat-sac-cua-cuoc-thi-sang-kien-an-toan-giao-thong-viet-nam-2024',
    demoUrl: 'https://youtu.be/zszUS0VMKwA',
    placement: 'first',
  },
];
