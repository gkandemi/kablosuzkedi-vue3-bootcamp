<template>
  <button @click="newItem(new Date().getTime())">Set Data</button>
</template>
<script>
export default {
  inject: ["newItem"]
};
</script>
