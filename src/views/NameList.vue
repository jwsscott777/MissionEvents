<template>
  <div class="name-list">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <div v-for="(name, index) in names" :key="name.id" :data-index="index">
        <SingleName :name="name" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import getNames from "../composables/getNames";
import SingleName from "../components/SingleName.vue";
import gsap from "gsap";
export default {
  name: "NameList",
  components: { SingleName },
  props: ["id"],
  setup(props) {
    const { names, error, loadNames } = getNames(props.id);

    loadNames();
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };

    return { names, error, beforeEnter, enter };
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
