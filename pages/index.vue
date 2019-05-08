<template>
  <div>
    <SiteHero />
    <PersonalBio />
    <Roles />
  </div>
</template>

<script>
import PersonalBio from "~/components/PersonalBio";
import Roles from "~/components/Roles";
import SiteHero from "~/components/SiteHero";
import LatestArticles from "~/components/LatestArticles";

export default {
  components: {
    PersonalBio,
    Roles,
    SiteHero,
    LatestArticles
  }
}
</script>


<style>

</style>
