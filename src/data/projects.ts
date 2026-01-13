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
  },
  {
    id: 'crowded-trajectory-clustering',
    title: 'Utility Solution: Crowded Trajectory Clustering',
    description: 'A utility solution for clustering crowded trajectories. Patent number: 93595 A 1-2022-07845.',
    image: '/images/projects/crowdedtrajectoryclustering.png',
    technologies: [],
    githubUrl: 'https://ipvietnam.gov.vn/documents/20182/1435339/CB420A1.pdf/73d4da4c-dd42-4940-bcc1-2c082412075a',
  },
  {
    id: 'buried-city',
    title: 'Buried City',
    description: 'Get lost in a remote corner, look for the living using an old radio, stare at something blankly while listening to music, try your best to survive—you may have never imagined such scenes but it seems as if they occur every day. In the game, you will be in danger at any time and you need to be courageous and smart enough to survive!',
    image: '/images/projects/buriedcity.png',
    technologies: [],
    githubUrl: 'https://github.com/githubfrostpixel/buried-city-web',
    demoUrl: 'https://githubfrostpixel.github.io/buriedcity/',
  },
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
  {
    id: 'make-in-vietnam-2025',
    title: 'Silver Award – Make in Vietnam Digital Technology Products',
    competition: 'Make in Vietnam Digital Technology Products Awards',
    year: '2025',
    description: 'Recognized for outstanding contribution to digital technology products in Vietnam.',
    link: 'https://vnexpress.net/sau-san-pham-doat-giai-vang-make-in-viet-nam-2025-5000167-p2.html',
    placement: 'second',
  },
];
