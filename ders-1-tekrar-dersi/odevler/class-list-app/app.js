const app = Vue.createApp({
  data() {
    return {
      styles: {
        backgroundColor: false,
        border: false,
        borderRadius: false,
        color: false,
        fontBold: false,
        fontItalic: false,
      },
    };
  },
  computed: {
    textAreaClass() {
      return {
        backgroundColor: this.styles.backgroundColor,
        border: this.styles.border,
        borderRadius: this.styles.borderRadius,
        color: this.styles.color,
        fontBold: this.styles.fontBold,
        fontItalic: this.styles.fontItalic,
      };
    },
  },
}).mount("#app");
