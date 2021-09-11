<template>
  <div>
    <div class="table-header flex">
      <span class="text-left p-1 w-[200px] mr-2">Ürün Adı</span>
      <span class="text-left p-1 w-[50px] mr-2">Adet</span>
      <span class="text-left p-1 w-[100px] mr-2">Fiyat</span>
      <span class="p-1 w-[100px]">Toplam</span>
    </div>
    <div class="table-body">
      <invoice-item v-for="item in items" :key="item.id" :item="item" />
      <button @click="AddInvoiceItem" class="mt-4 add-item-button">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
        <span class="text-gray-400">Ekle</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import invoiceItem from "./invoiceItem.vue";
defineProps({ items: Array, AddInvoiceItem: Function });
</script>
