import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    // Reduced padding and added min-h-screen to fit everything on one view
    <section id="projects" className="py-12 px-6 bg-[var(--color-dark-bg)] border-t border-gray-800 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col items-center mb-10">
          <span className="text-[var(--color-accent-green)] font-mono mb-2 tracking-wider text-sm">02. PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center uppercase tracking-wide">Featured Projects</h2>
          <div className="w-16 h-1 bg-[var(--color-accent-green)] mt-4 rounded-full"></div>
        </div>
        
        {/* lg:grid-cols-3 forces the 3-column layout. 5 items naturally leave the last slot empty */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-[#16181b] border border-gray-800 p-6 rounded-xl hover:border-[var(--color-accent-green)] transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-accent-green)] transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-[10px] font-mono text-[var(--color-accent-green)] bg-[#00D26A]/10 px-2 py-1 rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Restored the previous link style with icons */}
              <div className="mt-auto flex items-center gap-5 pt-4 border-t border-gray-800/50">
                
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-300 hover:text-[var(--color-accent-green)] flex items-center gap-1.5 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View on GitHub
                  </a>
                )}

                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-xs font-medium text-[var(--color-accent-green)] hover:text-green-400 flex items-center gap-1.5 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Live Preview
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;