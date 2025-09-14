// src/data/constants.js

// --- IMAGE IMPORTS ---
import prepGenius1 from '../assets/images/projects/1/p1.png';
import prepGenius2 from '../assets/images/projects/1/p2.png';
import prepGenius3 from '../assets/images/projects/1/p3.png';
import prepGenius4 from '../assets/images/projects/1/p4.png';
import prepGenius5 from '../assets/images/projects/1/p5.png';
import prepGenius6 from '../assets/images/projects/1/p6.png';
import flexLingo1 from '../assets/images/projects/2/f1.jpg';
import flexLingo2 from '../assets/images/projects/2/f2.png';
import flexLingo3 from '../assets/images/projects/2/f3.png';
import flexLingo4 from '../assets/images/projects/2/f4.png';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Blogs', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  'HTML5 CSS3 JavaScript (ES6+)', 'Java', 'React.js', 'Node.js',
  'Express.js', 'MongoDB', 'Spring Boot', 'python'
];

export const featuredProjects = [
  {
    slug: 'prep-genius', // <-- FIXED: Added slug
    title: 'PrepGenius',
    description: 'A full-stack MERN career preparation platform that leverages the Gemini API for AI-powered resume analysis. Features include secure JWT authentication, optimized AI response caching that reduced API calls by 40%, and a responsive frontend with dynamic PDF export capabilities.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    external: 'https://prep-genius-ai.vercel.app/',
    images: [prepGenius1, prepGenius2, prepGenius3, prepGenius4, prepGenius5, prepGenius6],
    features: [ 'AI-powered resume analysis...', 'Secure user authentication...', 'Optimized AI response caching...', 'Dynamic PDF export...' ],
  },
  {
    slug: 'flex-lingo', // <-- FIXED: Added slug
    title: 'FlexLingo: Sign Language Glove',
    description: 'I developed an IoT smart glove that translates American Sign Language into text and speech in real-time. Using a Random Forest model trained with TensorFlow, the device achieves 95% accuracy with under 200ms latency. The project features a full-stack solution with a React web app for live gesture visualization, offering a seamless communication tool.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Arduino', 'React', 'Tailwind CSS'],
    github: 'https://github.com/yashthakare93/flex-lingo',
    external: 'https://flex-lingo.vercel.app/', 
    images: [flexLingo1, flexLingo2, flexLingo3, flexLingo4],
    features: [ 'Real-time ASL-to-speech/text translation', 'High accuracy (95%) machine learning model', 'Low-latency processing (<200ms)', 'Live gesture visualization...' ],
  }
];

export const otherProjects = [
  {
    slug: 'algorithm-visualizer', // <-- FIXED: Added slug
    title: 'Algorithm Visualizer',
    description: 'An interactive educational tool to visualize sorting and searching algorithms...',
    technologies: ['React', 'TailwindCSS', 'framer-motion', 'JavaScript'],
    github: 'https://github.com/yashthakare93/Visualizer',
    external: 'https://algorithm-visualizer-hub.vercel.app/'
  },
  {
    slug: 'url-shortener', // <-- FIXED: Added slug
    title: 'URL Shortener & Analytics Tracker',
    description: 'A full-stack URL shortening service with real-time analytics tracking...',
    technologies: ['Node.js','Express.js','EJS','MongoDB','JWT','Selenium WebDriver'],
    github: 'https://github.com/yashthakare93/URL-SHORTNER',
    external: 'https://url-shortner-zq7h.onrender.com/'
  }
];