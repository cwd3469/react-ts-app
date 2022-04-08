import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, Sign } from '../pages'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
