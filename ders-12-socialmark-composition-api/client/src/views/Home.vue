<template>
  <AppHeader />
  <div class="flex flex-row">
    <Sidebar @category-changed="updateBookmarkList" />
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bookmark bulunmamaktadır..</div>
  </div>
</template>
<script setup>
import Sidebar from "@/components/Home/Sidebar";
import { ref, onMounted, inject } from "vue";
import { useStore } from "vuex";
const appAxios = inject("appAxios");
const socket = inject("socket");
const bookmarkList = ref([]);
const store = useStore();

onMounted(() => {
  socket.on("NEW_BOOKMARK_ADDED", bookmark => {
    bookmarkList.value.push(bookmark);
  });
});

const fetchData = () => {
  appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
    bookmarkList.value = bookmark_list_response?.data || [];
  });
  //! Bookmark olarak eklediklerimizi çekmek için user_bookmarks üzerinden çekelim..
  appAxios.get("/user_bookmarks/?_expand=bookmark&_expand=user").then(user_bookmark_response => {
    store.commit("setBookmarks", user_bookmark_response?.data);
  });

  //! Like olarak eklediklerimizi çekmek için user_likes üzerinden çekelim..
  appAxios.get("/user_likes/?_expand=bookmark&_expand=user").then(user_likes_response => {
    store.commit("setLikes", user_likes_response?.data);
  });
};
const updateBookmarkList = categoryId => {
  const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`;
  appAxios.get(url).then(bookmark_list_response => {
    bookmarkList.value = bookmark_list_response?.data || [];
  });
};

fetchData();
</script>
