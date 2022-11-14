<script lang="ts">
export default {
  props: ["blog"],
  data() {
    return {
      id: this.blog.id,
    };
  },
  methods: {
    shortenBody(body: string) {
      return body.split(" ").slice(0, 30).join(" ");
    },
    formatDate(date: Date) {
      return new Date(date).toLocaleDateString();
    },
    viewBlog() {
      console.log(this.blog.id);
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ blog.title }}</h2>
    </div>
    <div class="card-body">
      <p>{{ shortenBody(blog.body) }}...</p>
      <div class="btnContainer">
        <router-link
          :to="{ name: 'Blog', params: { id: blog.id } }"
          class="blogBtn"
          >Continue Reading</router-link
        >
      </div>
    </div>
    <div class="card-footer">
      Posted by {{ blog.user.username }} on {{ formatDate(blog.createdAt) }}
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 80%;
  margin: 2rem auto;
}
.card-header {
  border-radius: 10px 10px 0 0;
  padding: 0.1rem;
  background-color: #b0d4ce;
  font-weight: bold;
}

.card-body {
  padding: 1rem;
}
.card-footer {
  border-radius: 0 0 10px 10px;
  padding: 1rem;
  background-color: #b0d4ce;
}

.btnContainer {
  margin: 2rem 0 1rem 0;
}

.blogBtn {
  background-color: #e8998d;
  border: 0;
  padding: 10px 20px;

  color: white;
  border-radius: 20px;
  text-decoration: none;
}

.blogBtn:hover {
  cursor: pointer;
  background-color: #ae746b;
}
</style>
