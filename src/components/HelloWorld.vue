<template>
  <div class="hello">
    <p>manolo</p>
    <SearchBoxComponent></SearchBoxComponent>
    <ResultsList>
      <template #result="{ item }">
        {{ item.name }}
      </template>
    </ResultsList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBoxComponent from "@/components/SearchBoxComponent.vue";
import { ResultsList } from "@empathyco/x-components/search";

export default Vue.extend({
  name: "HelloWorld",
  components: { SearchBoxComponent, ResultsList },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
