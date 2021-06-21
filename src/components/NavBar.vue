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
          <router-link class="nav-item nav-link" to="/add">Add</router-link>
        </div>
        <div class="navbar-nav">
          <a class="button">Logout</a>
        </div>
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
