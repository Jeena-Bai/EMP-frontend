import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Emp_Form from './components/Emp_Details'
import Emp_Details from './components/Emp_Details'
import Main from './components/Main'

function App() {
  

  return (
    <div>
    <Routes>
    <Route path={'/'} element={<Main child={<Home/>}/>}></Route>
    <Route path={'/details'} element={<Main child={<Emp_Details/>}/>}></Route>
    </Routes>
      
        
    </div>
  )
  }


export default App
