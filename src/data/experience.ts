export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: '[Your Role]',
    company: '[Company Name]',
    period: '2023 - Present',
    description: 'Description of your role and responsibilities. Replace this with your actual experience.',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    id: 'exp-2',
    title: '[Your Role]',
    company: '[Company Name]',
    period: '2021 - 2023',
    description: 'Description of your role and responsibilities. Replace this with your actual experience.',
    skills: ['JavaScript', 'Python', 'SQL', 'Git'],
  },
  {
    id: 'exp-3',
    title: '[Your Role]',
    company: '[Company Name]',
    period: '2019 - 2021',
    description: 'Description of your role and responsibilities. Replace this with your actual experience.',
    skills: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
  },
];

