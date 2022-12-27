
// ## 1
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'custom',
    // loaderFile: './imageLoader/loader.js',
    // domains:['upload.wikimedia.org' ,  "localhost"],
    domains:["localhost"],
  },
}

module.exports = nextConfig; 

// ## 2
// const withImages = require("next-images");
// const { createSecureHeaders } = require("next-secure-headers");
// module.exports = withImages({
//   async headers() {
//     return [{ source: "/(.*)", headers: createSecureHeaders() }];
//   },
// });

// ## 3
// module.exports = {
//   images: {
//     domains:['www.google.com'] , 
//     // remotePatterns: [
//     //   {
//     //     protocol: 'https',
//     //     hostname: 'www.google.com',
//     //     port: '',
//     //     // pathname: '/image/upload/**',
//     //   },
//     // ],
//   },
// }
