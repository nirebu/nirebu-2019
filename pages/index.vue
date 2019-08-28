<template>
  <div>
    <SiteHero/>
    <Projects />
    <ArticleList class="mt-8" :isPaginated="false" :postsPerPage="2"/>
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
  }
};
</script>


<style>
</style>
