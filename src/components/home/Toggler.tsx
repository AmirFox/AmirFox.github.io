import React, { MouseEventHandler } from 'react';
import {Box} from "@mui/material";

export default function Toggler(props : {darkMode : boolean, handleClick : MouseEventHandler}) {
    const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            props.darkMode ?
               <span onClick={props.handleClick} aria-label="Full Moon" role="img">🌕</span>
               :
               <span onClick={props.handleClick} aria-label="New Moon" role="img">🌑</span>
         }
      </Box>
   )
}