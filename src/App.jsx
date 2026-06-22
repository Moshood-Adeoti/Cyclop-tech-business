 import React from 'react'
// import Count from './components/Count'
import Nav from './components/Nav'
import LogInPage from './components/LogInPage'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import { AllPaths } from './components/Path'
import Services from './components/Services'
import Products from './components/Products'
 
 
 
 const App = () => {
   return (
     <div >

 <Routes>
<Route element={<LogInPage/>} path="/" /> 
<Route element={<Home/>} path={AllPaths.home}/> 
<Route element={<Services/>} path={AllPaths.services}/>
<Route element={<Products/>} path={AllPaths.Products}/> 
 </Routes>
 


     </div>
   )
 }
 
 export default App