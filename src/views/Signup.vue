<template>
  <div class="signup-form">
    <img alt="Vue logo" src="../assets/mission.png" />
    <h1>Sign up for the class</h1>
    <form @submit.prevent="handleSubmit">
      <label>Enter Your Name</label>
      <input type="text" required v-model="name" />
      <label>Enter the Date</label>
      <input type="text" required v-model="date" />
      <label>Enter the Time</label>
      <input type="text" required v-model="time" />
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { projectFirestore } from "../firebase/config";
export default {
  name: "Signup",
  setup() {
    const name = ref("");
    const date = ref("");
    const time = ref("");

    const router = useRouter();

    const handleSubmit = async () => {
      const addName = {
        name: name.value,
        date: date.value,
        time: time.value,
      };
      console.log("clicked");
      const res = await projectFirestore.collection("names").add(addName);
      console.log(res);

      router.push({ name: "NameList" });
    };

    return { name, date, time, handleSubmit };
  },
};
</script>

<style scoped>
.signup-form {
  min-height: 80vh;
  padding: 5px;
  background-color: #171e29;
}
.signup-form label {
  color: orange;
}
.signup-form img {
  margin: 0 auto;

  display: block 20px;
}
</style>
