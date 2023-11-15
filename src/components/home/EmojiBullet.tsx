import {Box} from "@mui/material";

export type Bio = {
    emoji : string,
    text : string 
}

function EmojiBullet(props : Bio) {
    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{props.emoji}</Box> 
                 {props.text}
        </Box>
    );
}

export default EmojiBullet;