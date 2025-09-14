import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Calendar } from 'lucide-react';
import { featuredBlogs  } from '../data/blogs'; // Ensure path is correct

const Blog = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="blog"
            className="py-24 px-6 lg:px-32 max-w-7xl mx-auto"
        >
            <div className="flex items-center gap-4 mb-16">
                <span className="text-green font-mono text-xl">03.</span>
                <h2 className="text-3xl font-semibold text-lightest-slate">Blogs & Articles</h2>
                <div className="hidden sm:block h-px w-48 bg-lightest-navy"></div>
            </div>

            {/* Featured Blogs */}
            <div className="space-y-24">
                {featuredBlogs.map((blog, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={blog.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Desktop Layout */}
                            <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
                                <div className={`col-span-7 row-start-1 ${isEven ? 'col-start-1' : 'col-start-6'}`}>
                                    <Link to={`/blog/${blog.slug}`} className="block relative w-full h-[320px] group cursor-pointer">
                                        <div className="absolute inset-0 bg-green/30 rounded-lg z-10 transition-all duration-300 group-hover:bg-transparent"></div>
                                        <img src={blog.image} alt={blog.title} className="w-full h-full object-fill bg-white p-2 rounded-lg" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                            <div className="px-6 py-3 bg-green text-navy font-semibold rounded-lg flex items-center gap-2">
                                                <Eye size={18} /> Read Article
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={`col-span-6 row-start-1 z-20 ${isEven ? 'col-start-7 text-right' : 'col-start-1 text-left'}`}>
                                    <p className="mb-2 text-green font-mono text-sm">Featured Article</p>
                                    <h3 className="text-light-slate text-3xl font-semibold mb-5">
                                        <Link
                                            to={`/blog/${blog.slug}`}
                                            className={`hover:text-green transition-colors duration-300 ${isEven ? 'text-right' : 'text-left'}`}
                                        >
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <div className="bg-light-navy p-6 rounded shadow-2xl mb-6">
                                        <p className="text-light-slate text-lg">{blog.description}</p>
                                    </div>
                                    <ul className={`flex gap-4 font-mono text-sm text-light-slate ${isEven ? 'justify-end' : 'justify-start'}`}>
                                        {blog.tags.slice(0, 3).map(tag => (
                                            <li key={tag}>{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <Link
                                to={`/blog/${blog.slug}`}
                                className="lg:hidden bg-light-navy rounded-lg overflow-hidden shadow-xl block hover:shadow-2xl hover:shadow-green/10 transition-all duration-300"
                            >
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-fill bg-white p-2 rounded-lg" />
                                <div className="p-6">
                                    <p className="mb-2 text-green font-mono text-sm">Featured Article</p>
                                    <h3 className="text-light-slate text-xl font-semibold mb-4 hover:text-green transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-light-slate mb-4">{blog.description}</p>
                                    <div className="flex items-center gap-2 font-mono text-xs text-light-slate">
                                        <Calendar size={14} className="text-green" />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

        </motion.section>
    );
};

export default Blog;