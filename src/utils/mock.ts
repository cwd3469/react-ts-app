import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

const mock = new MockAdapter(axios)

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

export default axios
