const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods: {
    showAlert() {
      alert();
    },
    valueUpdated(e) {
      console.log(e.target.value);
      this.value = e.target.value;
    },
  },
});
app.mount("#exercise");
