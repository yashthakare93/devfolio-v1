import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Folder, ArrowUpRight, Eye } from 'lucide-react';
import { featuredProjects, otherProjects } from '../data/constants';

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
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.slug) {
      navigate(`/project/${project.slug}`);
    } else {
      console.error("Project is missing a 'slug' property:", project);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
          const mainImage = project.images && project.images[0];
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative"
            >
              {/* Desktop Layout */}
              <div className="hidden lg:block relative">
                <div className="grid grid-cols-12 gap-4 items-center min-h-[400px]">
                  <div className={`col-span-7 row-start-1 ${isEven ? 'col-start-1' : 'col-start-6'}`}>
                    <div className="block relative w-full h-[350px] group cursor-pointer" onClick={() => handleProjectClick(project)}>
                      <div className="absolute inset-0 bg-green/30 rounded-lg z-10 transition-all duration-300 group-hover:bg-transparent"></div>
                      {mainImage && <ProjectImage imageSrc={mainImage} title={project.title} />}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                        <button className="px-6 py-3 bg-green text-navy font-semibold rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                          <Eye size={18} />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={`col-span-6 row-start-1 z-20 flex flex-col justify-center ${isEven ? 'col-start-7 items-end text-right' : 'col-start-1 items-start text-left'}`}>
                    <h3 className="text-lightest-slate text-3xl font-semibold mb-5">
                      <button onClick={() => handleProjectClick(project)} className="hover:text-green transition-colors duration-300 text-left">
                        {project.title}
                      </button>
                    </h3>
                    <div className="bg-light-navy p-6 rounded shadow-2xl mb-6 relative z-30">

                      <p className="text-light-slate text-lg leading-relaxed line-clamp-4">{project.description}</p>
                    </div>
                    <ul className={`flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-slate mb-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        {project.technologies?.map((technologies) => (
                            <li key={technologies}>{technologies}</li>
                        ))}
                    </ul>
                    <div className={`flex items-center gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                                <Github size={24} />
                            </a>
                        )}
                        {project.external && (
                            <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                                <ArrowUpRight size={24} />
                            </a>
                        )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="bg-light-navy rounded-lg overflow-hidden shadow-xl" onClick={() => handleProjectClick(project)}>
                  <div className="relative h-[200px] sm:h-[250px] overflow-hidden group">
                    {mainImage && <img src={mainImage} alt={project.title} className="w-full h-full object-cover" />}
                    <div className="absolute inset-0 bg-green/20"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lightest-slate text-xl font-semibold">{project.title}</h3>
                    <p className="text-light-slate mt-3 mb-5 text-md leading-relaxed line-clamp-4">{project.description}</p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-light-slate mb-5">
                        {project.technologies?.map((technologies) => (
                          <li key={technologies}>{technologies}</li>
                        ))}
                    </ul>
                     <div className="flex items-center gap-4">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                                <Github size={22} />
                            </a>
                        )}
                        {project.external && (
                            <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green transition-colors duration-300">
                                <ArrowUpRight size={22} />
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
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-light-navy rounded-xl p-8 border border-slate-700/50 hover:border-green/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <Folder className="text-green" size={32} />
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 text-light-slate hover:text-green transition-colors duration-300">
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 text-light-slate hover:text-green transition-colors duration-300">
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lightest-slate text-xl font-bold mb-4 group-hover:text-green transition-colors duration-300">{project.title}</h4>
                <p className="text-light-slate text-base leading-relaxed mb-6 line-clamp-3">{project.description}</p>
                {/* --- START: TAGS FOR OTHER PROJECTS --- */}
                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-slate mt-auto pt-4">
                    {project.tags?.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                {/* --- END: TAGS FOR OTHER PROJECTS --- */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;