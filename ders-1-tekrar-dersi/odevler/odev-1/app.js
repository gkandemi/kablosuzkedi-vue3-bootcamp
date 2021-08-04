const app = Vue.createApp({
  data() {
    return {
      name: "kablosuzkedi",
      age: 33,
      imageUrl:
        "http://kablosuzkedi.com/wp-content/uploads/2016/11/Ekran-Resmi-2016-11-12-01.39.36.png",
    };
  },
  methods: {
    getRandom() {
      return Math.round(Math.random());
    },
  },
}).mount("#exercise");
