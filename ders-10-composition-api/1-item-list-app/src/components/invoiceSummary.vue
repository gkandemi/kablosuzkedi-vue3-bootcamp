<template>
  <div class="summary mt-5 flex justify-end items-end">
    <div class="text-right mr-2">
      <div class="text-gray-500">Ara Toplam :</div>
      <div class="text-gray-400">KDV Toplam :</div>
      <div class="text-gray-300">Genel Toplam :</div>
    </div>
    <div class="text-right">
      <div class="text-gray-500">{{ subTotal }}</div>
      <div class="text-gray-400">{{ taxTotal }}</div>
      <div class="text-gray-300">{{ total }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({ items: Array });
const subTotal = computed(() => props.items.reduce((t, i) => t + i.total_price, 0));
const taxTotal = computed(() => subTotal.value * 0.18);
const total = computed(() => subTotal.value + taxTotal.value);
</script>
