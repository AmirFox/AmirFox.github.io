import {MouseEventHandler, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Toggler from '../home/Toggler';
import Style from './NavBar.module.scss'

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

const NavBar = (props: {darkMode: boolean, handleClick : MouseEventHandler}) => {
    const location = useLocation()
    const [, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
                    <Toggler darkMode={props.darkMode} handleClick={props.handleClick}/>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'.51rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.name && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.name && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default NavBar;