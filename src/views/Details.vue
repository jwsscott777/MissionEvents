<template>
  <div class="details">
    <img alt="Vue logo" src="../assets/mission.png" />
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h4>{{ post.title }}</h4>
      <p class="pre">{{ post.description }}</p>
      <h2>{{ post.local }}</h2>
      <p>{{ post.date }} @ {{ post.time }}</p>
      <h3>
        Please click acknowledgement button before signup to access the waiver
        form
      </h3>
      <button @click="redirect('https://www.missionmovement.life')" class="ack">
        Acknowledgement
      </button>
      <p>If you already acknowledged the waiver, proceed to signup</p>
      <button v-if="user" @click="handleClick" class="delete">
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
import getUser from "../composables/getUser";
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
    const { user } = getUser();

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
    const redirect = (link, target = "_blank") => {
      window.open(link, target);
    };

    return { post, error, handleClick, handleSignup, user, redirect };
  },
};
</script>

<style scoped>
.details {
  background-color: #171e29;
  padding: 5px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
}
.post p {
  color: #444;
  padding: 0px 20px 0px 20px;
  line-height: 1.5rem;
  margin-top: 40px;
  margin-bottom: 60px;
  color: orange;
}
.pre {
  white-space: pre-wrap;
}
h3,
p {
  padding: 0px 20px 0px 20px;
}
button.delete {
  margin: 10px auto;
  border-radius: 20px;
}
button.signup {
  margin: 10px auto;
  margin-bottom: 25px;
  border-radius: 20px;
}
.ack {
  margin: 10px auto;
  margin-bottom: 80px;
  border-radius: 20px;
  background-color: darkgrey;
  color: black;
}
</style>
