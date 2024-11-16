export const useUserStore = defineStore('userStore', () => {
  const user = ref(null)
  async function fetchUser(client) {
    try {
      const response = await client.auth.getUser()
      user.value = response.data.user
    } catch (error) {
      console.error('Failed to fetch user:', error)
    }
  }
  function getUser() {
    return user
  }

  return {
    user,
    fetchUser,
    getUser,
  }
})
