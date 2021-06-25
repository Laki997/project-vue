<template>
  <div>
    <h1>
      Moje galerije:
      <b
        ><strong
          >{{ oneUser[0].user.firstName }}
          {{ oneUser[0].user.lastName }}
        </strong></b
      >
    </h1>
    <hr />

    <div v-for="(user, index) in oneUser" :key="index">
      <h3>Galerija broj: {{ index + 1 }}</h3>
      <hr />
      <h3>Naziv galerije: {{ user.naziv }}</h3>
      <h3>Opis galerije: {{ user.opis }}</h3>
      <h3>Fotografije galerije:</h3>
      <br />

      <img
        width="200px"
        height="200px"
        v-for="(img, index) in user.photos"
        :key="index"
        v-bind:src="img.url"
        alt=""
      />

      <br />
      <br />
      <hr />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ user: "auth/user" }),
    ...mapGetters({ oneUser: "user/oneUser" }),
  },

  methods: {
    ...mapActions({ getActiveUser: "auth/getActiveUser" }),
    ...mapActions({ getOne: "user/getOne" }),
  },

  async created() {
    await this.getActiveUser();
    await this.getOne(this.user.id);
    if (this.oneUser.length === 0) {
      alert("User nazalost nema kreiranu nijednu svoju galeriju");
    }
  },
};
</script>

<style scoped></style>
