//const pkg = require("./package");
const glob = require("glob");
const path = require("path");
let files = glob.sync("**/*.md", { cwd: "articles" });

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf("."));
  return `/blog/${slug}`;
}

module.exports = {
  mode: "universal",
  head: {
    title: "Nicolò Rebughini",
    titleTemplate: "%s - Nicolò Rebughini",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I'm an email deliverability tech. In my spare time I contribute to open source projects and develop apps to scratch my proverbial itches."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "vuejs, nuxt, sysadmin, backend, ansible, mongodb, docker, postfix, tailwindcss, tailwind, devops"
      },
      { name: "robots", hid: "robots" , content: "index, follow" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@nirebu" },
      { name: "twitter:url", content: "https://nirebu.com" },
      { name: "twitter:description", content: "I'm an email deliverability tech. In my spare time I contribute to open source projects and develop apps to scratch my proverbial itches" },

      { name: "og:url", content: "https://nirebu.com" },
      { name: "og:locale", content: "en_GB" },
      { name: "og:description", content: "I'm an email deliverability tech. In my spare time I contribute to open source projects and develop apps to scratch my proverbial itches." },
      { name: "og:title", content: "Nicolò Rebughini - Devops" },
      { name: "og:type", content: "website" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    htmlAttrs: {
      lang: "en-GB"
    }
  },
  loading: false,
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  css: ["~assets/tailwind.scss"],
  plugins: [],
  modules: [
    "@nuxtjs/google-analytics",
    "@nuxtjs/moment",
    [
      "@nuxtjs/sitemap",
      {
        hostname: 'https://nirebu.com',
        gzip: true,
      }
    ],
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  googleAnalytics: {
    id: "UA-133940660-1"
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/,
        use: ["raw-loader"]
      });
    }
  },
  generate: {
    routes: function() {
      return files.map(getSlugs);
    }
  }
};
