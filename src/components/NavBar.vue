<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          Galerija
        </div>
        <template v-if="!isAuthenticated">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/register"
              >Register</router-link
            >
          </div>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/login"
              >Login</router-link
            >
          </div>
        </template>
        <template v-else>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/posts"
              >All Galeries</router-link
            >
          </div>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/posts"
              >My Galeries</router-link
            >
          </div>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/create"
              >Create</router-link
            >
          </div>
          <div class="navbar-nav">
            <a class="button" @click="logoutUser">Logout</a>
          </div>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
    ...mapGetters({ user: "auth/user" }),
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
