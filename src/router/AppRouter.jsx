import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/LoginPage'
import TodoPage from '../pages/TodoPage'
import Home from '../pages/Home'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='todo' element={<TodoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter