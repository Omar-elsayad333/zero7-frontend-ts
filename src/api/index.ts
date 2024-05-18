// api.ts file
import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE
})

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  // Modify the request config here
  return config
})

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle the response here
    return response
  },
  (error) => {
    // Handle errors here
    console.error(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
