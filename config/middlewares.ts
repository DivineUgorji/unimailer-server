// export default [
//   "strapi::logger",
//   "strapi::errors",
//   // {
//   //   name: "strapi::cors",
//   //   config: {
//   //     origin: ["http://localhost:3000", "https://your-app.vercel.app"],
//   //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
//   //     headers: ["Content-Type", "Authorization", "Origin", "Accept"],
//   //   },
//   // },
//   "strapi::security",
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];
/////////////////////////////////
export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "https://unimailer-server-app.onrender.com",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
