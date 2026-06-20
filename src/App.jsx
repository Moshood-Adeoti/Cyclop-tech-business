 import React from 'react'
// import Count from './components/Count'
import Nav from './components/Nav'
import LogInPage from './components/LogInPage'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
 
 
 
 const App = () => {
   return (
     <div >

 <Routes>
<Route element={<LogInPage/>} path="/" /> 
<Route element={<Home/>} path="/Home"/> 
 </Routes>
 


     </div>
   )
 }
 
 export default App