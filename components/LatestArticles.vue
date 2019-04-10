<template>
  <section class="section columns is-centered">
    <div class="column is-6-desktop">
      <div class="card m-b-lg" v-for="(post,key) in posts" :key="key">
        <div class="card-image">
          <figure class="image is-16by9">
            <img :src="post.data.image.url" alt="placeholder">
          </figure>
        </div>
        <div class="card-header-title">{{post.data.title[0].text}}</div>
        <div class="card-content">
          <div class="content">
            <p v-for="(paragraph,key) in post.data.content" :key="key">
              {{ paragraph.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'posts'
  ]
};
</script>

<style>
</style>
