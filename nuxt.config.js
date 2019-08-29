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
          "Hi, I'm Nicolò, a Linux system administrator focusing on email deliverability, system standardisation, deployment automation and containerisation."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "vuejs, nuxt, javascript, sysadmin, frontend, ansible, mongodb, docker, postfix"
      },
      { name: "robots", hid: "robots" , content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@nirebu" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      class: ""
    },
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
