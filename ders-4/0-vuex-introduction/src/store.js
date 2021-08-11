import { createStore } from "vuex";
const store = createStore({
  state: {
    user: {
      name: "Gokhan",
      lname: "Kandemir",
      age: 33,
      address: {},
      password: 123123123,
      tc: 11111
    },
    theme: "dark",
    fullName: "Defne Kandemir",
    permissions: [1, 2, 3, 4, 5],
    userList: ["Gokhan", "Tayfun", "İlker", "Ramazan", "Defne", "Kamil", "Cemil"],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" }
    ]
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    }
    // changeUser(state, payload){}
  },
  actions: {
    newItem({ commit }, item) {
      console.log("item :>> ", item);
      setTimeout(() => {
        // context.commit("newItem", item);
        commit("newItem", item);
      }, 1000);
    }
  },
  getters: {
    _woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
    _activeUser(state) {
      const user = {
        ...state.user
      };
      delete user.password;
      return user;
    }
  }
});

export default store;
