/**
 * SEO Module Index
 * Central export for all SEO-related functionality
 */

// Configuration
export {
    SITE_CONFIG,
    DEFAULT_META,
    generateWebSiteSchema,
    generateOrganizationSchema,
    generateSoftwareSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateHowToSchema,
    extractTargetSize,
} from './config';

// Page Data
export {
    seoPages,
    getRelatedPages,
    getPagesByType,
    getPopularPages,
    type SEOPageData,
} from './pages';
