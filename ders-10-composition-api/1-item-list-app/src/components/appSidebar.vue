<template>
  <aside class="bg-gray-700 w-[300px] h-screen">
    <h3 class="text-2xl font-bold mt-2 p-2">Fatura Listesi</h3>
    <div v-for="invoice in invoices" :key="invoice.id" class="odd:bg-gray-600 flex justify-between items-center p-2">
      <span>#{{ invoice.id.toString().slice(0, 4) }}</span>
      <span>{{ invoice.contact.contact_name }}</span>
      <span>
        <button class="danger-button mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" height="16" viewBox="0 0 24 24" width="16">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
          </svg>
        </button>
        <button @click="editInvoice(invoice)" class="purple-button">
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"
            />
          </svg>
        </button>
      </span>
    </div>
  </aside>
</template>
<script setup>
defineProps({ invoices: Array, editInvoice: Function });
</script>
