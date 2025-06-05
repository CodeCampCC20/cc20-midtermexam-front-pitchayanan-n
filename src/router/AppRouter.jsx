import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/LoginPage'
import Home from '../pages/Home'
import ToDoPage from '../pages/TodoPage'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='todo' element={<ToDoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter