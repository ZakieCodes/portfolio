import React from 'react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="home" className="relative lg:min-h-screen w-full flex flex-col lg:flex-row pt-24 lg:pt-0 overflow-hidden">
      
      <div className="w-full lg:w-[65%] bg-[var(--color-dark-bg)] flex items-center justify-center lg:justify-start lg:pl-32 px-6 py-12 lg:py-0 z-10">
        <div className="max-w-xl text-center lg:text-left mt-8 lg:mt-0">
          
          <p className="text-[var(--color-accent-green)] font-medium mb-4 tracking-wide">
            Hey there!👋
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I'M {personalInfo.name.split(' ')[0].toUpperCase()} <br />
            {personalInfo.name.split(' ')[1].toUpperCase()}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            {personalInfo.title}
          </h2>
          
          <div className="border-l-4 border-[var(--color-accent-green)] pl-5 mb-10 mx-auto lg:mx-0 max-w-lg text-left">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.about}
              <br /><br />
              I build interfaces in React and models in Python, then explain both in words people enjoy reading. I also do Content Creation and Digital Marketing, because good work still needs someone to tell its story.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            
            <a 
              href="#contact" 
              className="group bg-[var(--color-accent-green)] text-[var(--color-dark-bg)] px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-400 transition font-bold tracking-wide shadow-md text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              LET'S CONNECT
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>

            <a 
              href="/cv.pdf" 
              download="Fariha_CV.pdf" 
              className="group px-6 py-3 rounded-md flex items-center gap-2 border-2 border-[var(--color-accent-green)] text-[var(--color-accent-green)] hover:bg-[var(--color-accent-green)] hover:text-[var(--color-dark-bg)] transition font-bold tracking-wide text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              DOWNLOAD CV
              <svg className="w-5 h-5 group-hover:translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>

            <a 
              href="#projects" 
              className="group px-6 py-3 rounded-md flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-white hover:text-white transition font-medium tracking-wide text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              EXPLORE RESEARCH
              <svg className="w-4 h-4 group-hover:translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>

          </div>

        </div>
      </div>

      <div className="hidden lg:block w-[35%] bg-[var(--color-accent-green)] h-screen sticky top-0"></div>

      <div className="relative lg:absolute lg:top-1/2 lg:left-[65%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] mx-auto mt-12 mb-20 lg:mt-0 lg:mb-0">
        <img 
          src="/profile.jpg" 
          alt="Profile" 
          className="relative w-full h-full object-cover rounded-full border-4 border-[var(--color-dark-bg)] shadow-xl z-10"
        />
      </div>

    </section>
  );
};

export default Hero;