import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[var(--color-dark-bg)] border-t border-gray-800">
      <div className="container mx-auto max-w-4xl">
        
        <div className="mb-16 text-center">
          <span className="text-[var(--color-accent-green)] font-mono mb-2 block tracking-wider text-sm">02. MY BACKGROUND</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-[var(--color-accent-green)] mt-4 mx-auto rounded-full shadow-[0_0_10px_#00D26A]"></div>
        </div>

        {}
        <div className="border-l-2 border-[var(--color-accent-green)]/30 pl-8 ml-4 md:ml-8 space-y-14">
            
            {}
            <div className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-[var(--color-dark-bg)] border-4 border-[var(--color-accent-green)] rounded-full group-hover:bg-[var(--color-accent-green)] group-hover:shadow-[0_0_15px_#00D26A] transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-accent-green)] transition-colors">B.Sc. in Computer Science & Engineering</h3>
                <p className="text-[var(--color-accent-green)] font-mono text-sm mt-1 mb-3">PRESENT</p>
                <p className="text-slate-400 leading-relaxed">
                  Focusing on Artificial Intelligence, Machine Learning, and Web Development. Building a strong foundation in core programming, algorithms, and technical writing.
                </p>
            </div>

            {}
            <div className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-[var(--color-dark-bg)] border-4 border-[var(--color-accent-green)] rounded-full group-hover:bg-[var(--color-accent-green)] group-hover:shadow-[0_0_15px_#00D26A] transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-accent-green)] transition-colors">Robotics and Hardware Integration Team</h3>
                <p className="text-[var(--color-accent-green)] font-mono text-sm mt-1 mb-3">EXTRACURRICULAR</p>
                <p className="text-slate-400 leading-relaxed">
                  Collaborated with peers on hardware and software integration projects. Fostered a hands-on passion for innovation, problem-solving, and team-based engineering.
                </p>
            </div>

            {}
            <div className="relative group">
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-[var(--color-dark-bg)] border-4 border-[var(--color-accent-green)] rounded-full group-hover:bg-[var(--color-accent-green)] group-hover:shadow-[0_0_15px_#00D26A] transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-accent-green)] transition-colors">Undergraduate Researcher</h3>
                <p className="text-[var(--color-accent-green)] font-mono text-sm mt-1 mb-3">ACADEMIC RESEARCH</p>
                <p className="text-slate-400 leading-relaxed">
                  Conducted comprehensive research on modeling trust decay in AI systems and applying Machine Learning models (like KNN) to medical datasets for disease and resistance detection.
                </p>
            </div>

            

        </div>
      </div>
    </section>
  );
};

export default Education;