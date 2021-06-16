<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/mission.png" />
    <h1>Admin Login</h1>

    <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email" />
      <input
        type="password"
        required
        placeholder="password"
        v-model="password"
      />
      <div class="error">{{ error }}</div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  props: ["isAdmin"],
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const isAdmin = ref(Boolean);

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        isAdmin.value = true;
        console.log("user logged in");
        context.emit("login");
        router.push("/");
      } else {
        isAdmin.value = false;
      }
    };
    return { email, password, handleSubmit, error, isAdmin };
  },
};
</script>

<style>
.login {
  min-height: 80vh;
  padding: 20px;
  background-color: #171e29;
}
</style>
