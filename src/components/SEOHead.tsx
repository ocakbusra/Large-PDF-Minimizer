/**
 * SEO Head Component
 * Reusable component for page-level SEO with dynamic metadata
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    SITE_CONFIG,
    generateWebSiteSchema,
    generateSoftwareSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateHowToSchema,
    extractTargetSize,
    type SEOPageData,
} from '../seo';

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    slug?: string;
    pageData?: SEOPageData;
    language?: 'en' | 'tr';
    isHomePage?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    keywords = SITE_CONFIG.defaultKeywords,
    canonical,
    slug,
    pageData,
    language = 'en',
    isHomePage = false,
}) => {
    const canonicalUrl = canonical || `${SITE_CONFIG.url}${slug ? '/' + slug : ''}`;

    // Generate breadcrumb for non-home pages
    const breadcrumbItems = slug
        ? [
            { name: 'Home', url: SITE_CONFIG.url },
            { name: title.split(' - ')[0] || title, url: canonicalUrl },
        ]
        : [];

    // Determine if we should show HowTo schema (for size-based pages)
    const targetSize = slug ? extractTargetSize(slug) : null;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content={SITE_CONFIG.author} />
            <meta name="robots" content="index, follow" />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${SITE_CONFIG.url}/og-image.jpg`} />
            <meta property="og:site_name" content={SITE_CONFIG.name} />
            <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${SITE_CONFIG.url}/twitter-image.jpg`} />

            {/* Language alternate */}
            <link rel="alternate" hrefLang="en" href={canonicalUrl} />
            <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

            {/* WebSite Schema (always on homepage) */}
            {isHomePage && (
                <script type="application/ld+json">
                    {JSON.stringify(generateWebSiteSchema())}
                </script>
            )}

            {/* Software Application Schema (always on homepage) */}
            {isHomePage && (
                <script type="application/ld+json">
                    {JSON.stringify(generateSoftwareSchema())}
                </script>
            )}

            {/* Breadcrumb Schema (on programmatic pages) */}
            {breadcrumbItems.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify(generateBreadcrumbSchema(breadcrumbItems))}
                </script>
            )}

            {/* FAQ Schema (if page has FAQ data) */}
            {pageData?.faq && pageData.faq.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify(generateFAQSchema(pageData.faq))}
                </script>
            )}

            {/* HowTo Schema (for size-based pages) */}
            {targetSize && (
                <script type="application/ld+json">
                    {JSON.stringify(generateHowToSchema(targetSize, language))}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
