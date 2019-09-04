<template>
  <footer class="text-center pb-2 pt-4 shadow-inner">
    <div class="flex justify-center">
      <div v-for="(social,key) in socials" :key="key" :class="key === socials.length - 1 ? '' : 'mr-6'">
        <a :href="social.link" target="_blank" :aria-label="social.label" rel="noopener" class="text-gray-700 hover:text-gray-900">
          <font-awesome-icon class="text-2xl" :icon="[ 'fab' , social.icon ]" />
        </a>
      </div>
    </div>
    <div class="mt-2 text-sm text-gray-600">
      <p><a class="font-semibold text-gray-700 hover:underline" href="https://github.com/nirebu/nirebu-2019">Coded by</a> Nicol&ograve; Rebughini with <a rel="noopener" class="font-semibold hover:underline text-gray-700" href="https://nuxtjs.org/">Nuxtjs</a> + <a class="font-semibold hover:underline text-gray-700" rel="noopener" href="https://tailwindcss.com/">Tailwind CSS</a></p>
      <p>Hosted on <a class="font-semibold hover:underline text-gray-700" href="https://netlify.com">Netlify</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { link: "https://github.com/nirebu", icon: "github" , label: "Check my Github profile" },
        { link: "https://dev.to/nirebu", icon: "dev" , label: "My blog on Dev.to" },
        { link: "https://twitter.com/nirebu", icon: "twitter" , label: "Find me on Twitter" },
        { link: "https://linkedin.com/in/nicolo-rebughini", icon: "linkedin" , label: "Find me on Linkedin" },
      ]
    };
  }
};
</script>
