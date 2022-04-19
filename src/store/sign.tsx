import { atom, selector, RecoilState } from 'recoil'

const countState = atom<number>({
  key: 'counter',
  default: 0,
})

export default countState
