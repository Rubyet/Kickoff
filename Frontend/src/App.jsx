import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Random from './page/Random/Random'
import Random_Test from './page/Random/Random_Test'
import Home from './page/Home'
import Kickoff from './page/kickoff/Kickoff'
import Test from './page/Test'
import Fixtures from './page/fixtures/Fixtures'

function App() {

  return (
    <>
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random/:id" element={<Random />} />
          <Route path="/test" element={<Random_Test />} />
          <Route path="/kickoff" element={<Kickoff />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/test1" element={<Test />} />

        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
