const app = Vue.createApp({
  data() {
    return {
      title: "Bu Vue tarafından gelen bir bilgidir..",
      content: "lorem ipsum dolor sit amet",
      hobbies: [1, 2, 3, 4, 5],
      personal: {
        name: "Gokhan",
        lname: "Kandemir",
        phone: "xxxxx",
      },
      details: `<a href="https://eduflow.kablosuzkedi.com">Müfredat için tıklayınız</a>`,
      url: "https://eduflow.kablosuzkedi.com",
      coordX: 0,
      coordY: 0,
      fullName: "Gokhan Kandemir",
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title || "Bu benim yeni mesajım...";
    },
    updateCoords(e) {
      //   console.log("e :>> ", e);
      this.coordX = e.offsetX;
      this.coordY = e.offsetY;
      this.updateTitle(`${this.coordX},${this.coordY}`);
    },
    updateValue(customText, e) {
      console.log(customText, e);
      this.fullName = e.target.value;
    },
  },
}).mount("#app");

// Vue2 Version..
// new Vue({
//     el : "#app",
//     data : {}
// })
