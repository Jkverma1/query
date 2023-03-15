<template>
  <div class="ResultDataContainer">
    <div
      class="ResultDataContainer_section"
      v-for="result in results"
      :key="result.id"
    >
      <div class="ResultDataContainer_data">
        <p class="ResultDataContainer_query">{{ result.query }}</p>
        <p class="ResultDataContainer_description">{{ result.result }}</p>
        <p class="ResultDataContainer_author">{{ result.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ResultData",
  props: ["results"],
};
</script>
