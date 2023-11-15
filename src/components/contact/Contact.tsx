import { Box } from "@mui/material";

const Contact = () => {
    return <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
        justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
        <Box />
        <Box>
            <h1>Get in touch!</h1>
            <h2>This page is under construction :(</h2>
        </Box>
    </Box>
}

export default Contact;