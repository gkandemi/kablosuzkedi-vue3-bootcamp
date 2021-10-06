<script setup>
import { ref } from "vue";

const userList = ref([]);
// const isLoad = ref(false);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    userList.value = json;
    // isLoad.value = true;
  });
</script>

<template>
  <h3>Users</h3>
  <ul>
    <li v-for="user in userList" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
  <!-- <span v-else>Loading...</span> -->
</template>
