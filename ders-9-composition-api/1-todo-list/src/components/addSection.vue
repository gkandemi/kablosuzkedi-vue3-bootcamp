<template>
  <section class="mt-4">
    <input
      @keydown.enter="newItem"
      placeholder="Nedir?"
      type="text"
      class="w-full p-2 bg-gray-700 border-[1px] border-gray-400 rounded-md outline-none"
    />
  </section>
</template>

<script>
export default {
  props: {
    AddTodo: Function,
  },
  setup(props) {
    const newItem = (event) => {
      props.AddTodo(event.target.value);
      event.target.value = "";
    };
    return { newItem };
  },
};
</script>
