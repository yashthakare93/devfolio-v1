import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Star, GitBranch } from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => {
  // Hooks are correctly placed at the top
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const isFeatured = project && Array.isArray(project.images) && project.images.length > 0;
    if (isFeatured) {
      setMainImage(project.images[0]);
    }
  }, [project]);

  // Early return is after the hooks
  if (!project) {
    return null;
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
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={onBack}
          className="flex items-center gap-2 text-green hover:text-lightest-slate transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-mono">Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* ... Header content remains the same ... */}
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
              <span key={tech} className="px-4 py-2 bg-light-navy border border-slate-600 text-light-slate font-mono text-sm rounded-lg hover:border-green transition-colors duration-300">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* --- NEW IMAGE GALLERY SECTION --- */}
        {isFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            {/* Grid container for the new layout */}
            <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-8">

              {/* Main Image (Right column on desktop) */}
              <div className="lg:col-span-4 lg:order-2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={mainImage}
                    alt={project.title}
                    className="w-full h-auto max-h-[600px] object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
                </div>
              </div>

              {/* Thumbnails (Left column on desktop) */}
              {project.images.length > 1 && (
                <div className="lg:col-span-2 lg:order-1">
                  {/* Container that changes from horizontal scroll on mobile to vertical list on desktop */}
                  <div className="mt-4 flex space-x-4 overflow-x-auto pb-2 lg:mt-0 lg:flex-col lg:space-x-0 lg:space-y-4 lg:overflow-x-visible lg:pb-0">
                    {project.images.map((imgSrc, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 lg:w-full lg:h-28 ${
                          mainImage === imgSrc ? 'border-green' : 'border-transparent'
                        }`}
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
          {/* ... Details content remains the same ... */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-lightest-slate mb-4">Project Overview</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-light-slate leading-relaxed">{project.longDescription || project.description}</p>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-light-navy rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-lightest-slate mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-green" />
                  <div>
                    <p className="text-light-slate text-sm">Timeline</p>
                    <p className="text-lightest-slate font-medium">{project.timeline || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User size={18} className="text-green" />
                  <div>
                    <p className="text-light-slate text-sm">Role</p>
                    <p className="text-lightest-slate font-medium">{project.role || 'Developer'}</p>
                  </div>
                </div>
                {project.github && (
                  <div className="flex items-center gap-3">
                    <GitBranch size={18} className="text-green" />
                    <div>
                      <p className="text-light-slate text-sm">Repository</p>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green hover:text-lightest-slate transition-colors duration-300 font-medium">
                        View on GitHub
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-light-navy rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-lightest-slate mb-4">Tech Stack</h3>
              <div className="space-y-2">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center justify-between py-2 px-3 bg-slate-800/50 rounded-lg">
                    <span className="text-light-slate font-mono text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button onClick={onBack} className="px-8 py-4 bg-transparent border-2 border-green text-green hover:bg-green hover:text-navy transition-all duration-300 rounded-lg font-mono">
            ← Back to All Projects
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;