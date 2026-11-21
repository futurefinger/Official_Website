import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  schemaData?: Record<string, unknown>;
  keywords?: string[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  schemaData,
  keywords = [
    'Future Finger Technologies',
    'IT Solutions Company',
    'Software Development Company',
    'AI Automation',
    'XShield Anti Ransomware',
    'HRLord HRMS',
    'Enterprise Cloud Systems',
    'Cybersecurity Solutions',
    'Bespoke Software Engineering'
  ]
}) => {
  const location = useLocation();
  const siteUrl = 'https://futurefinger.github.io/Official_Website';
  const fullUrl = canonicalUrl || `${siteUrl}${location.pathname}`;
  const fullTitle = `${title} | Future Finger Technologies`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 4. Standard SEO Meta
    setMetaTag('description', description);
    setMetaTag('keywords', keywords.join(', '));
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('author', 'Future Finger Technologies');

    // 5. Open Graph Meta
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'Future Finger Technologies', true);
    setMetaTag('og:image', `${siteUrl}/images/og-card.png`, true);

    // 6. Twitter Card Meta
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', `${siteUrl}/images/og-card.png`);

    // 7. Inject / Update Schema.org JSON-LD
    const baseOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Future Finger Technologies',
      url: siteUrl,
      logo: `${siteUrl}/favicon/icon.svg`,
      description: 'Future Finger Technologies is an enterprise IT solutions, software development, AI automation, and sovereign cyber defense engineering company.',
      email: 'futurefingerindia@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'New Delhi'
      },
      sameAs: [
        'https://github.com/futurefinger'
      ]
    };

    const finalSchema = schemaData || baseOrganizationSchema;

    let scriptTag = document.getElementById('dynamic-schema-ld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-schema-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(finalSchema);

    return () => {
      // Optional cleanup if needed
    };
  }, [fullTitle, description, fullUrl, ogType, schemaData, keywords]);

  return null;
};
