<template>
  <section :key="$route.params.post">
    <div>
      <header class="mt-6">
        <h3 class="font-bold text-4xl text-gray-800">{{ attributes.title }}</h3>
        <blockquote class="border-l-4 border-gray-500 bg-gray-100 p-3 pl-4 my-4 italic">{{ attributes.description }}</blockquote>
        <p class="text-sm text-gray-500">
          Published on <time>{{require('moment')(attributes.ctime).format('YYYY/MM/DD')}}</time>
        </p>
        <figure v-if="attributes.cover_image">
          <img :src="require(`~/assets/images/articles/${attributes.cover_image}`)" :alt="attributes.cover_image_cp" loading="lazy"/>
        </figure>
      </header>
      <article class="markdown">
        <div class="mt-2" v-html="content"></div>
      </article>
      <div>
        <nuxt-link class="font-bold text-purple-500" to="/blog/">Back to blog</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
const fm = require("front-matter");
const md = require("markdown-it")({
  html: true,
  typographer: true
}).use(require("markdown-it-highlightjs"), { auto: true });

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`);
    let res = fm(fileContent.default);
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    };
  },
  head() {
    return {
      title: this.attributes.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.attributes.description
        }
      ]
    };
  }
};
</script>
