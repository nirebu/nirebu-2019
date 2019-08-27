<template>
  <section :key="$route.params.post">
    <div>
      <div>
        <div>
          <header>
            <h1>{{ attributes.title }}</h1>
            <blockquote>{{ attributes.description }}</blockquote>
            <p>
              Published on <time>{{require('moment')(attributes.ctime).format('Do MMM YYYY')}}</time>
            </p>
            <figure v-if="attributes.cover_image">
              <img :src="require(`~/assets/images/articles/${attributes.cover_image}`)" :alt="attributes.cover_image_cp" loading="lazy"/>
            </figure>
          </header>
          <article class="markdown">
            <div v-html="content"></div>
          </article>
          <div>
            <nuxt-link to="/blog/">&larr; Back to blog</nuxt-link>
          </div>
        </div>
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
