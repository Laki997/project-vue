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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: {},
    };
  },
};
</script>

<style scoped></style>
