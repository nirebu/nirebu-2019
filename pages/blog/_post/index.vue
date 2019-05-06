<template>
  <section :key="$route.params.post" class="section">
    <div class="container">
      <div class="columns is-centered">
        <article class="blog column is-9-tablet">
          <header class="title">{{ attributes.title }}</header>
          <div class="subtitle">Published on <time>{{attributes.ctime}}</time> by {{ attributes.author }}</div>
          <div v-html="content" class="blog-content content"></div>
          <div class="level">
            <nuxt-link to="/blog/" class="level-left">&larr; Back to blog</nuxt-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
const fm = require("front-matter");
const md = require("markdown-it")({
  html: true,
  typographer: true
}).use(require('markdown-it-highlightjs'),{auto:true});

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
      title:  this.attributes.title,
      meta: [
        { hid: 'description' , name: 'description' , content: this.attributes.description }
      ]
    }
  }
};
</script>

<style scoped>
.blog {
  margin: 2em;
}

.blog .subtitle {
  font-size: 1rem;
}

.blog-content >>> h1 {
    font-size: 1.5rem;
}
</style>

