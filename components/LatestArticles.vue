<template>
  <section class="section columns is-centered">
    <div class="column is-6-desktop">
      <div class="card m-b-lg" v-for="(post,key) in lastPosts" :key="key">
        <div class="card-image">
          <figure class="image is-16by9">
            <img :src="post.cover_image" alt="placeholder">
          </figure>
        </div>
        <div class="card-header-title">{{post.title}}</div>
        <div class="card-content">
          <div class="content">
            {{ post.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    lastPosts() {
      return this.$store.state.bloglist.slice(0,2)
    }
  }
};
</script>

<style>
</style>
