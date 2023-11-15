import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props : {image : string, live : string, source : string, title : string}) {
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={props.image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{props.title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={props.live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={props.source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;