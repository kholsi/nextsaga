import axios from 'axios'

axios.defaults.responseType = 'json'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
})

api.interceptors.request.use(
  async (config) => {
    // TODO: Customize to get your authentication token
    const token = 'authentication-token'
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response?.data
  },
  (error) => {
    if (error?.response?.status === 401) {
      // TODO: Add your logout method
    }
    return Promise.reject(error.response)
  }
)

export default api
