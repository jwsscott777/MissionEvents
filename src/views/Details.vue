<template>
  <div class="details">
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h4>{{ post.title }}</h4>
      <p class="pre">{{ post.description }}</p>
      <p>{{ post.location }}</p>
      <p>{{ post.date }} @ {{ post.time }}</p>
      <button v-if="isAdmin" @click="handleClick" class="delete">
        Delete Event
      </button>
      <button v-else @click="handleSignup" class="signup">Signup</button>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { projectFirestore } from "../firebase/config";
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  component: {
    Spinner,
  },
  setup(props) {
    const router = useRouter();
    const { post, error, load } = getPost(props.id);

    const isAdmin = false;

    load();

    const handleClick = async () => {
      await projectFirestore
        .collection("posts")
        .doc(props.id)
        .delete();
      console.log("clicked");
      router.push("/");
    };

    const handleSignup = () => {
      router.push("/signup");
    };

    return { post, error, handleClick, handleSignup, isAdmin };
  },
};
</script>

<style>
.details {
  background-color: #171e29;
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
button.delete {
  margin: 10px auto;
}
button.signup {
  margin: 10px auto;
}
</style>
