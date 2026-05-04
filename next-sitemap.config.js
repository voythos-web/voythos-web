/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.voythos.ai',
  generateRobotsTxt: false, // we maintain public/robots.txt manually
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
};