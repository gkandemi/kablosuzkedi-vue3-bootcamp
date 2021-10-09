import { inject, computed } from "vue";
import { useStore } from "vuex";
export default function(item) {
  const store = useStore();
  const appAxios = inject("appAxios");

  const likeItem = () => {
    appAxios({
      url: alreadyLiked.value ? `/user_likes/${likedItem.value.id}` : "/user_likes",
      method: alreadyLiked.value ? "DELETE" : "POST",
      data: {
        userId: _getCurrentUser.value.id,
        bookmarkId: item.id
      }
    }).then(user_like_response => {
      let bookmarks = [..._userLikes.value];
      if (alreadyLiked.value) {
        bookmarks = bookmarks.filter(b => b.id !== likedItem.value.id);
      } else {
        bookmarks = [...bookmarks, user_like_response.data];
      }
      store.commit("setLikes", bookmarks);
    });
  };
  const bookmarkItem = () => {
    appAxios({
      url: alreadyBookmarked.value ? `/user_bookmarks/${bookmarkedItem.value.id}` : "/user_bookmarks",
      method: alreadyBookmarked.value ? "DELETE" : "POST",
      data: {
        userId: _getCurrentUser.value.id,
        bookmarkId: item.id
      }
    }).then(user_bookmark_response => {
      let bookmarks = [..._userBookmarks.value];
      if (alreadyBookmarked.value) {
        bookmarks = bookmarks.filter(b => b.id !== bookmarkedItem.value.id);
      } else {
        bookmarks = [...bookmarks, user_bookmark_response.data];
      }
      store.commit("setBookmarks", bookmarks);
    });
  };
  const categoryName = computed(() => item?.category?.name || "-");
  const userName = computed(() => item?.user?.fullname || "-");
  const alreadyLiked = computed(() => Boolean(likedItem.value));
  const alreadyBookmarked = computed(() => Boolean(bookmarkedItem.value));

  const bookmarkedItem = computed(() => _userBookmarks.value?.find(b => b.bookmarkId === item.id));
  const likedItem = computed(() => _userLikes.value?.find(b => b.bookmarkId === item.id));
  const _getCurrentUser = computed(() => store.getters._getCurrentUser);
  const _userLikes = computed(() => store.getters._userLikes);
  const _userBookmarks = computed(() => store.getters._userBookmarks);

  return { likeItem, bookmarkItem, categoryName, userName, alreadyBookmarked, alreadyLiked, bookmarkedItem, likedItem, _getCurrentUser, _userBookmarks, _userLikes };
}
