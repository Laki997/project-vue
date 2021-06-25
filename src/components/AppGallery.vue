<template>
  <div>
    <br />
    <h1>
      <b><strong>GALERIJE</strong></b>
    </h1>
    <hr />
    <br />
    <div v-for="(gallery, index) in galleries" :key="index">
      <h3>
        Naziv Galerije:
        <router-link :to="`/galleries/${gallery.id}`">
          {{ gallery.naziv }}</router-link
        >
      </h3>

      <h3>
        Autor:
        <router-link :to="`/authors/${gallery.user.id}`"
          >{{ gallery.user.firstName }} {{ gallery.user.lastName }}</router-link
        >
      </h3>

      <h3>Datum: {{ gallery.created_at }}</h3>

      <h3>Opis: {{ gallery.opis }}</h3>

      <h3>Fotografija:</h3>
      <!-- <img
        width="100px"
        height="100px"
        v-for="(img, index) in gallery.photos"
        v-bind:src="img.url"
        :key="index"
      /> -->

      <img
        width="300px"
        height="300px"
        v-bind:src="gallery.photos[0].url"
        :key="index"
      />

      <br />
      <br />
    </div>

    <pagination :pagination="pagination" @pagination="getAll" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Pagination from "./Pagination.vue";
export default {
  components: { Pagination },
  computed: {
    ...mapGetters({ galleries: "gallery/galleries" }),
    ...mapGetters({ pagination: "gallery/pagination" }),
    ...mapGetters({ searchTerm: "gallery/searchTerm" }),
  },
  methods: {
    ...mapActions({ getAll: "gallery/getAll" }),
    ...mapMutations({ setSearchTerm: "gallery/setSearchTerm" }),
  },

  async created() {
    await this.getAll().catch((error) => {
      alert(error.response.data.error.message);
    });
  },
};
</script>

<style scoped></style>
