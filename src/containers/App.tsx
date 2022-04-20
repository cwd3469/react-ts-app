import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Sign, Orders, User, Mypage, Todo, Todo2 } from '../pages'

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/user" element={<User />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todo2" element={<Todo2 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}
export default App
