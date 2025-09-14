// src/components/ProjectDetail.js

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { featuredProjects, otherProjects } from '../data/constants'; 
import { ArrowLeft, ExternalLink, Github, Star } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams(); 
  const navigate = useNavigate(); 

  const project = [...featuredProjects, ...otherProjects].find(p => p.slug === slug);

  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const isFeatured = project && Array.isArray(project.images) && project.images.length > 0;
    if (isFeatured) {
      setMainImage(project.images[0]);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-lightest-slate mb-4">Project Not Found</h1>
        <p className="text-lg text-light-slate mb-8">Sorry, we couldn't find the project you were looking for.</p>
        <button
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-green hover:text-lightest-slate transition-colors duration-300 font-mono"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
      </div>
    );
  }

  const isFeatured = Array.isArray(project.images) && project.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-navy py-24 px-6 lg:px-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-green hover:text-lightest-slate transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-mono">Back</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              {isFeatured && <p className="text-green font-mono text-sm mb-3">Featured Project</p>}
              <h1 className="text-4xl lg:text-5xl font-bold text-lightest-slate mb-4">{project.title}</h1>
              <p className="text-xl text-light-slate leading-relaxed max-w-3xl">{project.description}</p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-light-slate text-light-slate hover:border-green hover:text-green transition-all duration-300 rounded-lg">
                  <Github size={18} /> View Code
                </a>
              )}
              {project.external && (
                <a href={project.external} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-green text-navy hover:bg-green/90 transition-all duration-300 rounded-lg font-semibold">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-light-navy border border-slate-600 text-light-slate font-mono text-sm rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery Section */}
        {isFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-8">
              <div className="lg:col-span-4 lg:order-2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={mainImage}
                    alt={project.title}
                    className="w-full h-auto max-h-[600px] object-cover transition-all duration-300"
                  />
                </div>
              </div>
              {project.images.length > 1 && (
                <div className="lg:col-span-2 lg:order-1">
                  <div className="mt-4 flex space-x-4 overflow-x-auto pb-2 lg:mt-0 lg:flex-col lg:space-x-0 lg:space-y-4">
                    {project.images.map((imgSrc, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 lg:w-full lg:h-28 ${mainImage === imgSrc ? 'border-green' : 'border-slate-700 hover:border-slate-500'}`}
                        onClick={() => setMainImage(imgSrc)}
                      >
                        <img
                          src={imgSrc}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-lightest-slate mb-4">Project Overview</h2>
              <div className="prose prose-lg prose-invert max-w-none text-light-slate leading-relaxed">
                <p>{project.longDescription || project.description}</p>
              </div>
            </div>
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-lightest-slate mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star size={16} className="text-green mt-1 flex-shrink-0" />
                      <span className="text-light-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;