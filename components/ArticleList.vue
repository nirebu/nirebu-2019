<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9-desktop">
          <header class="title nirebu-title has-background-gradient has-text-centered">
            Blog
          </header>
          <article v-for="(post,key) in bloglist" :key="key" class="columns is-centered">
            <div class="column is-3-desktop">
              <nuxt-link :to="`/blog/${post.slug}`">
                <figure class="image">
                  <img
                    :src="require(`~/assets/images/articles/${post.cover_image}?size=640`)"
                    :alt="post.cover_image_cp"
                    loading="lazy"
                  >
                </figure>
              </nuxt-link>
            </div>
            <div class="column is-7-desktop">
              <p class="title">
                <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
              </p>
              <p class="subtitle">{{ post.description }}</p>
              <p class="small">Published on {{ post.ctime }}</p>
              <p class="subtitle">
                <nuxt-link :to="`/blog/${post.slug}`">Keep reading &rarr;</nuxt-link>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    bloglist() {
      if ( ! this.isPaginated ) {
        return this.$store.state.bloglist.slice(0,this.postsPerPage);
      } else {
        return this.$store.state.bloglist;
      }
    },
    totalPages() {
      return this.isPaginated ? Math.ceil(this.$store.state.bloglist.length / this.postsPerPage) : 1
    }
  },
  props: {
    isPaginated: Boolean,
    postsPerPage: Number
  }
};
</script>

<style>
.preview-image {
  width: 12vw;
}
</style>