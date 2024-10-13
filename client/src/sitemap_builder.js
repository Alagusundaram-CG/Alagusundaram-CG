// generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { resolve } = require('path');

// Define your website base URL
const baseUrl = 'https://www.chennaigames.com';

// Define your routes (You can automate this if you have dynamic routes)
const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/home', changefreq: 'daily', priority: 1.0 },
    { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
    { url: '/ourgames', changefreq: 'monthly', priority: 0.8 },
    { url: '/mrracer', changefreq: 'monthly', priority: 0.8 },
    { url: '/mathking', changefreq: 'monthly', priority: 0.8 },
    { url: '/emojismasher', changefreq: 'monthly', priority: 0.8 },
    { url: '/por', changefreq: 'monthly', priority: 0.8 },
    { url: '/careers', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/games', changefreq: 'monthly', priority: 0.8 }
];

// Create a SitemapStream instance
const sitemap = new SitemapStream({ hostname: baseUrl });

// Add each link to the sitemap
links.forEach(link => sitemap.write(link));

// End the sitemap stream
sitemap.end();

// Generate the sitemap
streamToPromise(sitemap).then(data => {
    fs.writeFileSync(resolve(__dirname, '../public', 'sitemap.xml'), data);
    console.log('Sitemap written to public/sitemap.xml');
}).catch(err => {
    console.error('Error generating sitemap', err);
});
