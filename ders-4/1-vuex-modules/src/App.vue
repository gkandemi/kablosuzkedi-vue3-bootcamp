<template>
  <p>
    {{ $store.state.mainName }}
  </p>

  <p>
    {{ $store.state.musteri.contactName }}
  </p>

  <pre>
    {{ musteriADI }}
  </pre>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    console.log(this.$store.getters["musteri/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriADI: "musteri/_contactName"
    })
  }
};
</script>
