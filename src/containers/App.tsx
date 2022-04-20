import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Sign, Orders, User, Mypage } from '../pages'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/user" element={<User />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
