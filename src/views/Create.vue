<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input v-model="title" type="text" required />
      <label>Description</label>
      <textarea v-model="description" required></textarea>
      <label>location</label>
      <input v-model="local" type="text" required />
      <label>Date</label>
      <input v-model="date" type="text" required />
      <label>Time</label>
      <input v-model="time" type="text" required />
      <button>Add Event</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "../firebase/config";
export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const local = ref("");
    const date = ref("");
    const time = ref("");

    const router = useRouter();

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        description: description.value,
        local: local.value,
        date: date.value,
        time: time.value,
        createdAt: timestamp(),
      };

      const res = await projectFirestore.collection("posts").add(post);

      router.push({ name: "Home" });
    };

    return { title, description, local, date, time, handleSubmit };
  },
};
</script>

<style>
.create {
  background-color: #171e29;
}
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
}
input,
textarea {
  display: block;
  background-color: antiquewhite;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
</style>
