import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Country } from './pages'
import { SingleCountry } from './components'
import { AppProvider } from './context/Country'

function App() {
  return (
    <AppProvider>
      <div className="App container m-auto p-6">
        <Routes>
          <Route path="/" element={<Country />} />
          <Route path="/country/:name" element={<SingleCountry />} />
        </Routes>
      </div>
    </AppProvider>
  )
}

export default App
