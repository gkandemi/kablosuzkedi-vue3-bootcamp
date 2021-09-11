<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <app-sidebar :invoices="invoiceList" :editInvoice="editInvoice" />
    <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import appSidebar from "./components/appSidebar.vue";
import invoiceContent from "./components/invoiceContent.vue";
const invoiceList = ref([
  {
    id: new Date().getTime(),
    contact: {
      contact_name: "Demo 1",
      email: "demo@demo.com",
      city: "Marmaris",
      country: "Demo Country",
      zipcode: "DemoZipCode",
    },
    items: [
      {
        id: new Date().getTime(),
        name: "Demo Ürün",
        qty: 1,
        unit_price: 10.0,
        total_price: 10.0,
      },
    ],
  },
]);
const state = reactive({ activeInvoice: null });
const saveInvoice = (invoice) => {
  console.log("invoice :>> ", invoice);
  invoiceList.value.push(invoice);
};
const editInvoice = (invoice) => {
  console.log(invoice);
  state.activeInvoice = invoice;
  // setTimeout(() => {
  //   state.activeInvoice = null;
  // }, 2000);
  console.log("state.activeInvoice :>> ", state.activeInvoice);
};
</script>
