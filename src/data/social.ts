export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'leetcode';
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    url: 'https://leetcode.com/yourusername',
    icon: 'leetcode',
  },
];

