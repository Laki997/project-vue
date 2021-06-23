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
// Negde ce biti greske na pocetku jer nema svaka slika url zbog greske u regexu ne zaboavi da dodas!!!!
import { mapActions, mapGetters } from "vuex";
import Pagination from "./Pagination.vue";
export default {
  components: { Pagination },
  computed: {
    ...mapGetters({ galleries: "gallery/galleries" }),
    ...mapGetters({ pagination: "gallery/pagination" }),
  },
  methods: {
    ...mapActions({ getAll: "gallery/getAll" }),
  },

  async created() {
    await this.getAll();
    console.log(this.galleries);
    console.log(this.galleries[0].photos[0].url);
  },
};
</script>

<style scoped></style>
