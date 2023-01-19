import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@components/loginPage/loginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
