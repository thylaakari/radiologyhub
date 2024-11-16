export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    async fetchUser(client) {
      const {
        data: { user },
      } = await client.auth.getUser()
      this.setUser(user)
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
})
