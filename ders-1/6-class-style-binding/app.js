const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
      redBG: false,
      boxClass: "border red",
      bgColor: "cyan",
    };
  },
  computed: {
    boxClasses() {
      return { border: this.showBorder, red: this.redBG };
    },
  },
}).mount("#app");
