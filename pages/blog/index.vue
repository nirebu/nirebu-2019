<template>
  <div>
    <div v-for="(post,key) in bloglist" :key="key">
      {{ post }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, error, payload }) {

    function getSlugs(post, _) {
      let slug = post.substr(0, post.lastIndexOf('.'));
      return `/blog/${slug}`;
    }

    const glob = require('glob');
    const fm = require("front-matter");

    const files = glob.sync('**/*.md',{cwd: 'articles'});

    const bloglist = (
      await Promise.all(
        files.map(
          async file => {
            const fileContent = await import(`~/articles/${file}`);
            let attrs = fm(fileContent.default).attributes;
            let slug = file.substr(0, file.lastIndexOf('.'));
            slug = slug.substr(slug.lastIndexOf('_')+1);
            attrs.slug = slug;
            return attrs
          }
        )
      )
    )

    // sort based by date descending
    bloglist.sort( (a,b) => {
      let dateA = new Date(a.ctime), dateB = new Date(b.ctime);
      return dateB-dateA;
    })
    if(payload) return {data: "zilch"};
    else return { bloglist };
  }
}
</script>
