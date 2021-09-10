<template>
  <h3>{{ title }} </h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus quod provident, quae eveniet ipsa voluptatum rem sed sint incidunt ex
    recusandae, debitis reiciendis nostrum, nam minus! Expedita, cupiditate nemo.
  </p>
  <hr />
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr />
  <input type="text" v-model="searchText" />
  <p v-if="isTyping">Şu an yazıyor....</p>
</template>

<script>
import Counter from "./composables/Counter.js";
import Header from "./composables/Header.js";
import Toggle from "./composables/Toggle.js";
import Search from "./composables/Search.js";
export default {
  setup() {
    const { counter, oddOrEven } = Counter();
    const { title, titleLengthMessage } = Header();
    const { show, toggleIt } = Toggle();
    const { searchText, isTyping } = Search();
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping,
    };
  },
};
</script>
