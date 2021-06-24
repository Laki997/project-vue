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

    <!-- <div
      class="carousel-slide"
      v-for="(photo, index) in gallery.photos"
      :key="index"
    >
      <a :href="photo.url" target="_blank">
        <img width="399px" height="400px" :src="photo.url" alt="" />
      </a>
    </div> -->

    <!-- <div
      class="carousel-slide"
      v-for="(photo, index) in gallery.photos"
      :key="index"
    >
      <a :href="photo.url" target="_blank">
        <img width="399px" height="400px" :src="photo.url" alt="" />
      </a>
    </div> -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div
        class="carousel-inner"
        v-for="(photo, index) in gallery.photos"
        :key="index"
      >
        <!-- <div v-if="index === 0" class="carousel-item active">
          <a :href="photo.url" target="_blank">
            <img
              class="d-block w-100"
              width="399px"
              height="400px"
              :src="photo.url"
              alt=""
            />
          </a>
        </div> -->
        <div class="carousel-item" :class="{ active: index === 0 }">
          <a :href="photo.url" target="_blank">
            <img
              class="d-block w-100"
              width="399px"
              height="400px"
              :src="photo.url"
              alt=""
            />
          </a>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
      <div v-if="comment.user.id === user.id">
        <button class="btn btn-danger">Obrisi</button>
      </div>
      <hr />
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
    ...mapGetters({ user: "auth/user" }),
    // ...mapGetters({ comments: "comment/comments" }),
  },

  methods: {
    ...mapActions({ getOne: "gallery/getOne" }),
    ...mapActions({ addComment: "comment/addComment" }),
    ...mapActions({ getCommentsForGallery: "comment/getCommentsForGallery" }),
    // ...mapActions({ getActiveUser: "auth/getActiveUser" }),

    async onSubmit() {
      await this.addComment(this.comment);
      this.comments = await this.getCommentsForGallery(this.id);
      this.comment.body = "";
    },
  },

  async created() {
    await this.getOne(this.id);
    this.comments = await this.getCommentsForGallery(this.id);
    await this.$store.dispatch("auth/getActiveUser");
  },
};
</script>

<style scoped></style>
