<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <h1>
            <b>Galerija</b>
          </h1>
        </div>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/galleries"
            >All Galeries</router-link
          >
        </div>
        <!-- <div class="navbar-nav">
          <a class="btn btn-warning" to="/galleries">Galleries</a>
        </div> -->
        <div>
          <input
            v-model="search"
            class="navbar-nav"
            type="text"
            placeholder="Enter term"
          />
        </div>
        <div>
          <button @click="filter" class="btn btn-primary">Filtriraj</button>
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
            <router-link class="nav-item nav-link" to="/myGalleries"
              >My Galeries</router-link
            >
          </div>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/create"
              >Create</router-link
            >
          </div>
          <div class="navbar-nav">
            <a tag="button" class="btn btn-warning" @click="logoutUser"
              >Logout</a
            >
          </div>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },

  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
    ...mapGetters({ user: "auth/user" }),
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),
    ...mapActions({ getAll: "gallery/getAll" }),
    ...mapMutations({ setSearchTerm: "gallery/setSearchTerm" }),
    ...mapMutations({ setPage: "gallery/setPage" }),

    async logoutUser() {
      await this.logout();
      this.$router.push("/login");
    },

    async filter() {
      this.setSearchTerm(this.search);
      this.setPage(1);

      await this.getAll();
    },
  },
};
</script>

<style scoped></style>
