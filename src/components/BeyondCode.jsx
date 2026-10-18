import React from 'react';

const BeyondCode = () => {
  return (
    <section id="research" className="py-24 px-6 bg-[var(--color-dark-bg)] border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN: The Sketches */}
          <div className="flex flex-col gap-6 relative">
            
            {/* Top Sketch Box - Forced equal height */}
            <div className="bg-[#1a1c20] border border-gray-800 rounded-xl overflow-hidden shadow-lg p-6 flex items-center justify-center h-[300px] relative">
               <img src="/sketch-1.png" alt="Research Sketch" className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 z-10" />
            </div>

            {/* Bottom Sketch Box - Forced equal height */}
            <div className="bg-[#1a1c20] border border-gray-800 rounded-xl overflow-hidden shadow-lg p-6 flex items-center justify-center h-[300px] relative">
               <img src="/sketch-2.png" alt="Article Sketch" className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 z-10" />
            </div>
            
          </div>

          {/* RIGHT COLUMN: The Text & Buttons */}
          <div className="flex flex-col">
            
            {/* Added 03. PUBLICATIONS here */}
            <span className="text-[var(--color-accent-green)] font-mono mb-3 tracking-wider text-sm uppercase">
              03. Publications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Research & Writing</h2>
            <p className="text-slate-400 mb-12 text-sm">Selected research and articles.</p>

            {/* Sub-grid for the two text blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* EFAST Paper Column */}
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-base font-bold text-[var(--color-accent-green)] mb-3 leading-snug">
                    Socioeconomic and temporal drivers of antibiotic resistance
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Delivered an oral presentation on the retrospective impact of COVID-19 on antimicrobial resistance patterns at the EFAST 2026 conference. An expanded manuscript is currently under review for journal publication.
                  </p>
                </div>
                
                {/* Status Badge */}
                <div className="mt-auto pt-6">
                  <span className="inline-block border border-[var(--color-accent-green)] text-[var(--color-accent-green)] px-6 py-2.5 rounded-lg text-sm font-medium bg-[#00D26A]/10">
                    Manuscript Under Review
                  </span>
                </div>
              </div>

              {/* Medium Article Column */}
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-base font-bold text-[var(--color-accent-green)] mb-3 leading-snug">
                    Overfitting the adolescent brain, an AI perspective
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A technical and philosophical exploration published on Medium. This piece bridges the gap between machine learning concepts and human cognitive development.
                  </p>
                </div>

                {/* Button pushed to the bottom of this specific column */}
                <div className="mt-auto pt-6">
                 <a href="https://medium.com/@zakifariharahman/overfitting-the-adolescent-brain-an-ai-perspective-fc4bb0c6ba0f" target="_blank" rel="noreferrer" className="inline-block border border-gray-600 text-gray-300 px-6 py-2.5 rounded-lg text-sm font-medium hover:border-[var(--color-accent-green)] hover:text-[var(--color-accent-green)] transition-all">
  Read my articles
</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondCode;