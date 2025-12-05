export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 'viettel',
    title: 'Software Engineer',
    company: 'Viettel High Tech',
    location: 'Vietnam',
    type: 'Full-time, On-site',
    period: 'Aug 2023 - Present',
    description: 'Working on edge AI solutions, real-time video processing, and high-performance systems for traffic monitoring and analysis.',
    achievements: [
      'Developed a high-performance storage solution for traffic metadata analysis on edge devices, achieving 5x performance improvement over traditional NoSQL storage systems',
      'Created traffic congestion detection algorithm capable of classifying 7 levels of congestion, achieving 95% accuracy at Bach Lieu Bridge for real-time traffic management',
      'Improved License Plate reading pipeline efficiency using weighted random algorithm, increasing plate reading ability by 30-40%',
      'Developed custom NAL buffer for RTSP streaming, ensuring stable stream quality and low-latency performance under varying network conditions',
      'Built asynchronous video pipeline handling up to 4 FHD RTSP streams for AI Hub, optimizing real-time video processing and resource utilization',
      'Engineered real-time live view system for edge AI camera with ~10ms latency and minimal resource usage (1% CPU, 50MB RAM on ARM Cortex-A53)',
      'Optimized and deployed computer vision models on Novatek SoCs, achieving real-time 30fps processing for full AI pipeline (vehicle detection, LPR, OCR)',
    ],
    skills: ['C++', 'Java', 'Python', 'FFmpeg', 'Computer Vision', 'Edge AI', 'RTSP', 'Git'],
  },
];

export const technicalSkills = {
  languages: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  frameworks: ['FFmpeg', 'OpenCV'],
  tools: ['Git', 'Docker', 'Linux', 'ARM Architecture', 'Novatek SoCs'],
  domains: ['Edge AI', 'Computer Vision', 'Real-time Systems', 'Video Processing', 'Traffic Analysis'],
};
