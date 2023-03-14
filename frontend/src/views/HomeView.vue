<script>
import { Vue } from "vue-class-component";
import "../assets/css/style.css";
import data from "../../json";
import axios from "axios";
var result = {};
const res = axios("http://localhost:5000/api/query").then((getResponse) => {
  console.log("GET Response");
  result = getResponse;
  function result(result) {
    return result;
  }
  console.log(result);
});
export default class HomeView extends Vue {
  data() {
    return {
      data: data,
      // result: result,
    };
  }
}
</script>
<template>
  <div class="home">
    <form
      @submit="
        data.resultBox.query = document.getElementById('search-input').value
      "
    >
      <div class="search-area">
        <h1 class="search-title">{{ data.searchBox.searchTitle }}</h1>
        <div class="search-box-container">
          <h3 class="query-description">{{ data.searchBox.queryText }}</h3>
          <div class="search-box">
            <input
              type="text"
              id="search-input"
              class="search-input"
              minlength="3"
            />
            <button type="submit" class="search-icon">
              <i :class="data.searchBox.searchIcon"></i>
            </button>
          </div>
          <!-- loader -->
          <!-- data.resultBox.query -->
          <div class="mt-2 loader">
            <span class="loader-text"
              >Searching databases and services for "{{}}"
              <span class="loader__dot">.</span
              ><span class="loader__dot">.</span
              ><span class="loader__dot">.</span></span
            >
          </div>
          <!-- loader -->
        </div>
      </div>
    </form>
    <!-- v-if="data.resultBox.resultReady" -->
    <div v-if="data.resultBox.callResult" class="result-area">
      <h1>Result</h1>
    </div>
  </div>
</template>
