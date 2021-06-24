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
    <!-- <div v-for="(comment, index) in gallery.comments" :key="index">
      <h3>{{ index + 1 }} .{{ comment.body }}</h3>
    </div> -->
    <div v-for="(comment, index) in comments" :key="comment.id">
      <h3>Autor: {{ comment.user.firstName }} {{ comment.user.lastName }}</h3>
      <h3>{{ index + 1 }}. {{ comment.body }}</h3>
      <h3>{{ comment.created_at }}</h3>
    </div>
    <template v-if="isAuthenticated">
      <div>
        <form @submit.prevent="onSubmit">
          Dodaj komentar:
          <textarea
            class="body"
            type="text"
            v-model="comment.body"
            name="body"
            id="body"
            cols="50"
            rows="3"
            required
          ></textarea>

          <button type="submit" class="btn btn-primary">
            Dodaj
          </button>
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
        body: "",
      },

      comments: [],
    };
  },
  props: ["id"],

  computed: {
    ...mapGetters({ gallery: "gallery/gallery" }),
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
    // ...mapGetters({ comments: "comment/comments" }),
  },

  methods: {
    ...mapActions({ getOne: "gallery/getOne" }),
    ...mapActions({ addComment: "comment/addComment" }),
    ...mapActions({ getCommentsForGallery: "comment/getCommentsForGallery" }),

    async onSubmit() {
      await this.addComment(this.comment);
      this.comments = await this.getCommentsForGallery(this.id);
      this.comment.body = "";
    },
  },

  async created() {
    await this.getOne(this.id);
    this.comments = await this.getCommentsForGallery(this.id);
  },
};
</script>

<style scoped></style>
