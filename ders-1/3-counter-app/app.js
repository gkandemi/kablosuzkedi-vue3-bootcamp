const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    getCounterResult() {
      console.log("Counter 1 Çalıştı");
      return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
    getCounter2Result() {
      console.log("Counter 2 Çalıştı");
      return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log("Counter", oldValue, "=>", newValue);
    },
    getCounterResult(newValue, oldValue) {
      console.log("RESULT", oldValue, "=>", newValue);
    },
  },
  //   methods: {
  //     inc() {
  //       this.counter++;
  //     },
  //     dec() {
  //       this.counter--;
  //     },
  //   },
}).mount("#app");
