import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Random from './page/Random/Random'
import Random_Test from './page/Random/Random_Test'
import Home from './page/Home'

function App() {

  return (
    <>
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<Random />} />
          <Route path="/test" element={<Random_Test />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
