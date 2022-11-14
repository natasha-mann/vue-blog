<script lang="ts">
import BlogCard from "../components/BlogCard.vue";
import Blog from "../typeDefs/index";

export default {
  data() {
    return {
      blogs: [] as Blog[],
    };
  },
  async beforeMount() {
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();
    console.log(data);
    this.blogs = data;
  },
  components: { BlogCard },
};
</script>

<template>
  <h1>HOME</h1>
  <div v-if="blogs.length">
    <div v-for="blog in blogs">
      <BlogCard :blog="blog" />
    </div>
  </div>
</template>
