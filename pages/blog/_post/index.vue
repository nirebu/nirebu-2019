<template>
  <section class="section single-post content" v-html="content.html"></section>
</template>

<script>
export default {
  async asyncData({ params }) {
    const content = await import(`~/articles/${params.post}.md`);
    return {
      content
    };
  },
  head() {
    return {
      titleTemplate: `${this.content.attributes.title} | %s`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.content.attributes.description
        }
      ]
    };
  }
};
</script>
