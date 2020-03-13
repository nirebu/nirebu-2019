<template>
  <div>
    <SiteHero class="mt-4"/>
    <Projects class="mt-4" />
    <ArticleList class="mt-4" :isPaginated="false" :postsPerPage="2"/>
  </div>
</template>

<script>
import SiteHero from "~/components/SiteHero";
import ArticleList from "~/components/ArticleList";
import Projects from "~/components/Projects";

export default {
  components: {
    SiteHero,
    ArticleList,
    Projects,
  },
  head() {
    return {
      title: "Home",
    };
  }
};
</script>


<style>
</style>
