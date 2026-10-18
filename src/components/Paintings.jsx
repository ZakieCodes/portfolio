import React from 'react';

const Paintings = () => {
  return (
    <section id="art" className="py-24 px-6 bg-[var(--color-dark-bg)] border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center mb-16">
          <span className="text-[var(--color-accent-green)] font-mono mb-2 tracking-wider text-sm">04. BEYOND THE SCREEN</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">Creative Pursuits</h2>
          <div className="w-20 h-1 bg-[var(--color-accent-green)] mt-6 rounded-full shadow-[0_0_10px_#00D26A]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: The Painting Collage */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent-green)] to-gray-800 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-[#1a1c20] border-2 border-gray-800 rounded-xl overflow-hidden shadow-2xl p-4">
              <img 
                src="/painting.jpg" 
                alt="Collage of my original paintings" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: The Text */}
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
              Art, Storytelling, and Digital Creation
            </h3>
            
            <div className="space-y-8">
              {/* Painting Block */}
              <div>
                <h4 className="text-lg font-bold text-[var(--color-accent-green)] mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                  Painting
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  When I step away from the keyboard, I translate my ideas onto canvas. Working with colors and textures provides a tactile creative outlet that balances the rigid, analytical logic of software engineering and algorithm design.
                </p>
              </div>

              {/* Journaling Block */}
              <div>
                <h4 className="text-lg font-bold text-[var(--color-accent-green)] mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  Journaling & Literature
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I maintain a consistent journaling practice to organize my thoughts, reflect on daily experiences, and track personal growth. It pairs naturally with my deep appreciation for reading immersive fiction and rich Bengali literature.
                </p>
              </div>

              {/* Content Creation Block */}
              <div>
                <h4 className="text-lg font-bold text-[var(--color-accent-green)] mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  Content Creation
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I enjoy documenting my journey through personal vlogs and digital content. Mixing video edits with daily storytelling allows me to share my perspective with a broader audience, combining technical digital editing with creative expression.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Paintings;