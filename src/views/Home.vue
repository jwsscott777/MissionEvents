<template>
  <div class="home">
    <button @click="goWeather" class="weatherButton">Get Weather</button>
    <img alt="Vue logo" src="../assets/mission.png" />
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
import PostList from "@/components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const { posts, error, load } = getPosts();
    const router = useRouter();

    const goWeather = () => {
      router.push({ name: "Weather" });
    };

    load();

    return { posts, error, goWeather };
  },
};
</script>

<style>
.home {
  margin: 0, auto;
  padding: 5px;
  background-color: #171e29;
}
.weatherButton {
  padding: 10;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  border-radius: 20px;
}
img {
  padding: 25px;
  margin: 0 auto;
}
</style>
