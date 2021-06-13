<template>
  <div class="name-list">
    <div v-for="name in names" :key="name.id">
      <SingleName :name="name" />
    </div>
  </div>
</template>

<script>
import getNames from "../composables/getNames";
import SingleName from "../components/SingleName.vue";
export default {
  name: "NameList",
  components: { SingleName },
  props: ["id"],
  setup(props) {
    const { names, error, loadNames } = getNames(props.id);

    loadNames();

    return { names, error };
  },
};
</script>

<style scoped>
.name-list {
  margin: 0, auto;
  padding: 20px;
  color: orange;
  min-height: 80vh;
  background-color: #171e29;

  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  border-radius: 20px;
}
</style>
