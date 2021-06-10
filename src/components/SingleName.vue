<template>
  <router-link
    :to="{ name: 'NameDetails', params: { id: name.id } }"
    class="name-link"
  >
    <div class="name-card">
      <span>{{ name.time }} on {{ name.date }}</span>
      <h4>{{ name.name }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.name-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  background-color: #ffc02a;
  border: 1px solid #39495c;
  border-radius: 25px;
  margin-bottom: 18px;
}
.name-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(4, 106, 240, 0.932);
}
.name-link {
  color: #0d56f1ee;
  text-decoration: none;
}
</style>
