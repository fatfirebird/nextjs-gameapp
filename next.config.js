module.exports = {
  images: {
    domains: ['media.rawg.io'],
  },
  serverRuntimeConfig: {
    RAWG_API_KEY: process.env.API_KEY,
  },
  publicRuntimeConfig: {
    RAWG_API_KEY: process.env.API_KEY,
  },
}
