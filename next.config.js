module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "https://unsplash.com/",
      "https://picsum.photos/",
      "picsum.photos",
      "i.scdn.co",
      "image.tmdb.org",
      "www.themoviedb.org",
      "developer.spotify.com",
    ],
  },
  reactStrictMode: true,
};
