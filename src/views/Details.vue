<template>
  <div class="details">
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h4>{{ post.title }}</h4>
      <p class="pre">{{ post.description }}</p>
      <p>{{ post.location }}</p>
      <p>{{ post.date }} @ {{ post.time }}</p>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
export default {
  props: ["id"],
  component: {
    Spinner,
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style>
.details {
  background-color: #444;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
  height: 80vh;
}
.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
  color: orange;
}
.pre {
  white-space: pre-wrap;
}
</style>
