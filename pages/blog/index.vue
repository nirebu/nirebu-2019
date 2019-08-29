<template>
  <ArticleList :isPaginated="true" :postsPerPage="10" />
</template>

<script>
import ArticleList from "~/components/ArticleList";

export default {
  components: {
    ArticleList
  }
};
</script>
