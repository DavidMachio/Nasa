import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Search from './pages/Search/Search'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Rover from './pages/Rover/Rover'
import Home from'./pages/Home/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/rover' element={<Rover/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
