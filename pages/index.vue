<template>
  <div>
    <SiteHero />
    <PersonalBio />
    <Roles />
  </div>
</template>

<script>
import PersonalBio from "../components/PersonalBio";
import Roles from "../components/Roles";
import SiteHero from "../components/SiteHero";

export default {
  components: {
    PersonalBio,
    Roles,
    SiteHero
  }
}
</script>


<style>

</style>
