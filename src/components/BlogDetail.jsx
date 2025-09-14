// src/components/BlogDetail.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Download } from 'lucide-react';
import { featuredBlogs } from '../data/blogs';
import BlogRenderer from './BlogRenderer'; 

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const allBlogs = [...featuredBlogs];
    const blog = allBlogs.find(b => b.slug === slug);

    if (!blog) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 px-6 lg:px-32 max-w-5xl mx-auto text-center min-h-screen flex flex-col justify-center"
            >
                <h1 className="text-4xl font-bold text-lightest-slate mb-4">Blog Post Not Found</h1>
                <Link to="/#blog" className="inline-flex items-center gap-2 text-green font-mono self-center">
                    <ArrowLeft size={18} /> Back to All Articles
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 lg:px-32 max-w-5xl mx-auto min-h-screen"
        >
            <div className="mb-12 flex justify-between items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-light-slate hover:text-green transition-colors duration-300 font-mono group"
                >
                    <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" /> Back
                </button>

                {blog.pdfUrl && (
                    <a href={blog.pdfUrl} download={`${blog.slug}.pdf`} className="flex items-center gap-2 text-green border border-green px-4 py-2 rounded-lg hover:bg-green/10">
                        <Download size={16} /> Download PDF
                    </a>
                )}
            </div>

            <article>
                <header className="mb-8 border-b border-lightest-navy pb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-lightest-slate mb-4">{blog.title}</h1>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate">
                        <div className="flex items-center gap-2"><User size={16} className="text-green" /><span>{blog.author}</span></div>
                        <div className="flex items-center gap-2"><Calendar size={16} className="text-green" /><span>{blog.date}</span></div>
                    </div>
                </header>

                <div className="prose prose-lg prose-invert text-light-slate max-w-none prose-p:leading-relaxed prose-a:text-green hover:prose-a:text-green/80 prose-code:text-green/80 prose-strong:text-lightest-slate">
                    <BlogRenderer content={blog.content} />
                </div>

                {blog.tags && blog.tags.length > 0 && (
                    <footer className="mt-12 pt-8 border-t border-lightest-navy">
                        <h3 className="text-lg font-semibold text-lightest-slate mb-4 flex items-center gap-2">
                            <Tag size={18} className="text-green" /> Tags
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {blog.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-light-navy text-green/80 font-mono text-sm rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </footer>
                )}
            </article>
        </motion.div>
    );
};

export default BlogDetail;