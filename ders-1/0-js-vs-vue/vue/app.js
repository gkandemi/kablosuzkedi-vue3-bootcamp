const app = Vue.createApp({
  data() {
    return {
      todoText: null,
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoText);
    },
  },
}).mount("#app");
