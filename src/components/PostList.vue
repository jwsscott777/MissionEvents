<template>
  <div class="post-list">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <div v-for="(post, index) in posts" :key="post.id" :data-index="index">
        <SinglePost :post="post" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import gsap from "gsap";
export default {
  props: ["posts"],
  components: {
    SinglePost,
  },
  setup(props) {
    console.log(props.posts);

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
    return { beforeEnter, enter };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
