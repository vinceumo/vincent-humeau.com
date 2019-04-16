const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Vincent Humeau - Web Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ]
  },

  meta: {
    theme_color: "#212121"
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#212121" },

  /*
   ** Global CSS
   */
  css: ["@/assets/styles/global.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/filters.js"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "@nuxtjs/markdownit", "@nuxtjs/style-resources"],

  purgeCSS: {
    // your settings here to override defaults
  },

  styleResources: {
    scss: ["./assets/styles/_global-style-resources.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  workbox: {
    offlinePage: "/offline/index.html"
  },

  markdownit: {
    html: true
  }
};
