// src/components/Navigation.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/constants';
import logo from '../assets/images/logo.png';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <>
            {/* Desktop & Mobile Nav */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                    scrolled
                        ? 'bg-transparent backdrop-blur-md h-24'
                        : 'bg-transparent h-24'
                }`}
            >
                <div className="flex justify-between items-center h-full px-6 lg:px-12">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center nav-list">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                                className="ml-5 relative nav-item"
                            >
                                <button
                                    onClick={() => scrollToSection(link.href)}
                                    className="px-3 py-2 text-lightest-slate text-sm font-mono transition-all duration-300 hover:text-green hover:-translate-y-1 before:content-['0'_counter(item)_'._'] before:mr-2 before:text-green before:text-xs"
                                >
                                    {link.name}
                                </button>
                            </motion.div>
                        ))}

                        <motion.a
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            href="/devfolio-v1/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-4 py-3 text-green border border-green rounded text-sm font-mono transition-all duration-300 hover:bg-green/10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_theme(colors.green)]"
                        >
                            Resume
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="md:hidden p-2 text-green"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 w-3/4 h-screen bg-light-navy z-40 md:hidden flex flex-col justify-center items-center nav-list"
                        >
                            <div className="flex flex-col items-center space-y-6">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="text-center nav-item"
                                    >
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-lightest-slate text-xl font-mono transition-colors duration-300 hover:text-green before:content-['0'_counter(item)_'._'] before:block before:mb-1 before:text-green before:text-sm"
                                        >
                                            {link.name}
                                        </button>
                                    </motion.div>
                                ))}

                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    href="/devfolio-v1/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 px-6 py-4 text-green border border-green rounded text-sm font-mono transition-all duration-300 hover:bg-green/10"
                                >
                                    Resume
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 z-30 md:hidden"
                            onClick={() => setMenuOpen(false)}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;