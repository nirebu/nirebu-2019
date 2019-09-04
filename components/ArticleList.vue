<template>
  <section>
    <h3 class="font-bold text-3xl lg:text-4xl text-gray-800 px-3">
      Latest posts
    </h3>
    <article
      v-for="(post,key) in bloglist" :key="key"
      class="py-2 px-3 rounded-lg hover:bg-gray-200 hover:shadow-inner"
      :class="key == bloglist.length -1 ? '' : 'mb-1'"
    >
      <nuxt-link :to="`/blog/${post.slug}`">
      <div v-if="post.cover_image">
          <figure>
            <img
              :src="require(`~/assets/images/articles/${post.cover_image}?size=640`)"
              :alt="post.cover_image_cp"
              loading="lazy"
            >
          </figure>
      </div>
      <div>
        <h4 class="text-xl font-normal text-purple-600">
          {{ post.title }}
        </h4>
        <p class="mt-1 text-sm text-gray-700">{{ post.description }}</p>
        <p class="mt-1 text-sm text-gray-600">Published on {{ post.ctime }}</p>
      </div>
      </nuxt-link>
    </article>
    <div
      v-if="$store.state.bloglist.length > postsPerPage && !isPaginated"
      class="px-3"
    >
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
