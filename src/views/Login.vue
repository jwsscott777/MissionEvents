<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo3.png" />
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
export default {
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };
    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
.login {
  height: 80vh;
  padding: 20px;
  background-color: #171e29;
}
</style>
