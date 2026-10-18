import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111215] py-8 text-center border-t border-gray-900">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} Fariha Rahman. <br className="md:hidden" />all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;