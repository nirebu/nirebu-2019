<template>
  <section class="section columns is-centered">
    <div class="column is-6-desktop">
      <div class="card m-b-lg" v-for="(post,key) in posts" :key="key">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="placeholder">
          </figure>
        </div>
        <div class="card-header-title">{{post.title}}</div>
        <div class="card-content">
          <div class="content">
            <p>{{ post.content }}</p>
          </div>
        </div>
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
