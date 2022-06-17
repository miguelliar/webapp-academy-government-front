<template>
  <div class="hello">
    <p>manolo</p>
    <search-box></search-box>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBox from "@/components/search-box.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: { SearchBox },
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
