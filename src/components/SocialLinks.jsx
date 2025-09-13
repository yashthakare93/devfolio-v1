import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="hidden lg:block fixed left-12 bottom-0 z-50">
      <div className="flex flex-col items-center h-screen justify-end ">
        <div className="flex flex-col space-y-5 items-center">
          <a
            href="https://github.com/yashthakare93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-thakare01/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/yash.thakare_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://prep-genius-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
          >
            <Dribbble size={20} />
          </a>
        </div>
         <div className="w-px h-24 bg-lightest-slate mt-6 mx-auto"></div>
      </div>
    </div>
  );
};

export default SocialLinks;