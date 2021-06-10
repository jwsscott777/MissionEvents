<template>
  <div class="name-list">
    <div v-for="name in names" :key="name.id">
      <h4>
        {{ name.name }} <span class="span">signed up for</span>
        {{ name.date }} @
        {{ name.time }}
      </h4>
    </div>
    <button @click="handleDelete">Delete Class</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import getNames from "../composables/getNames";
import { projectFirestore } from "../firebase/config";
export default {
  name: "NameList",
  props: ["id"],
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { names, error, loadNames } = getNames(props.id);

    loadNames();

    const handleDelete = async () => {
      await projectFirestore
        .collection("names")
        .doc(props.id)
        .delete();
      router.push("/");
    };

    return { names, error, handleDelete };
  },
};
</script>

<style>
.name-list {
  margin: 0, auto;
  padding: 10px;
  color: orange;
  background-color: #171e29;
  height: 80vh;
}
.span {
  color: #0093ee;
}
</style>
