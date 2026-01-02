import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import Footer from './components/Footer.jsx'
import { routes } from './routes/routes.tsx'

function App() {
  return (
    <div className="">
      <NavigationBar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer className="mx-auto w-full mt-auto" />
    </div>
  )
}

export default App
