<template>
  <div>
    <div v-for="(post,key) in bloglist" :key="key">{{ post }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  async asyncData({ params, store }) {
    let bloglist;

    function getSlugs(post, _) {
      let slug = post.substr(0, post.lastIndexOf("."));
      return `/blog/${slug}`;
    }

    if (!(store.state.blog.list !== undefined && store.state.blog.list.length > 0 )) {
      const glob = require("glob");
      const fm = require("front-matter");

      const files = glob.sync("**/*.md", { cwd: "articles" });

      bloglist = await Promise.all(
        files.map(async file => {
          const fileContent = await import(`~/articles/${file}`);
          let attrs = fm(fileContent.default).attributes;
          let slug = file.substr(0, file.lastIndexOf("."));
          slug = slug.substr(slug.lastIndexOf("_") + 1);
          attrs.slug = slug;
          return attrs;
        })
      );

      // sort based by date descending
      bloglist.sort((a, b) => {
        let dateA = new Date(a.ctime),
          dateB = new Date(b.ctime);
        return dateB - dateA;
      });
      store.commit("blog/set", bloglist);
    }
    return { bloglist: store.state.blog.list };
  }
};
</script>
