import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Import the Download icon
import { ArrowLeft, Calendar, User, Tag, Download } from 'lucide-react'; 
import { featuredBlogs, recentBlogs } from '../data/blogs';

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const allBlogs = [...featuredBlogs, ...recentBlogs];
    const blog = allBlogs.find(blog => blog.slug === slug);

    // The download handler function
    const handleDownload = () => {
        if (!blog) return;

        // Create a temporary element to strip HTML tags
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = blog.content;
        const textContent = tempDiv.textContent || tempDiv.innerText || "";

        const fullArticleText = `Title: ${blog.title}\nAuthor: ${blog.author}\nDate: ${blog.date}\n\n---\n\n${textContent}`;

        const blob = new Blob([fullArticleText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${blog.slug}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    if (!blog) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-24 px-6 lg:px-32 max-w-5xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold text-lightest-slate mb-4">Blog Post Not Found</h1>
                <p className="text-light-slate mb-8">The blog post you're looking for doesn't exist.</p>
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-green hover:text-lightest-slate transition-colors duration-300 font-mono"
                >
                    <ArrowLeft size={18} />
                    Back to Articles
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24 px-6 lg:px-32 max-w-5xl mx-auto"
        >
            <div className="mb-12 flex justify-between items-center">
                <button
                    onClick={() => navigate('/blog')}
                    className="flex items-center gap-2 text-light-slate hover:text-green transition-colors duration-300 font-mono"
                >
                    <ArrowLeft size={18} />
                    Back to Articles
                </button>

              {blog.pdfUrl && (
                <a
                    href={blog.pdfUrl}
                    download
                    className="flex items-center gap-2 text-green border border-green px-4 py-2 rounded hover:bg-green/10 transition-colors duration-300 font-mono text-sm"
                >
                    <Download size={16} />
                    Download PDF
                </a>
            )}
            </div>

            <article>
                <header className="mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-lightest-slate mb-4">{blog.title}</h1>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate">
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-green" />
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-green" />
                            <span>{blog.date}</span>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-lg prose-invert text-light-slate max-w-none ..."
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <footer className="mt-12 pt-8 border-t border-lightest-navy">
                    <h3 className="text-lg font-semibold text-lightest-slate mb-4 flex items-center gap-2">
                        <Tag size={18} className="text-green" />
                        Tags
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {blog.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-light-navy text-green/80 font-mono text-sm rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </footer>
            </article>
        </motion.div>
    );
};

export default BlogDetail;