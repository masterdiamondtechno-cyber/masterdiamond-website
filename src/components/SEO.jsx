import { useEffect } from 'react';

const SITE_URL = 'https://masterdiamond.in';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

export default function SEO({
  title,
  description,
  keywords,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
}) {
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = title.includes('Master Diamond')
    ? title
    : `${title} | Master Diamond`;
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    // 1. Page Title
    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMeta = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'googlebot', 'index, follow');

    // 3. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', 'Master Diamond');

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // 6. Structured Data (JSON-LD)
    let jsonLdScript = document.getElementById('dynamic-page-jsonld');
    if (jsonLdString) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'dynamic-page-jsonld';
        jsonLdScript.type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = jsonLdString;
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    return () => {
      const script = document.getElementById('dynamic-page-jsonld');
      if (script) script.remove();
    };
  }, [fullTitle, description, keywords, canonicalUrl, image, type, jsonLdString]);

  return null;
}
