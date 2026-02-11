import {Typography, Box} from '@mui/material';

function Home() {
    
    return (
        <div style={{height:'100%'}}>
            <Box style={{display:'flex', justifyContent:'center', marginTop: '16px', alignContent: 'center'}}>
                <Typography>This is creative webpage where you can personalize your postcards!</Typography>
            </Box>
            <Box style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginTop: '16px', alignContent: 'center'}}>
                <Box style={{display:'flex', flexDirection: 'column', justifyContent:'center', marginRight: '16px', alignContent: 'center', width: '40%', textAlign: 'center'}}>
                    <Typography>Placeholder</Typography>
                    <Typography>Placeholder</Typography>
                    <Typography>Placeholder</Typography>
                    <Typography>Placeholder</Typography>
                </Box>
                <Box style={{display:'flex', width:'60%', justifyContent:'center', marginLeft: '16px', alignContent: 'center'}}>
                    <Box style={{width:'50vw', height:'40vh', backgroundColor:'lightgray', border: '1px solid black', borderRadius: '8px'}}>
                        <Typography>This is a preview of your postcard! You can see the changes you make in real time here.</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Home;