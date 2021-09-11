<template>
  <h3 class="text-gray-400 text-xl">{{ title }}</h3>
  <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mb-2" />
</template>
<script setup>
defineProps({ title: String });
</script>
