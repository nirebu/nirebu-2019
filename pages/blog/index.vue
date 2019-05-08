<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9-tablet">
          <article v-for="(post,key) in bloglist" :key="key" class="columns">
            <div class="column is-4-desktop">
              <nuxt-link :to="post.slug">
                <figure class="image">
                  <img
                    :src="require(`~/assets/images/articles/${post.cover_image}?size=640`)"
                    :alt="post.cover_image_cp" loading="lazy"
                  />
                </figure>
              </nuxt-link>
            </div>
            <div class="column is-8">
              
                <p class="title">
                  <nuxt-link :to="post.slug">{{ post.title }}</nuxt-link>
                </p>
                <p class="subtitle">{{ post.description }}</p>
                <p class="small bottom">Published on {{ post.ctime }}</p>
              
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
      return this.$store.state.bloglist
    }
  }
};
</script>

<style>
.preview-image {
  width: 12vw;
}

.bottom {
  margin-top: auto ;
}
</style>
