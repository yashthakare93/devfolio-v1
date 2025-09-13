
// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-32 max-w-7xl mx-auto flex flex-col items-center"
    >
      <h2 className="text-2xl lg:text-3xl font-semibold text-lightest-slate mb-8">
        Get In Touch
      </h2>
      <p className="text-light-slate text-lg mb-8 text-center max-w-2xl">
        I'm currently looking for new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a
        href="mailto:thakareyash74@gmail.com"
        className="px-8 py-4 text-green border border-green rounded font-mono text-sm transition-all duration-300 hover:bg-green/10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_theme(colors.green)]"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
