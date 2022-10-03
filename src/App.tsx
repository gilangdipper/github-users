import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

import ReactQueryClient from './provider/ReactQueryClient'

import './App.css'

function App() {
  const createRoute = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userName" element={<UserDetails />} />
      <Route path="/error" element={<div>error page</div>} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  )
  return (
    <div className="App">
      <ReactQueryClient>
        <BrowserRouter>{createRoute()}</BrowserRouter>
      </ReactQueryClient>
    </div>
  )
}

export default App
