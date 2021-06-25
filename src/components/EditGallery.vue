<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="naziv">Naziv</label>
        <input
          type="text"
          class="form-control"
          id="naziv"
          aria-describedby="emailHelp"
          placeholder="Enter naziv"
          v-model="newGallery.naziv"
          required
        />
      </div>
      <div class="form-group">
        <label for="opis">Opis</label>
        <textarea
          class="form-control"
          v-model="newGallery.opis"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div
        class="form-group"
        v-for="(input, index) in newGallery.photos"
        :key="index"
      >
        <label for="photo">Dodaj sliku</label>
        <input type="text" v-model="input.url" />
        <i
          class="fas fa-minus-circle"
          @click="remove(index)"
          v-show="index || (!index && newGallery.photos.length > 1)"
        ></i>
        <i
          class=" fas fa-angle-down"
          @click="move(index, index + 1)"
          :disabled="index == newGallery.photos.length - 1"
        >
        </i>

        <i
          class="fas fa-plus-circle"
          @click="add(index)"
          v-show="index == newGallery.photos.length - 1"
        ></i>
        <i
          class="fas fa-angle-up"
          @click="move(index, index - 1)"
          :disabled="index == -1"
        >
        </i>
      </div>

      <button type="submit" class="btn btn-primary">
        Edit
      </button>

      <button @click="cancel" class="btn btn-warning">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      newGallery: {
        naziv: "",
        opis: "",
        photos: [{ url: "" }],
      },
    };
  },
  methods: {
    ...mapActions({ getOne: "gallery/getOne" }),
    ...mapActions({ editGallery: "gallery/editGallery" }),

    async onSubmit() {
      console.log(this.newGallery);
      await this.editGallery(this.newGallery);
      this.$router.push(`/galleries/${this.id}`);
    },

    cancel() {
      this.router.push(`/galleries/${this.id}`);
    },

    add(index) {
      this.gallery.photos.push({ url: "" });
      console.log(index);
    },
    remove(index) {
      this.gallery.photos.splice(index, 1);
    },

    move(oldIndex, newIndex) {
      if (oldIndex == 0 && newIndex == -1) {
        return;
      }

      this.gallery.photos.splice(
        newIndex,
        0,
        this.gallery.photos.splice(oldIndex, 1)[0]
      );
    },
  },

  computed: {
    ...mapGetters({ gallery: "gallery/gallery" }),
  },

  async created() {
    await this.getOne(this.id);
    this.newGallery = this.gallery;
    console.log(this.gallery);
  },
};
</script>

<style scoped></style>
