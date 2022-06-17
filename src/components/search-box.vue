<template>
  <div class="x-input-group">
    <SearchIcon />
    <SearchInput placeholder="Busca cualquier término" />
    <ClearSearchInput>Limpiar</ClearSearchInput>
  </div>
</template>

<script lang="ts">
import {
  ClearSearchInput,
  SearchButton,
  SearchInput,
} from "@empathyco/x-components/search-box";
import { SearchIcon } from "@empathyco/x-components";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    ClearSearchInput,
    SearchButton,
    SearchIcon,
    SearchInput,
  },
})
export default class SearchBox extends Vue {}
</script>
