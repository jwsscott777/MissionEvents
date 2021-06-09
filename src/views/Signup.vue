<template>
  <div class="signup-form">
    <img alt="Vue logo" src="../assets/logo3.png" />
    <h1>Sign up for the class</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Enter Name" v-model="name" />\
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style>
.signup-form {
  height: 80vh;
  background-color: #171e29;
}
</style>
