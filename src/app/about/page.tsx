import { Box, Typography } from "@mui/material";

export default function About() {
    
    return (
        <Box sx={{flex:1,display:'flex', flexDirection:'row', margin:'0 5rem 0 5rem', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{marginRight:'3rem'}}>
                <img src='/images/Luca-cartoon.png' alt="Luca's Cartoon" width="200" height="200" style={{border:'1px solid black', borderRadius:'50%', objectFit:'cover'}}/>
            </Box>
            <Box>
                <Typography sx={{color:'var(--color-primary)'}}>Hi, I am Luca, software engineer that developed this app.</Typography>
                <Typography sx={{color:'var(--color-primary)', marginTop: 2}}>Thank you for visiting the Postcard App!</Typography>
                <Typography sx={{color:'var(--color-primary)', marginTop: 2}}>Checkout my Profile: <a href="https://portfolio-byzk.onrender.com/">Portfolio Link</a></Typography>
            </Box>
        </Box>
    )
}