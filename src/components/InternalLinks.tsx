/**
 * Internal Links Component
 * Displays related pages for internal linking and SEO
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, Briefcase, Scale, Mail, BookOpen } from 'lucide-react';
import { getRelatedPages, type SEOPageData } from '../seo';

interface InternalLinksProps {
    currentSlug?: string;
    title?: string;
    limit?: number;
    variant?: 'cards' | 'list' | 'compact';
}

const getIconForPage = (page: SEOPageData) => {
    if (page.type === 'size') {
        return <FileDown className="text-indigo-600" size={20} />;
    }

    // Use-case specific icons
    if (page.slug.includes('job') || page.slug.includes('cv')) {
        return <Briefcase className="text-indigo-600" size={20} />;
    }
    if (page.slug.includes('court') || page.slug.includes('uyap')) {
        return <Scale className="text-indigo-600" size={20} />;
    }
    if (page.slug.includes('email')) {
        return <Mail className="text-indigo-600" size={20} />;
    }
    if (page.slug.includes('thesis') || page.slug.includes('academic')) {
        return <BookOpen className="text-indigo-600" size={20} />;
    }

    return <FileDown className="text-indigo-600" size={20} />;
};

export const InternalLinks: React.FC<InternalLinksProps> = ({
    currentSlug,
    title = 'Related Tools',
    limit = 6,
    variant = 'cards',
}) => {
    const relatedPages = getRelatedPages(currentSlug || '', limit);

    if (relatedPages.length === 0) return null;

    if (variant === 'compact') {
        return (
            <div className="mt-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {relatedPages.map((page) => (
                        <Link
                            key={page.slug}
                            to={`/${page.slug}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-700 rounded-full text-sm font-medium transition-colors"
                        >
                            {page.heroTitleEnd || page.heroTitleStart}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'list') {
        return (
            <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
                <ul className="space-y-3">
                    {relatedPages.map((page) => (
                        <li key={page.slug}>
                            <Link
                                to={`/${page.slug}`}
                                className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors group"
                            >
                                {getIconForPage(page)}
                                <span className="flex-1 font-medium">
                                    {page.heroTitleStart} {page.heroTitleEnd}
                                </span>
                                <ArrowRight
                                    size={16}
                                    className="text-slate-300 group-hover:text-indigo-600 transition-colors"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // Default: cards variant
    return (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Looking for a different file size? Try these popular compression tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPages.map((page) => (
                        <Link
                            key={page.slug}
                            to={`/${page.slug}`}
                            className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-50 group-hover:bg-indigo-100 p-3 rounded-xl transition-colors">
                                    {getIconForPage(page)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
                                        {page.heroTitleStart} {page.heroTitleEnd}
                                    </h3>
                                    <p className="text-sm text-slate-500 line-clamp-2">
                                        {page.heroSubtitle}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 mt-3 uppercase tracking-wider">
                                        {page.heroBadge}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold transition-colors"
                    >
                        View All Tools
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default InternalLinks;
