<template>
  <div class="main">
    <NavBar />
    <nuxt />
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
import SiteFooter from '../components/SiteFooter';

export default {
  components:{
    NavBar,
    SiteFooter
  }
}
</script>


<style>

</style>
