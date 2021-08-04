Vue.createApp({
  data() {
    return {
      activeColor: "",
      color_palette: [
        {
          id: "red",
          css_class: "red-box",
        },
        {
          id: "green",
          css_class: "green-box",
        },
        {
          id: "blue",
          css_class: "blue-box",
        },
      ],
    };
  },
}).mount("#app");
