<template>
  <header>
    <h1 v-if="user">Admin Page</h1>
    <h1 v-else>Mission Events</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'NameList' }">Class List</router-link>
      <router-link v-if="user" :to="{ name: 'Create' }"
        >Create Event</router-link
      >
      <div class="admin">
        <button v-if="user" @click="handleLogout" class="logout">
          Log Out
        </button>
        <router-link v-else :to="{ name: 'Login' }">Admin</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import Login from "../views/Login.vue";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
export default {
  components: {
    Login,
  },
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("logged out");
      }
    };

    return { handleLogout, user };
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
.logout {
  margin: 0 auto;
  margin-top: 10px;
  display: block;
  border-radius: 20px;
}
.admin {
  margin-top: 10px;
}
</style>
