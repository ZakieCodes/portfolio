import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[var(--color-dark-bg)] overflow-hidden border-t border-gray-800 flex flex-col justify-center min-h-[85vh]">
      <div className="container mx-auto max-w-5xl">
        
        <div className="mb-14 text-center">
          <span className="text-[var(--color-accent-green)] font-mono mb-2 block tracking-wider text-sm">
            01. MY TOOLKIT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Skills</h2>
          <div className="w-16 h-1 bg-[var(--color-accent-green)] mx-auto rounded-full shadow-[0_0_10px_#00D26A]"></div>
        </div>

        <div className="relative flex flex-col items-center">
          
          {/* Center Glowing Line (Hidden on mobile so it looks like a clean list) */}
          <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-[var(--color-accent-green)] to-transparent opacity-30 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

          {/* ROW 1: AI (Left) & Web (Right) */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center mb-8 group">
             {/* Center Dot */}
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_15px_#00D26A] group-hover:scale-125 transition-transform duration-300"></div>
             
             {/* Left Box */}
             <div className="w-full md:w-[45%] flex justify-end md:pr-10 mb-6 md:mb-0 text-center md:text-right">
                <div className="bg-[#1a1c20] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-[var(--color-accent-green)] transition duration-300 w-full max-w-[360px] mx-auto md:mx-0">
                  <h3 className="text-lg font-bold text-[var(--color-accent-green)] mb-4">AI & Machine Learning</h3>
                  <div className="flex flex-col space-y-2.5 text-slate-300 text-sm font-medium">
                     <span>Deep Learning (ResNet50V2)</span>
                     <span>Scikit-learn & Random Forest</span>
                     <span>TensorFlow</span>
                     <span>Data Modeling (NumPy, Pandas)</span>
                  </div>
                </div>
             </div>

             {/* Right Box */}
             <div className="w-full md:w-[45%] flex justify-start md:pl-10 text-center md:text-left">
                <div className="bg-[#1a1c20] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-[var(--color-accent-green)] transition duration-300 w-full max-w-[360px] mx-auto md:mx-0">
                  <h3 className="text-lg font-bold text-[var(--color-accent-green)] mb-4">Full-Stack Web</h3>
                  <div className="flex flex-col space-y-2.5 text-slate-300 text-sm font-medium">
                     <span>React & Vue.js</span>
                     <span>JavaScript & Tailwind CSS</span>
                     <span>Django Framework</span>
                     <span>MySQL & RESTful APIs</span>
                  </div>
                </div>
             </div>
          </div>

          {/* ROW 2: Core (Left) & Tools (Right) */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center group">
             {/* Center Dot */}
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_15px_#00D26A] group-hover:scale-125 transition-transform duration-300"></div>
             
             {/* Left Box */}
             <div className="w-full md:w-[45%] flex justify-end md:pr-10 mb-6 md:mb-0 text-center md:text-right">
                <div className="bg-[#1a1c20] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-[var(--color-accent-green)] transition duration-300 w-full max-w-[360px] mx-auto md:mx-0">
                  <h3 className="text-lg font-bold text-[var(--color-accent-green)] mb-4">Core Programming</h3>
                  <div className="flex flex-col space-y-2.5 text-slate-300 text-sm font-medium">
                     <span>Python & Java</span>
                     <span>C / C++</span>
                     <span>System Software (Flex/Bison)</span>
                     <span>Network (Packet Tracer)</span>
                  </div>
                </div>
             </div>

             {/* Right Box */}
             <div className="w-full md:w-[45%] flex justify-start md:pl-10 text-center md:text-left">
                <div className="bg-[#1a1c20] p-6 rounded-xl border border-gray-800 shadow-lg hover:border-[var(--color-accent-green)] transition duration-300 w-full max-w-[360px] mx-auto md:mx-0">
                  <h3 className="text-lg font-bold text-[var(--color-accent-green)] mb-4">Tools & Environment</h3>
                  <div className="flex flex-col space-y-2.5 text-slate-300 text-sm font-medium">
                     <span>Git & GitHub</span>
                     <span>Jupyter & Google Colab</span>
                     <span>Ubuntu Linux</span>
                     <span>Vercel & LaTeX</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;