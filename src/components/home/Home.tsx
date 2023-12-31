import Style from './Home.module.scss';
import me from '../../../public/profile.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'100vh'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'my avatar'} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>{info.headline}</h1>
            <h2>{info.byline}</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio: { emoji: string, text: string }, index: number) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               {
                  info.socials.map((social: { link: string, icon: string, label: string },
                     index: number) => (
                     <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                  ))}
            </Box>
         </Box>
      </Box>
   )
}