/**
 * Centralized SEO Configuration
 * All site-wide SEO settings and schema generators
 */

export const SITE_CONFIG = {
    name: 'MinimizePDF',
    alternateName: ['Minimize PDF', 'PDF Minimizer', 'minimizepdf.com'],
    url: 'https://minimizepdf.com',
    logo: 'https://minimizepdf.com/favicon-144x144.png',
    description: 'Free online PDF minimizer that handles 200MB+ files. Compress PDF up to 90% — browser-based, secure, no uploads.',
    author: 'MinimizePDF',
    email: 'support@minimizepdf.com',
    social: {
        twitter: '@minimizepdf',
    },
    defaultKeywords: [
        'minimize pdf',
        'pdf minimizer',
        'minimizer pdf',
        'compress pdf',
        'pdf compressor',
        'reduce pdf size',
        'shrink pdf',
        'pdf size reducer',
        'online pdf compression',
        'free pdf compressor'
    ],
};

// Default meta tags for pages without specific SEO data
export const DEFAULT_META = {
    en: {
        title: `${SITE_CONFIG.name} - Free 200MB+ PDF Minimizer & Compressor`,
        description: 'Free Minimize PDF tool to reduce file size up to 90%. Best PDF Minimizer for large files (200MB+). Compress and minimize PDF online without uploads.',
        keywords: SITE_CONFIG.defaultKeywords.join(', '),
    },
    tr: {
        title: 'PDF Küçültme - Ücretsiz Online PDF Boyutu Düşürme | MinimizePDF',
        description: 'PDF boyutu düşürme işlemi hiç bu kadar kolay olmamıştı. 200MB+ dosyaları kalite kaybı olmadan, programsız ve ücretsiz küçültün.',
        keywords: 'pdf küçültme, pdf boyutu düşürme, pdf sıkıştırma, pdf boyut küçültme, ücretsiz pdf sıkıştırıcı, online pdf küçültücü',
    },
};

/**
 * Generate WebSite Schema
 */
export const generateWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.alternateName,
    url: SITE_CONFIG.url,
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
    }
});

/**
 * Generate Organization Schema
 */
export const generateOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    contactPoint: {
        '@type': 'ContactPoint',
        email: SITE_CONFIG.email,
        contactType: 'customer service',
        availableLanguage: ['English', 'Turkish'],
    },
});

/**
 * Generate SoftwareApplication Schema
 */
export const generateSoftwareSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'WebBrowser',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1250',
        bestRating: '5',
        worstRating: '1',
    },
    featureList: [
        'Minimize PDF files up to 90%',
        'Supports files larger than 200MB',
        'Client-side processing (No uploads)',
        'Secure and private',
        'No file size limits',
        'Free forever',
    ],
});

/**
 * Generate BreadcrumbList Schema
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
});

/**
 * Generate FAQ Schema
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
});

/**
 * Generate HowTo Schema for compression pages
 */
export const generateHowToSchema = (targetSize: string, language: string = 'en') => {
    const lang = language === 'tr' ? 'tr' : 'en';
    const steps = language === 'en' ? [
        { name: 'Upload your PDF', text: 'Drag and drop your PDF file or click to select. Files over 200MB are supported.' },
        { name: 'Automatic compression', text: `Our AI engine analyzes your file and compresses it to ${targetSize} while preserving quality.` },
        { name: 'Download', text: 'Click the download button to save your minimized PDF file.' },
    ] : [
        { name: 'PDF dosyanızı yükleyin', text: 'PDF dosyanızı sürükleyip bırakın veya tıklayarak seçin. 200MB üzeri dosyalar desteklenir.' },
        { name: 'Otomatik sıkıştırma', text: `Yapay zeka motorumuz dosyanızı analiz eder ve kaliteyi koruyarak ${targetSize} boyutuna küçültür.` },
        { name: 'İndirin', text: 'Küçültülmüş PDF dosyanızı kaydetmek için indirme butonuna tıklayın.' },
    ];

    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: language === 'en' ? `How to compress PDF to ${targetSize}` : `PDF nasıl ${targetSize} boyutuna küçültülür`,
        description: language === 'en'
            ? `Step-by-step guide to compress your PDF file to ${targetSize} online for free`
            : `PDF dosyanızı ücretsiz olarak ${targetSize} boyutuna küçültmek için adım adım kılavuz`,
        totalTime: 'PT1M',
        tool: {
            '@type': 'HowToTool',
            name: 'MinimizePDF',
        },
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
        })),
    };
};

/**
 * Extract target size from slug for schema generation
 */
export const extractTargetSize = (slug: string): string | null => {
    const match = slug.match(/(\d+)(kb|mb)/i);
    if (match) {
        return `${match[1]}${match[2].toUpperCase()}`;
    }
    return null;
};
