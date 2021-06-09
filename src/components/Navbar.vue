<template>
  <header>
    <h1>Mission Events</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link v-if="isAdmin" :to="{ name: 'Create' }"
        >Create Event</router-link
      >
      <router-link v-else :to="{ name: 'Login' }">Admin</router-link>
    </nav>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isAdmin = ref(true);

    return { isAdmin };
  },
};
</script>

<style>
header {
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  background-color: #313d4f;
}
header h1 {
  color: #0093ee;
  font-size: 25px;
}
header a {
  color: #0093ee;
  text-decoration: none;
  margin-left: 10px;
}
header a.router-link-active {
  color: #ffb610;
  font-weight: bold;
}
</style>
