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
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      "nuxt-sass-resources-loader",
      [
        "@/assets/styles/vendors/_family.scss",
        "@/assets/styles/functions/**/*.scss",
        "@/assets/styles/mixins/**/*.scss",
        "@/assets/styles/variables/**/*.scss"
      ]
    ],
    "@nuxtjs/pwa"
  ],

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
  }
};
