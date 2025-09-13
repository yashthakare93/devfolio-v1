import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, ArrowUpRight, Eye } from 'lucide-react';
import { featuredProjects, otherProjects } from '../data/constants'; // Make sure path is correct
import ProjectDetail from './ProjectDetail'; 

const ProjectImage = ({ imageSrc, title }) => {
  return (
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-full object-cover rounded-lg"
    />
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowDetail(true);
  };

  const handleBackToProjects = () => {
    setShowDetail(false);
    setSelectedProject(null);
  };

  if (showDetail && selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="work"
      className="py-24 px-6 lg:px-32 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-16">
        <span className="text-green font-mono text-xl">02.</span>
        <h2 className="text-3xl font-semibold text-lightest-slate">Some Things I've Built</h2>
        <div className="hidden sm:block h-px w-48 bg-lightest-navy"></div>
      </div>

      <div className="space-y-24">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          // --- FIX APPLIED HERE ---
          // Extract the first image from the array to use as the preview.
          const mainImage = Array.isArray(project.images) ? project.images[0] : project.images;
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Desktop Layout */}
              <div className="hidden lg:block relative">
                <div className="grid grid-cols-12 gap-4 items-center min-h-[400px]">
                  <div className={`col-span-7 row-start-1 ${isEven ? 'col-start-1' : 'col-start-6'}`}>
                    <div className="block relative w-full h-[350px] group cursor-pointer" onClick={() => handleProjectClick(project)}>
                      <div className="absolute inset-0 bg-green/30 rounded-lg z-10 transition-all duration-300 group-hover:bg-transparent"></div>
                      {/* Use the single mainImage URL */}
                      <ProjectImage imageSrc={mainImage} title={project.title} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                        <button className="px-6 py-3 bg-green text-navy font-semibold rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                          <Eye size={18} />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={`col-span-6 row-start-1 z-20 flex flex-col justify-center ${isEven ? 'col-start-7 items-end text-right' : 'col-start-1 items-start text-left'}`}>
                    <p className="mb-2 text-green font-mono text-sm">Featured Project</p>
                    <h3 className="text-lightest-slate text-3xl font-semibold mb-5">
                      <button onClick={() => handleProjectClick(project)} className="hover:text-green transition-colors duration-300 text-left">
                        {project.title}
                      </button>
                    </h3>
                    <div className="bg-light-navy p-6 rounded shadow-2xl mb-6 relative z-30">
                      <p className="text-light-slate text-lg leading-relaxed">{project.description}</p>
                    </div>
                    <ul className={`flex flex-wrap gap-4 mb-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      {project.technologies.map((tech) => (
                        <li key={tech} className="text-light-slate font-mono text-sm">{tech}</li>
                      ))}
                    </ul>
                    <div className={`flex gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                          <Github size={22} />
                        </a>
                      )}
                      {project.external && (
                        <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="bg-light-navy rounded-lg overflow-hidden shadow-xl">
                  <div className="relative h-[200px] sm:h-[250px] overflow-hidden group" onClick={() => handleProjectClick(project)}>
                    {/* Use the single mainImage URL here as well */}
                    <img src={mainImage} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-green/20 group-hover:bg-green/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="px-4 py-2 bg-green text-navy font-semibold rounded-lg flex items-center gap-2 text-sm">
                        <Eye size={16} />
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-green font-mono text-sm">Featured Project</p>
                    <h3 className="text-lightest-slate text-xl font-semibold mb-4">
                      <button onClick={() => handleProjectClick(project)} className="hover:text-green transition-colors duration-300 text-left">
                        {project.title}
                      </button>
                    </h3>
                    <p className="text-light-slate mb-4 leading-relaxed">{project.description}</p>
                    <ul className="flex flex-wrap gap-3 mb-4">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="text-light-slate font-mono text-sm">{tech}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                          <Github size={20} />
                        </a>
                      )}
                      {project.external && (
                        <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Other Projects Section */}
      <div className="mt-32">
        <div className="text-center mb-12">
          <h3 className="text-lightest-slate text-3xl font-semibold mb-4">Other Notable Projects</h3>
          <p className="text-light-slate text-lg max-w-2xl mx-auto">A collection of projects that showcase different aspects of my development journey</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-light-navy to-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-green/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green/10 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-green/10 rounded-lg group-hover:bg-green/20 transition-colors duration-300">
                    <Folder className="text-green" size={28} />
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 text-light-slate hover:text-green hover:bg-green/10 rounded-lg transition-all duration-300">
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 text-light-slate hover:text-green hover:bg-green/10 rounded-lg transition-all duration-300">
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lightest-slate text-xl font-bold mb-4 group-hover:text-green transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-light-slate text-base leading-relaxed mb-6 line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/50 text-light-slate font-mono text-xs rounded-full border border-slate-600/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;