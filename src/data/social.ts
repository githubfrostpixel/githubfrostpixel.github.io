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
    url: 'https://github.com/githubfrostpixel',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/bachngocminhchau',
    icon: 'linkedin',
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    url: 'https://leetcode.com/u/githubfrostpixel/',
    icon: 'leetcode',
  },
];

