export default ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https:",
            env('CDN_URL'),            
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            env('CDN_URL'),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* End of snippet */
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
