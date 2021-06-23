<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{
            disabled: pagination.current_page === pagination.last_page,
          }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(pagination.current_page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["pagination"],

  methods: {
    ...mapActions({ getAll: "gallery/getAll" }),
    changePage(page) {
      this.$emit("pagination", page);
      console.log(page);
    },
  },

  created() {
    console.log(this.pagination);
  },
};
</script>

<style scoped></style>
