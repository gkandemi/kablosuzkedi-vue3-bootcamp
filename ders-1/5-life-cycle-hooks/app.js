const app = Vue.createApp({
  data() {
    return {
      title: "Test Başlığı",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate Çalıştı..");
  },
  created() {
    console.log("created Çalıştı..");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 56, 7, 8];
    }, 2000);

    setTimeout(() => {
      this.title = "Bu yeni başlık.";
    }, 3000);
  },
  beforeMount() {
    console.log("beforeMount Çalıştı..");
  },
  mounted() {
    console.log("mounted Çalıştı..");
  },
  beforeUpdate() {
    console.log("beforeUpdate Çalıştı..");
  },
  updated() {
    console.log("updated Çalıştı..");
  },
  beforeUnmount() {
    console.log("beforeUnmount Çalıştı..");
  },
  unmounted() {
    console.log("unmounted Çalıştı..");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 5000);
// const app2 = Vue.createApp({})
