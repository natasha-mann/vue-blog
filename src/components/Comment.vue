<script lang="ts">
export default {
  props: ["comment"],
  methods: {
    formatDate(date: Date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<template>
  <p>{{ comment.message }}</p>
  <p>{{ comment.user.username }}</p>
  <p>Posted on: {{ formatDate(comment.createdAt) }}</p>
</template>
