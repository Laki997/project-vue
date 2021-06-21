<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          Galerija
        </div>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/register"
            >Register</router-link
          >
        </div>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/login">Login</router-link>
        </div>

        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/posts">Posts</router-link>
        </div>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/create"
            >Create</router-link
          >
        </div>
        <div class="navbar-nav">
          <a class="button" @click="logoutUser">Logout</a>
        </div>
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),

    async logoutUser() {
      await this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
