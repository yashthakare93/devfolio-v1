// src/components/Hero.js
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="flex flex-col justify-center items-start min-h-screen px-6 lg:px-32 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-2 text-green font-mono text-base lg:text-lg"
            >
                Hi, I'm
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lightest-slate text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-semibold leading-tight"
            >
                Yash Thakare
            </motion.h2>

            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-2 text-slate text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-semibold leading-tight"
            >
                MERN Stack Developer.
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 max-w-lg text-base lg:text-lg text-slate leading-relaxed"
            >
                I build fast, scalable web apps with React and Node.js. As a Computer Engineering graduate, I blend strong JavaScript and Java fundamentals with full-stack precision.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={scrollToContact}
                className="mt-10 px-7 py-4 text-green border border-green rounded font-mono text-sm transition-all duration-300 hover:bg-green/10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_theme(colors.green)] focus:outline-none focus:ring-2 focus:ring-green/50"
            >
                Get In Touch
            </motion.button>
        </section>
    );
};

export default Hero;