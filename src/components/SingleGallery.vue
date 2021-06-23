<template>
  <div>
    <h3>
      Naziv galerije: <b>{{ gallery.naziv }}</b>
    </h3>

    <h3>
      Opis galerije: <b>{{ gallery.opis }}</b>
    </h3>
    <h2>
      Datum kreiranja: <b> {{ gallery.created_at }}</b>
    </h2>

    <h2>
      Autor:

      <router-link :to="`/authors/${gallery.user.id}`">
        <b
          >{{ gallery.user.firstName }} {{ gallery.user.lastName }}</b
        ></router-link
      >
    </h2>

    <div
      class="carousel-slide"
      v-for="(photo, index) in gallery.photos"
      :key="index"
    >
      <img width="400px" height="400px" :src="photo.url" alt="" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["id"],

  computed: {
    ...mapGetters({ gallery: "gallery/gallery" }),
  },

  methods: {
    ...mapActions({ getOne: "gallery/getOne" }),
  },

  async created() {
    await this.getOne(this.id);
  },
};
</script>

<style scoped></style>
