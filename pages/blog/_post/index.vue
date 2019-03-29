<template>
  <section class="section single-post content" v-html="content.html"></section>
</template>

<script>
export default {
  async asyncData({ params }) {
    const content = await import(`~/static/articles/${params.post}.md`);
    return {
      content
    };
  },
  head() {
    return { title: this.content.attributes.title };
  }
};
</script>
