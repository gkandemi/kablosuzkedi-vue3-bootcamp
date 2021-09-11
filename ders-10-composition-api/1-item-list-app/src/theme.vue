<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <aside class="bg-gray-700 w-[300px] h-screen">
      <h3 class="text-2xl font-bold mt-2 p-2">Fatura Listesi</h3>
      <div v-for="i in 5" :key="i" class="odd:bg-gray-600 flex justify-between items-center p-2">
        <span>#45fg4</span>
        <span>Kablosuzkedi</span>
        <span>
          <button class="danger-button mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" height="16" viewBox="0 0 24 24" width="16">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
            </svg>
          </button>
          <button class="purple-button">
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
    <section class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
      <!-- FAtura Bilgileri -->
      <h3 class="text-gray-400 text-xl">Fatura Bilgileri</h3>
      <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mb-2" />
      <div>
        <label for="client_name" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">Müşteri Adı</small>
          <input autocomplete="off" id="client_name" class="input" type="text" />
        </label>
        <label for="client_email" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">E-posta</small>
          <input autocomplete="off" id="client_email" class="input" type="email" />
        </label>

        <div class="grid grid-cols-3 gap-5">
          <label for="city" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Şehir</small>
            <input autocomplete="off" id="city" class="input" type="text" />
          </label>
          <label for="zip_code" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Posta Kodu</small>
            <input autocomplete="off" id="zip_code" class="input" type="text" />
          </label>
          <label for="country" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Ülke</small>
            <input autocomplete="off" id="country" class="input" type="text" />
          </label>
        </div>
      </div>

      <div class="mt-5">
        <h3 class="text-gray-400 text-xl">Fatura Kalemleri</h3>
        <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mb-2" />
        <div class="table-header flex">
          <span class="text-left p-1 w-[200px] mr-2">Ürün Adı</span>
          <span class="text-left p-1 w-[50px] mr-2">Adet</span>
          <span class="text-left p-1 w-[100px] mr-2">Fiyat</span>
          <span class="p-1 w-[100px]">Toplam</span>
        </div>
        <div class="table-body">
          <div v-for="i in 5" :key="i" class="table-body-item group">
            <input autocomplete="off" type="text" class="input w-[200px] mr-2" />
            <input autocomplete="off" type="text" class="input w-[50px] mr-2" />
            <input autocomplete="off" type="text" class="input w-[100px] mr-2" />
            <span class="p-1 text-center text-gray-400">$1500</span>
            <div class="text-right flex-grow">
              <button class="delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                </svg>
              </button>
            </div>
          </div>
          <button class="mt-4 add-item-button">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <span class="text-gray-400">Ekle</span>
          </button>
        </div>
      </div>
      <!-- Summary -->
      <div class="summary mt-5 flex justify-end items-end">
        <div class="text-right mr-2">
          <div class="text-gray-500">Ara Toplam :</div>
          <div class="text-gray-400">KDV Toplam :</div>
          <div class="text-gray-300">Genel Toplam :</div>
        </div>
        <div class="text-right">
          <div class="text-gray-500">100,00</div>
          <div class="text-gray-400">18,00</div>
          <div class="text-gray-300">118,00</div>
        </div>
      </div>

      <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
      <div class="actionbar text-right my-5">
        <button class="purple-button">Kaydet</button>
      </div>
    </section>
  </div>
</template>
