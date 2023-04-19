import axios, { AxiosInstance, AxiosStatic } from 'axios'

const accessToken = localStorage.getItem('access_token')

export const axiosInstance = axios.create({
  baseURL: 'http://88.218.170.195:8000',
})

export const axiosTokenInstance = axios.create({
  baseURL: 'http://88.218.170.195:8000',
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : null,
  },
})

axiosValidator(axiosInstance)
axiosValidator(axiosTokenInstance)

//Нужна обработка когда токена нет.
//Нужно осознанно обработать ошибки. Мне не нравится проверка в теле if
function axiosValidator(item: AxiosStatic | AxiosInstance) {
  item.interceptors.response.use(undefined, (error) => {
    if (!Object.prototype.hasOwnProperty.call(error, 'response')) {
      console.error('Unexpected error during request')
      throw error
    }

    return new Promise((resolve, reject) => {
      switch (error.response.status) {
      case 401:
        console.warn('You are not authorized')
        break
      case 500:
        console.error('Server error occurred', error.response)
        break
      }
      reject(error)
    })
  })
}
