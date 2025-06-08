// seo.js - SEO Boost Script for Sumit Waghmare

(function () {
  const head = document.head;

  // --- Meta tags ---
  const metaTags = [
    { name: 'description', content: 'Sumit Waghmare is the Founder and CEO of CodeElevate Academy and Co-Founder of SuPrazo Technologies, leading 10+ international tech communities and empowering the next generation of developers.' },
    { name: 'keywords', content: 'Sumit Waghmare, CodeElevate Academy, SuPrazo Technologies, Founder of CodeElevate, CEO Sumit Waghmare, tech entrepreneur India, Sumit Waghmare LinkedIn, Suprazo' },
    { name: 'author', content: 'Sumit Waghmare' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Sumit Waghmare - Founder & CEO of CodeElevate Academy' },
    { property: 'og:description', content: 'Co-Founder of SuPrazo Technologies, speaker, and tech visionary empowering 10+ global developer communities.' },
    { property: 'og:image', content: 'https://foundersumitwaghmare.netlify.app/assets/profile.jpg' }, // replace with actual profile image
    { property: 'og:url', content: window.location.href },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];

  metaTags.forEach(tagInfo => {
    const meta = document.createElement('meta');
    Object.entries(tagInfo).forEach(([key, val]) => meta.setAttribute(key, val));
    head.appendChild(meta);
  });

  // --- Title tag ---
  const title = document.createElement('title');
  title.textContent = 'Sumit Waghmare – CEO of CodeElevate Academy';
  head.appendChild(title);

  // --- Canonical link ---
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = window.location.href;
  head.appendChild(canonical);

  // --- Structured Data (JSON-LD) ---
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sumit Waghmare",
    "url": "https://foundersumitwaghmare.netlify.app/",
    "image": "https://foundersumitwaghmare.netlify.app/assets/profile.jpg", // Replace with your actual image
    "sameAs": [
      "https://suprathon.suprazotech.in/",
      "http://suprazotech.in/",
      "https://foundersumitwaghmare.netlify.app/",
      "https://www.linkedin.com/in/sumit-waghmare-49b3b2326"
    ],
    "jobTitle": "Founder and CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "CodeElevate Academy"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Your University Name" // optional
    },
    "knowsAbout": [
      "Web Development", "Startup Growth", "JavaScript", "Community Leadership", "Tech Mentorship"
    ],
    "description": "Sumit Waghmare is the Founder and CEO of CodeElevate Academy and Co-Founder of SuPrazo Technologies. He leads 10+ international communities and is passionate about building scalable tech education solutions.",
    "birthPlace": "India"
  });

  head.appendChild(script);
})();
