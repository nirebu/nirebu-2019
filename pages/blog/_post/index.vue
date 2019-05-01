<template>
  <div :key="$route.params.post">
    <div class="container">
      <div class="columns is-centered">
        <div class="blog column is-10-tablet">
          <div class="title">{{ attributes.title }}</div>
          <div class="author">Written by {{ attributes.author }}</div>
          <div v-html="content" class="blog-content content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fm = require("front-matter");
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`);
    let res = fm(fileContent.default);
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    };
  }
};
</script>

<style scoped>
.blog {
  margin: 2em;
}

.blog-content >>> h1 {
    font-size: 1.5rem;
}
</style>

