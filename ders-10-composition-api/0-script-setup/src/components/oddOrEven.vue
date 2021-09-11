<template>
  <h1>aaa</h1>
  <h3>{{ result }}</h3>
  {{ counter }}
</template>
<script setup>
import { computed, watch } from "vue";
const props = defineProps({ counter: Number });
const emit = defineEmits(["odd-event"]);
// console.log(props.counter);
const result = computed(() => (props.counter % 2 === 0 ? "Çift" : "Tek"));

watch(result, (result) => {
  if (result === "Tek") emit("odd-event", true);
});
</script>
