<script setup>
import { onErrorCaptured, ref, defineAsyncComponent } from "@vue/runtime-core";
// import Todos from "./components/Todos.vue";
// import Users from "./components/Users.vue";
const err = ref(null);
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"));
const Users = defineAsyncComponent(() => import("./components/Users.vue"));
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
</script>

<template>
  <span v-if="err" class="error"> {{ err }}</span>
  <suspense v-else>
    <template #default>
      <div>
        <Users />
        <hr />
        <Todos />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<style scoped>
.error {
  color: red;
  font-size: 20px;
}
</style>
