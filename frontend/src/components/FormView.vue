<template>
  <div class="formContainer">
    <div class="formContainer_section">
      <div class="formContainer_section-brand">
        <h1 class="formContainer_section-brand-title">
          {{ data.searchBox.searchTitle }}
        </h1>
        <h3 class="formContainer_section-brand-description">
          {{ data.searchBox.queryText }}
        </h3>
      </div>
      <form
        class="formContainer_form"
        @submit.prevent="search"
        @submit="data.searchBox.searching = true"
      >
        <input
          type="text"
          class="formContainer_form_input"
          autofocus
          v-model="keyword"
        />
        <button class="formContainer_form_search-btn" type="submit">
          <i class="bi bi-search formContainer_form_search-icon"></i>
        </button>
      </form>
      <p v-if="data.searchBox.searching">
        <span class="loader-text"
          >Searching databases and services for "{{ keyword }}"
          <span class="loader__dot">.</span><span class="loader__dot">.</span
          ><span class="loader__dot">.</span></span
        >
      </p>
    </div>
  </div>
</template>

<script>
import data from "../../json";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import { promiseTimeout } from "@vueuse/core";
export default {
  name: "FormView",
  data() {
    return {
      data: data,
      keyword: "",
    };
  },
  methods: {
    async search() {
      await promiseTimeout(3000);
      data.searchBox.searching = false;
      const newQuery = this.keyword.split(" ").join("-");
      this.$router.push({
        name: "Result",
        params: { query: newQuery },
      });
    },
  },
};
</script>
