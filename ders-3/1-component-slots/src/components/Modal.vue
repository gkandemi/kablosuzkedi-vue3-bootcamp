<template>
  <div class="container">
    <div class="header">
      <slot name="title" />
    </div>
    <hr />
    <div class="content my-2">
      <slot name="content" />
    </div>
    <slot />
    <hr />
    <div class="footer text-right">
      <button class="mr-2">Kapat</button>
      <button @click="onSave" class="ml-2 green">Kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "content", "onSave"]
};
</script>
