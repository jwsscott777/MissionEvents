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
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.login {
  height: 80vh;
  background-color: #171e29;
}
</style>
