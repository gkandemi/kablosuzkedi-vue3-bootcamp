<template>
  <div class="w-full">
    <div class="p-2 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4">
      <BookmarkListItem v-for="item in props.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<script setup>
import BookmarkListItem from "./BookmarkListItem";
import { defineProps } from "vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>
