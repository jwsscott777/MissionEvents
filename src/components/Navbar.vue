<template>
  <header>
    <h1>Mission Events</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Event</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  background-color: #4a5361;
}
header h1 {
  color: blue;
  font-size: 25px;
}
header a {
  color: orange;
  text-decoration: none;
  margin-left: 10px;
}
header a.router-link-active {
  color: aqua;
  font-weight: bold;
}
</style>
