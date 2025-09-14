// src/components/BlogRenderer.jsx
import React from 'react';

const BlogRenderer = ({ content }) => {
    if (!content) {
        return null;
    }

    return (
        <>
            {content.map((block, index) => {
                const key = `${block.type}-${index}`;

                switch (block.type) {
                    case 'h2':
                        return <h2 key={key}>{block.children}</h2>;
                    case 'h3':
                        return <h3 key={key}>{block.children}</h3>;
                    
                    case 'h4':
                        return <h4 key={key} className="mt-6 mb-2 font-semibold text-light-slate">{block.children}</h4>;
                        
                    case 'p':
                        return <p key={key}>{block.children}</p>;
                    case 'image':
                        return <img key={key} src={block.src} alt={block.alt} className={block.className} />;
                    case 'ul':
                        return (
                            <ul key={key}>
                                {block.children.map((item, itemIndex) => (
                                    <li key={`${key}-${itemIndex}`}>{item}</li>
                                ))}
                            </ul>
                        );
                    case 'hr':
                        return <hr key={key} className="my-8 border-lightest-navy/30" />;
                    case 'pre':
                        return <pre key={key}><code>{block.children}</code></pre>;
                    default:
                        return null;
                }
            })}
        </>
    );
};

export default BlogRenderer;