<template>
  <app-header />
  <div class="container">
    <h3>Bu benim ilk Vue CLI Uygulamam</h3>
    <p>Bugün component ve Vue CLI konularını görüyoruz..</p>
  </div>
  <!-- <CounterItem></CounterItem> -->
  <counter-item />
  <counterItem />
  <!-- <benim-guzel-sayacim></benim-guzel-sayacim> -->
</template>
<script>
import CounterItem from "@/components/CounterItem";
export default {
  components: {
    CounterItem,
    // "benim-guzel-sayacim": CounterItem,
  },
};
</script>
