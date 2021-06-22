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
          v-model="gallery.naziv"
          required
        />
      </div>
      <div class="form-group">
        <label for="opis">Opis</label>
        <textarea
          class="form-control"
          v-model="gallery.opis"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div
        class="form-group"
        v-for="(input, index) in gallery.inputs"
        :key="index"
      >
        <label for="photo">Dodaj sliku</label>
        <input type="text" v-model="input.url" />
        <i
          class="fas fa-minus-circle"
          @click="remove(index)"
          v-show="index || (!index && gallery.inputs.length > 1)"
        ></i>
        <i
          class=" fas fa-angle-down"
          @click="move(index, index - 1)"
          :disabled="index == 0"
        >
        </i>

        <i
          class="fas fa-plus-circle"
          @click="add(index)"
          v-show="index == gallery.inputs.length - 1"
        ></i>
        <i
          class="fas fa-angle-up"
          @click="move(index, index + 1)"
          :disabled="index == gallery.inputs - 1"
        >
        </i>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};
import { mapActions } from "vuex";
export default {
  data() {
    return {
      gallery: {
        naziv: "",
        opis: "",
        inputs: [{ url: "" }],
      },
    };
  },

  methods: {
    ...mapActions({ addGallery: "gallery/addGallery" }),
    add(index) {
      this.gallery.inputs.push({ url: "" });
      console.log(index);
    },
    remove(index) {
      this.gallery.inputs.splice(index, 1);
    },
    move(from, to) {
      this.gallery.inputs.move(from, to);
    },
    async onSubmit() {
      await this.addGallery(this.gallery);
    },
  },
};
</script>

<style scoped></style>
