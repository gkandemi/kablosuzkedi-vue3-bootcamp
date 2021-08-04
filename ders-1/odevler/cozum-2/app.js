const app = Vue.createApp({
  data() {
    return {
      value: "",
      value2: "",
    };
  },
  methods: {
    showMeAlert() {
      alert("Bu bir alert..");
    },
    keyDownEvent(e) {
      console.log("Event", e);
      this.value = e.target.value;
    },
    keyDownEvent2(e) {
      console.log("Event", e);
      this.value2 = e.target.value;
    },
  },
});
app.mount("#exercise");
