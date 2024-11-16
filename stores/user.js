export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
})
