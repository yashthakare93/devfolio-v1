// src/data/constants.js

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contact', href: '#contact' },
];


export const skills = [
  'HTML5 CSS3 JavaScript (ES6+)',
  'Java',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Spring Boot',
  'python'
];

export const featuredProjects = [
  {
    title: 'PrepGenius',
    description: 'A full-stack MERN career preparation platform that leverages the Gemini API for AI-powered resume analysis. Features include secure JWT authentication, optimized AI response caching that reduced API calls by 40%, and a responsive frontend with dynamic PDF export capabilities.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    external: 'https://prep-genius-ai.vercel.app/',
    images: ['/projects/1/p1.png','/projects/1/p2.png','/projects/1/p3.png','/projects/1/p4.png','/projects/1/p5.png','/projects/1/p6.png'],
    role: 'Full Stack Developer',
    timeline: '4 Weeks',
    features: [
      'AI-powered resume analysis and optimization',
      'Secure user authentication with JWT',
      'Optimized AI response caching to reduce costs',
      'Dynamic PDF export for resumes and reports'
    ],
  },
  {
    title: 'FlexLingo: Sign Language Glove',
    description: 'I developed an IoT smart glove that translates American Sign Language into text and speech in real-time. Using a Random Forest model trained with TensorFlow, the device achieves 95% accuracy with under 200ms latency. The project features a full-stack solution with a React web app for live gesture visualization, offering a seamless communication tool.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Arduino', 'React', 'Tailwind CSS'],
    github: 'https://github.com/yashthakare93/flex-lingo',
    external: 'https://flex-lingo.vercel.app/', 
    images: ['/projects/2/f1.jpg','/projects/2/f2.png','/projects/2/f3.png','/projects/2/f4.png'],
    role: 'Project Lead & IoT Developer',
    timeline: '8 Weeks (Academic Project)',
    features: [
      'Real-time ASL-to-speech/text translation',
      'High accuracy (95%) machine learning model',
      'Low-latency processing (<200ms)',
      'Live gesture visualization on a web dashboard'
    ],
  }
];

export const otherProjects = [
  {
    title: 'Algorithm Visualizer',
    description: 'An interactive educational tool to visualize sorting (Bubble, Quick, Merge) and searching (Linear, Binary) algorithms. Features dynamic speed control, user-defined array inputs, and step-by-step execution. Reduced animation rendering time by 30% through optimized DOM updates.',
    technologies: ['React', 'TailwindCSS', 'framer-motion', 'JavaScript'],
    github: 'https://github.com/yashthakare93/Visualizer',
    external: 'https://algorithm-visualizer-hub.vercel.app/'
  },
  {
    title: 'URL Shortener & Analytics Tracker',
    description: 'A full-stack URL shortening service with real-time analytics tracking. Shortened URLs by up to 75% and improved page load times by 30% using EJS for server-side rendering. Secured user accounts with JWT authentication and session management.',
    technologies: ['Node.js','Express.js','EJS','MongoDB','JWT','Selenium WebDriver'],
    github: 'https://github.com/yashthakare93/URL-SHORTNER',
    external: 'https://url-shortner-zq7h.onrender.com/'
  }
];