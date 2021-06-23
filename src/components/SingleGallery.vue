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
    <br />
    <br />

    <h2>Comments</h2>
    <hr />
    <div v-for="(comment, index) in gallery.comments" :key="index">
      <h3>{{ index + 1 }} .{{ comment.body }}</h3>
    </div>
    <template v-if="isAuthenticated">
      <div>
        <form @submit.prevent="onSubmit">
          Dodaj komentar:
          <textarea
            type="text"
            v-model="comment.body"
            name="body"
            id="body"
            cols="50"
            rows="3"
          ></textarea>

          <button type="submit" class="btn btn-primary">Dodaj</button>
        </form>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      comment: {
        gallery_id: this.id,
      },
    };
  },
  props: ["id"],

  computed: {
    ...mapGetters({ gallery: "gallery/gallery" }),
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
  },

  methods: {
    ...mapActions({ getOne: "gallery/getOne" }),
    ...mapActions({ addComment: "comment/addComment" }),

    async onSubmit() {
      await this.addComment(this.comment);
      console.log(this.comment);
      console.log(this.id);
    },
  },

  async created() {
    await this.getOne(this.id);
  },
};
</script>

<style scoped></style>
