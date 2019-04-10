<template>
  <div>
    <LatestArticles :posts="result.results" />
  </div>
</template>

<script>
import Prismic, { api } from "prismic-javascript";
import LatestArticles from "~/components/LatestArticles";

export default {
  components: {
    LatestArticles
  },
  async asyncData(context) {
    let apiEndPoint = "https://nirebucom.cdn.prismic.io/api/v2";
    const api = await Prismic.getApi(apiEndPoint);
    const result = await api.query('');

    return {result};
  }
};
</script>
