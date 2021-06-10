<template>
  <div class="name-details">
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div v-if="error">{{ error }}</div>
    <div v-if="name" class="name">
      <h4>{{ name.name }}</h4>
      <p>{{ name.date }} @ {{ name.time }}</p>
      <button @click="handleClick" class="delete">
        Delete Name
      </button>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getName from "../composables/getName";
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
    const { name, error, loadName } = getName(props.id);

    loadName();

    const handleClick = async () => {
      await projectFirestore
        .collection("names")
        .doc(props.id)
        .delete();
      console.log("clicked");
      router.push("/NameList");
    };

    return { name, error, handleClick, getName };
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
