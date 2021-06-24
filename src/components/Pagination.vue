<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{
            hiddenButton: pagination.current_page === pagination.last_page,
          }"
        >
          <a
            class="btn btn-primary"
            tag="button"
            href="#"
            @click.prevent="changePage(pagination.current_page + 1)"
            >Load more</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: ["pagination"],

  methods: {
    ...mapActions({ getAll: "gallery/getAll" }),
    ...mapMutations({ setPage: "gallery/setPage" }),
    changePage(page) {
      this.$emit("pagination", page);
      this.setPage(page);
      console.log(page);
    },
  },

  created() {
    console.log(this.pagination);
  },
};
</script>

<style scoped>
.hiddenButton {
  display: none;
}
</style>
