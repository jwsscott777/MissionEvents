<template>
  <router-link
    :to="{ name: 'Details', params: { id: post.id } }"
    class="post-link"
  >
    <div class="post-card">
      <span>{{ post.time }} on {{ post.date }}</span>
      <h4>{{ post.title }}</h4>
      <h5>{{ snippet }}</h5>
    </div>
  </router-link>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.description.substring(0, 50) + "....";
    });

    return { snippet };
  },
};
</script>

<style scoped>
.post-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  background-color: #ffc02a;
  border: 1px solid #39495c;
  border-radius: 25px;
  margin-bottom: 18px;
}
.post-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(4, 106, 240, 0.932);
}
.post-link {
  color: #0d56f1ee;
  text-decoration: none;
}
</style>
