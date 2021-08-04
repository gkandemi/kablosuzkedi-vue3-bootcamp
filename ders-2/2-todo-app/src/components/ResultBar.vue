<template>
  <!-- <small class="mt-2 d-flex justify-content-end green"> {{ todoList.length }} adet todo vardır</small> -->
  <small class="mt-2 d-flex justify-content-end green"> {{ itemCount }} adet todo vardır</small>
</template>
<script>
export default {
  props: ["itemCount"]
};
</script>
