import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sign-up-here',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/industry',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/voythosnews',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/voythosnews/lifex-accelerator-win',
        destination: '/news/May-25-24',
        permanent: true,
      },
      {
        source: '/industry/category/Predictive\\+AI',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/prophylactic\\+aortic\\+surgery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/adminstrative\\+ai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/voythosnews/life-science-forum',
        destination: '/news/Nov-11-24',
        permanent: true,
      },
      {
        source: '/industry/tag/healthcare',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/prophylactic',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/threshold',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/vascular',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/category/Aortic\\+Dissection\\+AI',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/patient\\+monitoring',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/administration',
        destination: '/',
        permanent: true, 
      },
      {
        source: '/industry/tag/improve\\+efficiency',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/cardiovascular',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/patient\\+outcome',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/aortic\\+surgery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/cardiology',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/tag/efficiency',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/evidence-lower-threshold-aortic-surgery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/ai-predictive-analytics-healthcare',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industry/multimodal-ai-aortic-dissection-care',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/the-paradox-of-clinical-decision-support-tools-navigating-the-challenges-of-over-alerting-and-notification-fatigue',
        destination: '/',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
