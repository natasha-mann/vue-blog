<script lang="ts">
import Blog from "../typeDefs/index";
import Comment from "../components/Comment.vue";

export default {
  components: { Comment },
  data() {
    return {
      id: this.$route.params.id,
      blog: {} as Blog,
    };
  },
  async beforeMount() {
    const response = await fetch(`http://localhost:3000/api/posts/${this.id}`);
    const data = await response.json();
    console.log(data);
    this.blog = data;
  },
};
</script>

<template>
  <div class="blog-post">
    <div class="blog-header">
      <h1>{{ blog.title }}</h1>
    </div>
    <div class="blog-body">
      <p>{{ blog.body }}</p>
    </div>

    <div class="comments-header">Comments</div>
    <div class="comments-body">
      <div v-for="comment in blog.comments">
        <Comment :comment="comment" />
      </div>
    </div>
  </div>
</template>

<style>
.blog-post {
  width: 80%;
  margin: 3rem auto;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.blog-header {
  border-radius: 10px 10px 0 0;
  padding: 0.1rem;
  background-color: #b0d4ce;
  font-weight: bold;
}

.blog-body {
  padding: 1rem 2rem;
  line-height: 1.5rem;
}

.comments-header {
  background-color: #e3f1ef;
  padding: 1rem;
}

.comments-body {
  padding: 1rem;
}
</style>
