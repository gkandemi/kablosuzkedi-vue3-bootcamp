<template>
  <h1>{{ $route.params.userID }}</h1>
  <p>Aciklamalar burada yer alacaktır..</p>
  <!-- <p>{{ $route.params.userID }}</p> -->
  <p>{{ $route.query.klan }}</p>
  <button @click="goBack">Geri Dön</button>
</template>
<script>
export default {
  created() {
    console.log(this.$route);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>
