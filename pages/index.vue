<template>
  <div>
    <SiteHero/>
    <ArticleList :isPaginated="false" :postsPerPage="2"/>
    <PersonalBio/>
    <Roles/>
  </div>
</template>

<script>
import PersonalBio from "~/components/PersonalBio";
import Roles from "~/components/Roles";
import SiteHero from "~/components/SiteHero";
import ArticleList from "~/components/ArticleList";

export default {
  components: {
    PersonalBio,
    Roles,
    SiteHero,
    ArticleList
  }
};
</script>


<style>
</style>
