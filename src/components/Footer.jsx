import React from 'react';
import { Star, GitFork,Heart } from 'lucide-react'; 

const Footer = () => {
  const repoUrl = "https://github.com/yashthakare93/devfolio-v1"; 

  return (
    <footer className="py-12 px-4 text-center text-light-slate text-sm">
       <div className="mb-4 flex items-center justify-center">
        <span>Designed & built by Yash Thakare</span>
        <Heart size={14} className="ml-1.5 fill-red-500 text-red-500" />
      </div>
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-green transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono">
            <Star size={16} />
            <span>Star</span>
          </div>
          <div className="flex items-center gap-1 font-mono">
            <GitFork size={16} />
            <span>Fork</span>
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;