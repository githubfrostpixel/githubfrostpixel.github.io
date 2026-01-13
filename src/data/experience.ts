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
      'Developed a high-performance storage solution for traffic metadata analysis on edge devices, achieving a 5× performance improvement over traditional NoSQL storage systems.',
      'Implemented a circular buffer–based recording pipeline for 5MP (2448×2048) encoded video, achieving a 1.5 GB RAM reduction at 15 FPS.',
      'Created an algorithm to analyze traffic data and detect congestion, capable of classifying seven levels of traffic congestion. Successfully implemented the algorithm to efficiently detect traffic jams at Bach Lieu Bridge up to ~95% of times, improving real-time traffic management and response.',
      'Improved license plate recognition (LPR) pipeline efficiency using weighted random sampling which increased plate reading ability by 30-40%',
      'Developed a custom NAL buffer for RTSP streaming, ensuring low-latency and stable video quality under varying network conditions.',
      'Built an asynchronous video pipeline supporting up to 4 FHD RTSP streams, optimizing real-time processing and resource utilization.',
      'Engineered a real-time live view system for an edge AI camera, achieving ~10 ms latency with minimal resource usage (~1% CPU, 50 MB RAM) on ARM Cortex-A53.',
      'Optimized and deployed computer vision models on Novatek SoCs, achieving real-time 30 FPS across the full AI pipeline (vehicle detection → LPR → OCR) while maintaining low resource consumption.',
      'Designed and implemented an IPC library enabling multiple processes to share a single web server, aggregating H.264/H.265 streams via a centralized socket and distributing them over WebSocket to concurrent clients.',
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
