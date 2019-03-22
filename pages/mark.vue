<template>
  <section class="container">
    <div>
      <div v-html="test"></div>
    </div>
  </section>
</template>

<script>
import test1 from 'static/test1.md'
export default {
  components: {
  },
  computed: {
    test () {
      return test1
    }
  }
}
</script>

<style>

</style>
