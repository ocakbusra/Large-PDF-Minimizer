
export interface SEOPageData {
    slug: string;
    title: string;
    description: string;
    heroBadge: string;
    heroTitleStart: string;
    heroTitleEnd: string;
    heroSubtitle: string;
    type: 'size' | 'use-case';
}

export const seoPages: SEOPageData[] = [
    // --- SIZE FOCUSED ---
    {
        slug: 'compress-pdf-to-100kb',
        type: 'size',
        title: 'Compress PDF to 100kb Online - Free, Secure & No Upload',
        description: 'Need to reduce PDF size below 100kb? Use our free AI compressor. Works directly in your browser (100% Private). No watermarks, no file limits.',
        heroBadge: 'UNDER 100KB — FREE',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '100kb',
        heroSubtitle: 'Strict file limit? Our advanced compression engine shrinks your PDF to under 100kb without losing quality. 100% private, browser-based.'
    },
    {
        slug: 'reduce-pdf-below-100kb',
        type: 'size',
        title: 'Reduce PDF Below 100kb - Secure Helper',
        description: 'Easily reduce PDF file size below 100kb. Fast, free, and secure. Your files never leave your device.',
        heroBadge: 'MICRO PDF TOOL',
        heroTitleStart: 'Reduce PDF Below',
        heroTitleEnd: '100kb',
        heroSubtitle: 'Perfect for strict upload portals. Get your PDF under 100kb instantly.'
    },
    {
        slug: 'compress-pdf-to-50kb',
        type: 'size',
        title: 'Compress PDF to 50kb - ID Card Optimization',
        description: 'Compress PDF to 50kb for ID cards and forms. High compression ratio for small file requirements.',
        heroBadge: 'EXTREME COMPRESSION',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '50kb',
        heroSubtitle: 'Need it tiny? We specialize in extreme compression for ID cards and official documents requiring under 50kb.'
    },
    {
        slug: 'compress-pdf-to-200kb',
        type: 'size',
        title: 'Compress PDF to 200kb - Portal Standard',
        description: 'The standard limit for most portals. Compress your PDF to 200kb securely online.',
        heroBadge: 'PORTAL READY',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '200kb',
        heroSubtitle: 'The most common upload limit is 200MB or 200kb. We handle both with ease. Secure and fast.'
    },
    {
        slug: 'resize-pdf-to-300kb',
        type: 'size',
        title: 'Resize PDF into 300kb - Fast & Private',
        description: 'Resize PDF to 300kb online. Optimize documents for web upload standards.',
        heroBadge: 'OPTIMIZED',
        heroTitleStart: 'Resize PDF to',
        heroTitleEnd: '300kb',
        heroSubtitle: 'Hit the 300kb target size perfectly. Smart compression for web uploads.'
    },
    {
        slug: 'reduce-pdf-file-size-below-400kb',
        type: 'size',
        title: 'Reduce PDF File Size Below 400kb',
        description: 'Reduce PDF size below 400kb without technical skills. Just drag and drop.',
        heroBadge: 'EASY REDUCER',
        heroTitleStart: 'Reduce PDF Below',
        heroTitleEnd: '400kb',
        heroSubtitle: 'Simple tool to bring your documents under the 400kb limit.'
    },
    {
        slug: 'compress-pdf-to-500kb',
        type: 'size',
        title: 'Compress PDF to 500kb - Half MB Tool',
        description: 'Compress PDF to 500kb (0.5MB). Perfect for standard email attachments and forms.',
        heroBadge: '0.5 MB TOOL',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '500kb',
        heroSubtitle: 'Get your files down to half a megabyte. Crystal clear quality, significantly smaller size.'
    },
    {
        slug: 'compress-pdf-to-1mb',
        type: 'size',
        title: 'Compress PDF to 1MB - Corporate Standard',
        description: 'Compress large PDFs to 1MB. Ideal for corporate reports and official submissions.',
        heroBadge: '1MB LIMIT',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '1MB',
        heroSubtitle: 'Shrink giant files to a manageable 1MB. Perfect for reports and official filings.'
    },
    {
        slug: 'reduce-pdf-size-below-1mb',
        type: 'size',
        title: 'Reduce PDF Size Below 1MB Online',
        description: 'Free tool to reduce PDF size below 1MB. Secure processing in your browser.',
        heroBadge: 'UNDER 1MB',
        heroTitleStart: 'Reduce PDF Below',
        heroTitleEnd: '1MB',
        heroSubtitle: 'Don\'t let file size limits stop you. Instantly reduce your PDF below 1MB.'
    },
    {
        slug: 'compress-pdf-to-2mb',
        type: 'size',
        title: 'Compress PDF to 2MB - CV Standard',
        description: 'Compress PDF to 2MB. The perfect balance for CVs and resumes with graphics.',
        heroBadge: 'CV STANDARD',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '2MB',
        heroSubtitle: 'Keep your resume formatting perfect while fitting under the 2MB applicant tracking system limit.'
    },
    {
        slug: 'compress-pdf-to-5mb',
        type: 'size',
        title: 'Compress PDF to 5MB - High Quality',
        description: 'Compress PDF to 5MB while maintaining print quality. Secure and free.',
        heroBadge: 'HIGH QUALITY',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '5MB',
        heroSubtitle: 'Heavy brochure? Shrink it to 5MB without sacrificing image sharpness.'
    },
    {
        slug: 'reduce-pdf-to-10mb',
        type: 'size',
        title: 'Reduce PDF to 10MB - Email Ready',
        description: 'Reduce PDF to 10MB to fit within email attachment limits safe zone.',
        heroBadge: 'EMAIL SAFE',
        heroTitleStart: 'Reduce PDF to',
        heroTitleEnd: '10MB',
        heroSubtitle: 'Ensure your files always send. Reduce large presentations to under 10MB.'
    },
    {
        slug: 'compress-pdf-under-20mb',
        type: 'size',
        title: 'Compress PDF Under 20MB - Big Files',
        description: 'Handles 100MB+ files and compresses them under 20MB. Browser-based power.',
        heroBadge: 'HEAVY DUTY',
        heroTitleStart: 'Compress PDF Under',
        heroTitleEnd: '20MB',
        heroSubtitle: 'We handle the big stuff. Convert 100MB+ giants to under 20MB easily.'
    },
    {
        slug: 'shrink-pdf-to-100kb-online',
        type: 'size',
        title: 'Shrink PDF to 100kb Online',
        description: 'Shrink PDF documents to 100kb securely. No server uploads.',
        heroBadge: 'SECURE SHRINK',
        heroTitleStart: 'Shrink PDF to',
        heroTitleEnd: '100kb',
        heroSubtitle: 'Fast, secure, and effective shrinking for strict 100kb limits.'
    },
    {
        slug: 'reduce-pdf-size-in-kb',
        type: 'size',
        title: 'Reduce PDF Size in KB - Precise Tool',
        description: 'Control your PDF size in KB. Precision compression tool.',
        heroBadge: 'KB PRECISION',
        heroTitleStart: 'Reduce PDF Size in',
        heroTitleEnd: 'KB',
        heroSubtitle: 'Need precise control? Reduce your PDF size to exactly the KB you need.'
    },
    {
        slug: 'make-pdf-smaller-than-200kb',
        type: 'size',
        title: 'Make PDF Smaller Than 200kb',
        description: 'How to make PDF smaller than 200kb? Use this free tool.',
        heroBadge: 'SOLVER',
        heroTitleStart: 'Make PDF Smaller Than',
        heroTitleEnd: '200kb',
        heroSubtitle: 'The easiest way to make your PDF fit the 200kb requirement.'
    },
    {
        slug: 'compress-token-pdf-10kb',
        type: 'size',
        title: 'Compress Token PDF to 10kb - Crypto',
        description: 'Specialized compression for text-heavy token and crypto whitepapers.',
        heroBadge: 'TEXT ONLY',
        heroTitleStart: 'Compress PDF to',
        heroTitleEnd: '10kb',
        heroSubtitle: 'Optimized for text-heavy documents. Get closer to 10kb for extreme efficiency.'
    },
    {
        slug: 'optimize-pdf-for-web-100kb',
        type: 'size',
        title: 'Optimize PDF for Web - 100kb Target',
        description: 'Web-ready PDF optimization. Faster loading times at 100kb.',
        heroBadge: 'WEB OPTIMIZED',
        heroTitleStart: 'Optimize PDF for',
        heroTitleEnd: 'Web',
        heroSubtitle: 'Faster loading pages. Optimize your PDFs for web display around 100kb.'
    },
    {
        slug: 'compress-pdf-high-quality-100kb',
        type: 'size',
        title: 'Compress PDF High Quality - 100kb',
        description: 'High quality compression to 100kb. Don\'t lose readability.',
        heroBadge: 'HQ 100KB',
        heroTitleStart: 'Compress HQ PDF to',
        heroTitleEnd: '100kb',
        heroSubtitle: 'Small size, high readability. The best of both worlds.'
    },
    {
        slug: 'maximum-pdf-compression-free',
        type: 'size',
        title: 'Maximum PDF Compression Free',
        description: 'Get the smallest possible file size with Maximum PDF Compression.',
        heroBadge: 'MAX COMPRESS',
        heroTitleStart: 'Maximum PDF',
        heroTitleEnd: 'Compression',
        heroSubtitle: 'Push the limits. Get the absolute smallest file size possible.'
    },

    // --- USE CASE FOCUSED ---
    {
        slug: 'compress-pdf-for-job-application',
        type: 'use-case',
        title: 'Compress PDF for Job Application - CV Optimized',
        description: 'Optimize your CV/Resume for job portals (ATS). Ensure high quality but small size.',
        heroBadge: 'CAREER READY',
        heroTitleStart: 'Compress PDF for',
        heroTitleEnd: 'Job Applications',
        heroSubtitle: 'Don\'t get rejected because of file size. Optimize your CV for ATS systems while keeping it sharp.'
    },
    {
        slug: 'optimize-pdf-for-uyap-court',
        type: 'use-case',
        title: 'Optimize PDF for UYAP / Court Uploads',
        description: 'Secure compression for legal documents. 100% Private - No server uploads for sensitive court files.',
        heroBadge: 'LEGAL SECURE',
        heroTitleStart: 'Optimize PDF for',
        heroTitleEnd: 'Court/UYAP',
        heroSubtitle: 'Total privacy for legal docs. Your files never leave your computer. Essential for lawyers and court uploads.'
    },
    {
        slug: 'reduce-pdf-size-for-visa-application',
        type: 'use-case',
        title: 'Reduce PDF Size for Visa Application',
        description: 'Compress passport scans and bank statements for visa uploads. Meets government portal limits.',
        heroBadge: 'VISA APPROVED',
        heroTitleStart: 'Reduce PDF for',
        heroTitleEnd: 'Visa Apps',
        heroSubtitle: 'Government portals have strict limits. Compress your passport and bank docs securely.'
    },
    {
        slug: 'shrink-pdf-for-email-attachment',
        type: 'use-case',
        title: 'Shrink PDF for Email Attachment',
        description: 'Send large PDFs via email. Shrink them below 25MB limits instantly.',
        heroBadge: 'EMAIL FRIENDLY',
        heroTitleStart: 'Shrink PDF for',
        heroTitleEnd: 'Email',
        heroSubtitle: 'Stop getting "File too large" errors. Shrink your PDF to fit any email attachment.'
    },
    {
        slug: 'compress-bank-statement-pdf',
        type: 'use-case',
        title: 'Compress Bank Statement PDF - Secure',
        description: 'Securely compress bank statements. 100% Client-side, no data sent to servers.',
        heroBadge: 'BANK LEVEL PRIVACY',
        heroTitleStart: 'Compress',
        heroTitleEnd: 'Bank Statements',
        heroSubtitle: 'Financial privacy is paramount. We compress your statements locally in your browser. Totally safe.'
    },
    {
        slug: 'compress-thesis-pdf-online',
        type: 'use-case',
        title: 'Compress Thesis PDF Online',
        description: 'Compress large academic thesis files for university submission portals.',
        heroBadge: 'ACADEMIC',
        heroTitleStart: 'Compress',
        heroTitleEnd: 'Thesis',
        heroSubtitle: 'Hundreds of pages? No problem. specialized compression for large academic works.'
    },
    {
        slug: 'compress-portfolio-pdf-high-quality',
        type: 'use-case',
        title: 'Compress Portfolio PDF - High Quality',
        description: 'Shrink architecture and design portfolios without ruining images.',
        heroBadge: 'DESIGNER CHOICE',
        heroTitleStart: 'Compress Portfolio',
        heroTitleEnd: 'High Quality',
        heroSubtitle: 'Your work deserves to look good. Smart compression that respects your visuals.'
    },
    {
        slug: 'optimize-pdf-for-kindle',
        type: 'use-case',
        title: 'Optimize PDF for Kindle / E-Readers',
        description: 'Make PDFs faster and lighter for Kindle and tablet reading.',
        heroBadge: 'READER FRIENDLY',
        heroTitleStart: 'Optimize PDF for',
        heroTitleEnd: 'Kindle',
        heroSubtitle: 'Stop the lag. Optimize heavy PDFs for a smooth reading experience on e-ink devices.'
    },
    {
        slug: 'flatten-pdf-for-printing',
        type: 'use-case',
        title: 'Flatten/Compress PDF for Printing',
        description: 'Prepare PDFs for print. Reduce file size for faster spooling and printing.',
        heroBadge: 'PRINT READY',
        heroTitleStart: 'Compress PDF for',
        heroTitleEnd: 'Printing',
        heroSubtitle: 'Faster print spooling, fewer errors. Optimize your detailed prepress files.'
    },
    {
        slug: 'reduce-pdf-for-whatsapp-sharing',
        type: 'use-case',
        title: 'Reduce PDF for WhatsApp Sharing',
        description: 'Make PDFs small enough to share quickly on WhatsApp and mobile data.',
        heroBadge: 'MOBILE SHARE',
        heroTitleStart: 'Reduce PDF for',
        heroTitleEnd: 'WhatsApp',
        heroSubtitle: 'Don\'t use up all your data. Compress files for instant sharing on chat apps.'
    }
];
