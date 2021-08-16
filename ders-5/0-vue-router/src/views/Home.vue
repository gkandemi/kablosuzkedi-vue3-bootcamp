<template>
  <h1>Home</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dignissimos accusantium nam maxime doloremque ab consequatur culpa ipsa
    consectetur earum neque, in deserunt suscipit animi facilis, voluptatum adipisci odit hic!
  </p>
  <input type="text" @keydown.enter="goToDetails" />
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      // alert(e.target.value);
      // this.$router.push(`/detay/${e.target.value}`);
      this.$router.push({
        name: "DetailPage",
        params: {
          userID: e.target.value
        },
        query: {
          type: "DetailAuth",
          user: "tayfunerbilen"
        }
      });
    }
  }
};
</script>
