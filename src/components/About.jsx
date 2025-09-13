// src/components/About.js
import { motion } from 'framer-motion';
import { skills } from '../data/constants';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="about"
            className="py-24 px-6 lg:px-32 max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
                <span className="text-green font-mono text-lg">01.</span>
                <h2 className="text-2xl lg:text-3xl font-semibold text-lightest-slate">About Me</h2>
                <div className="hidden sm:block h-px w-48 bg-lightest-navy"></div>
            </div>

            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
                {/* Text Content */}
                <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                    <p>
                        I'm a recent Computer Engineering graduate specializing in <span className="text-teal-300 font-semibold">full-stack development</span> with the MERN stack (MongoDB, Express, React, Node.js). I have hands-on experience building secure, responsive, and user-focused web applications using tools like <span className="text-teal-300 font-semibold">API integration</span>, JWT authentication, Tailwind CSS, and Framer Motion.
                    </p>

                    <p>
                        I'm passionate about applying these skills to solve complex problems, especially by <span className="text-teal-300 font-semibold">leveraging AI</span>. I built{' '}
                        <a
                            href="https://prep-genius-ai.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-300 hover:underline font-semibold"
                        >
                            PrepGenius
                        </a>
                        , an AI-powered resume tool I wished I had during placements, and also <span className="text-teal-300 font-semibold">led a team</span> to create FlexLingo, a sign language glove that turns gestures into text.
                    </p>

                    <p>
                        Continuously learning and building, I am now eager to contribute my skills to an innovative team as an <span className="text-teal-300 font-semibold">entry-level software developer</span> and help create impactful solutions.
                    </p>

                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="grid grid-cols-2 gap-0 mt-5 list-none">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="relative pl-5 mb-2 text-sm font-mono before:content-['▹'] before:absolute before:left-0 before:text-green before:text-xs before:leading-3"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="group relative">
                        {/* Teal Overlay Background */}
                        <div className="absolute inset-0 bg-teal-400 opacity-70 rounded-lg blur-sm z-0"></div>

                        {/* Image Container */}
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-teal-400 shadow-md">
                            <img
                                src="/about2.jpeg" // Replace with your real photo
                                alt="Yash Thakare"
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 mix-blend-multiply group-hover:mix-blend-normal"
                            />
                        </div>

                        {/* Hover Shift Effect */}
                        <motion.div
                            initial={{ x: 0, y: 0 }}
                            whileHover={{ x: 5, y: -5 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="absolute inset-0 border border-teal-400 rounded-lg pointer-events-none"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;