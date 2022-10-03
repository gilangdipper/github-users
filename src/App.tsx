import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

import ReactQueryClient from './provider/ReactQueryClient'

import './App.css'

function App() {
  const location = useLocation()
  const createRoute = () => (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={200}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userName" element={<UserDetails />} />
          <Route path="/error" element={<div>error page</div>} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
  return (
    <div className="App">
      <ReactQueryClient>{createRoute()}</ReactQueryClient>
    </div>
  )
}

export default App
