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
          @click="move(index)"
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
          @click="index += 1"
          :disabled="index == gallery.inputs - 1"
        >
        </i>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
      <button @click="cancel" class="btn btn-warning">Cancel</button>
    </form>
  </div>
</template>

<script>
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

    cancel() {
      this.$router.push("/galleries");
    },
    add(index) {
      this.gallery.inputs.push({ url: "" });
      console.log(index);
    },
    remove(index) {
      this.gallery.inputs.splice(index, 1);
    },
    move(index) {
      return (index += 1);
    },
    async onSubmit() {
      await this.addGallery(this.gallery)
        .then(() => {
          this.$router.push("/galleries");
        })
        .catch((error) => {
          const errors = Object.values(error.response.data.errors);

          alert(`${errors}` + "\n");
        });
    },
  },
};
</script>

<style scoped></style>
