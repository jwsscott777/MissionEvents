<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: {
    SinglePost,
  },
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
