<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <div class="max-w-4xl mx-auto px-12 lg:px-0 flex-grow">
      <nuxt :key="$route.fullPath" />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar';
import SiteFooter from '~/components/SiteFooter';

export default {
  components:{
    NavBar,
    SiteFooter
  }
}
</script>
