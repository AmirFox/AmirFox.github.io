import {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Home from "../home/Home";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import NavBar from '../navBar/NavBar';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode') ?? 'darkMode');

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light} width={"100vw"}>
                        <NavBar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
                        <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/about'} element={<About/>}/>
                  <Route path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
      </Box>
   )
}
