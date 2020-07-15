const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: '',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title: 'Core Resources',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/nutboltu" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/getting-started', // add trailing slash if enabled above
      '/performance-vs-scalability',
      '/latency-vs-throughput',
      '/availability-vs-consistency',
      '/consistency-patterns',
      '/availability-patterns',
      '/domain-name-system',
      '/content-delivery-network',
      '/load-balancer',
      '/reverse-proxy',
      '/application-layer',
      '/database',
      '/cache',
      '/asynchronism',
      '/communication',
      '/security',
      '/appendix',
      '/credits'
    ],
    collapsedNav: [
      '/database', // add trailing slash if enabled above
    ],
    links: [{ text: 'System Design Premier', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title: 'Core Resources'
  },
  siteMetadata: {
    title: 'System Design Premier | Resources',
    description: 'Gathering all system design related resources into one place',
    ogImage: null,
    docsLocation: '/content',
    favicon: '',
    githubUrl: 'https://github.com/nutboltu/system-design-premier-site',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'System Design Premier',
      short_name: 'SystemDesignPremier',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
