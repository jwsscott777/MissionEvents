<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();
    return { posts, error };
  },
};
</script>

<style>
.home {
  margin: 0, auto;
  padding: 10px;
  background-color: #273142;
}
</style>
