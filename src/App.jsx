 import React from 'react'
// import Count from './components/Count'
import Nav from './components/Nav'
import LogInPage from './components/LogInPage'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import { AllPaths } from './components/Path'
import Services from './components/Services'
import Products from './components/Products'
import Help from './Pages/Help'
import FAQs from './Pages/FAQs'
import Explore from './Pages/Explore'
 
 
 
 const App = () => {
   return (
     <div >
 
 <Routes>
<Route element={<LogInPage/>} path="/" /> 
<Route element={<Home/>} path={AllPaths.home}/> 
<Route element={<Services/>} path={AllPaths.services}/>
<Route element={<Products/>} path={AllPaths.Products}/> 
<Route element={<Help/>} path={AllPaths.Help_Center}/> 
<Route element={<FAQs/>} path={AllPaths.FAQs}/> 
<Route element={<Explore/>} path={AllPaths.Explore}/> 
 </Routes>
 


     </div>
   )
 }
 
 export default App