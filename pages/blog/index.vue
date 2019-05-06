<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9-tablet">
          <div v-for="(post,key) in bloglist" :key="key" class="card">
            <div class="card-image">
              <figure class="image">
                <nuxt-link :to="post.slug">
                  <img :src="post.cover_image" :alt="post.cover_image_cp" loading="lazy">
                </nuxt-link>
              </figure>
            </div>
            <div class="card-content">
              <nuxt-link :to="post.slug">
                <p class="title">{{ post.title }}</p>
              </nuxt-link>
              <p class="subtitle">{{ post.description }}</p>
              <p class="subtitle">{{ post.ctime }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData( { context,store } ) {
    let bloglist;

    if (!( store.state.blog.list.length > 0 ))
    {
      const fm = require('front-matter');
      var files = await require.context('~/articles/', false, /\.md$/)
      var posts = files.keys().map(function(key){
        var res = files(key);
        res.slug = key.slice(2, -3);
        return res;
      }).map(function(post){
        let attributes = fm(post.default).attributes;
        attributes.slug = post.slug;
        return attributes
      });

      store.commit("blog/set", posts);
    }
    return { bloglist: store.state.blog.list }
  }
};
</script>
