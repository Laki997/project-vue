<template>
  <div>
    <div v-for="(gallery, index) in galleries" :key="index">
      <h3>Naziv Galerije:</h3>
      <router-link :to="`/galleries/${gallery.id}`">
        {{ gallery.naziv }}</router-link
      >
      <h3>Autor</h3>
      <router-link :to="`/authors/${gallery.user.id}`"
        >{{ gallery.user.firstName }} {{ gallery.user.lastName }}</router-link
      >
      <h3>Datum:</h3>
      {{ gallery.created_at }}
      <h3>Opis:</h3>
      {{ gallery.opis }}
      <h3>Fotografije:</h3>
      <img
        width="100px"
        height="100px"
        v-for="(img, index) in gallery.photos"
        v-bind:src="img.url"
        :key="index"
      />
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
  },
};
</script>

<style scoped></style>
