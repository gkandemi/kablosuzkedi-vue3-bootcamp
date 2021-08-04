const app = Vue.createApp({
  data() {
    return {
      fullName: "Küpeli",
    };
  },
  methods: {
    updateValue(kamil) {
      this.fullName = kamil.target.value;
    },
  },
}).mount("#app");
