const app = Vue.createApp({
  data() {
    return {
      myClass: "text-green bg-orange",
      counter: 0,
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  computed: {
    boxClass() {
      return {
        "text-green": this.counter === 0,
        "text-orange": this.counter === 1,
        "text-default": this.counter === 2,
        "text-blue": this.counter === 3,
        "text-red": this.counter === 4,
      };
    },
  },
}).mount("#app");
