import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const request = axios.create({
  baseURL: '/',
})

request.defaults.timeout = 3000
request.interceptors.request.use(
  (config) => {
    console.log(config)

    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
const mock = new MockAdapter(request)

mock.onGet('/login').reply(200, {
  id: 1,
  success: true,
})

mock.onGet('/otp').reply(200, {
  id: 1,
  success: true,
  userid: '유저아이디',
  username: '관리자',
  token: 'tocken값입니다.',
})

mock.onGet('/order').reply(200, {
  id: 1,
  success: true,
  userid: '유저아이디',
  username: '관리자',
  token: 'tocken값입니다.',
})

export default request
