<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/mission.png" />
    <h1>Admin Login</h1>
    <transition name="toast">
      <div v-if="error" class="error">{{ error }}</div>
    </transition>
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
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  props: ["isAdmin"],
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
        context.emit("login");
        router.push("/");
      } else {
      }
    };
    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
.login {
  min-height: 80vh;
  padding: 5px;
  background-color: #171e29;
}
img {
  padding: 25px;
  margin: 0 auto;
}
.error {
  margin: 10px;
  padding: 20px;
  font-size: 1em;
  color: white;
  background-color: darkorange;
}
/*
.toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
.toast-enter-active {
  animation: wobble 0.5s ease;
}

.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}
@keyframes wobble {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
