<template>
  <div>
  <LatestArticles />
  {{ blogPosts }}
  </div>
</template>

<script>
import LatestArticles from '~/components/LatestArticles';

export default {
  components: {
    LatestArticles
  },
  async asyncData({$axios}){
    const blogPosts = await $axios.$get('/api/bloglist');
    return {blogPosts}
  }
}
</script>
