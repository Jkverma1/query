<template>
  <div class="resultContainer">
    <div class="resultContainer_section">
      <form
        class="formContainer_form resultContainer_form"
        @submit.prevent="search"
      >
        <!-- :value="{ keyword }" -->
        <input
          type="text"
          class="formContainer_form_input resultContainer_input"
          autofocus
          v-model="keyword"
        />
        <button
          class="formContainer_form_search-btn resultContainer_form_search-btn"
          type="submit"
        >
          <i class="bi bi-search formContainer_form_search-icon"></i>
        </button>
      </form>
      <div class="resultContainer_section_results">
        <ResultData :results="results" />
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/style.css";
import axios from "axios";
import ResultData from "./ResultData.vue";
export default {
  name: "FormView",
  components: {
    ResultData,
  },
  data() {
    return {
      keyword: this.$route.params.query.split("-").join(" "),
      results: [],
    };
  },
  methods: {
    async search() {
      const newQuery = this.keyword.split(" ").join("-");
      this.$router.push({
        name: "Result",
        params: { query: newQuery },
      });
      try {
        const res = await axios.get("http://localhost:5000/api/query");
        this.results = res;
        console.log(this.results);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    if (this.$route.params.query) {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/query/${this.$route.params.query}`
        );
        this.results = res.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style></style>
