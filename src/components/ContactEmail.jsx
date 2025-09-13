import React from 'react';

const ContactEmail = () => {
  return (
    <div className="hidden lg:block fixed right-12 bottom-0 z-50">
      <div className="flex flex-col items-center h-screen justify-end">
        <a
          href="mailto:thakareyash74@gmail.com"
          className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-sm tracking-widest font-sans vertical-text"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          thakareyash74@gmail.com
        </a>
         <div className="w-px h-24 bg-lightest-slate mt-6 mx-auto"></div>
      </div>
    </div>
  );
};

export default ContactEmail;