<template>
  <div>
    <h1>
      Autor galerija:
      <b
        ><strong
          >{{ oneUser[0].user.firstName }}
          {{ oneUser[0].user.lastName }}
        </strong></b
      >
      <hr />
    </h1>

    <div v-for="(user, index) in oneUser" :key="index">
      <h3>Galerija broj: {{ index + 1 }}</h3>
      <hr />
      <h3>Naziv galerije: {{ user.naziv }}</h3>
      <h3>Opis galerije: {{ user.opis }}</h3>
      <h3>Fotografije galerije:</h3>
      <br />

      <img
        width="100px"
        height="100px"
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
  props: ["id"],
  computed: {
    ...mapGetters({ oneUser: "user/oneUser" }),
  },
  methods: {
    ...mapActions({ getOne: "user/getOne" }),
  },
  async created() {
    await this.getOne(this.id);
    console.log(this.oneUser);
  },
};
</script>

<style scoped></style>
