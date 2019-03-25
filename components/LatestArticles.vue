<template>
  <section class="section columns is-centered">
    <div class="column is-6-desktop">
      <div class="card" v-for="(post,key) in posts" :key="key">
        <div class="card-header-title">{{post.title}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { title: "titolo 1", slug: "titolo-1", content: "test content" },
        { title: "titolo 2", slug: "titolo-2", content: "test content 2" }
      ]
    };
  }
};
</script>

<style>
</style>
