import {Typography, Box} from '@mui/material';

function Home() {
    
    return (
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0}}>
            <Box style={{display:'flex', justifyContent:'center', marginTop: '16px', alignContent: 'center', flex: '0 0 auto'}}>
                <Typography>This is creative webpage where you can personalize your postcards!</Typography>
            </Box>
            <Box style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginTop: '16px', alignContent: 'center', flex: 1, minHeight: 0}}>
                <Box style={{display:'flex', flexDirection: 'column', justifyContent:'center', marginRight: '16px', alignContent: 'center', width: '40%', textAlign: 'center'}}>
                    <Typography>Placeholder</Typography>
                    <Typography>Placeholder</Typography>
                    <Typography>Placeholder</Typography>
                    <Typography>Placeholder</Typography>
                </Box>
                <Box style={{display:'flex', width:'60%', marginLeft: '16px', justifyContent:'center', alignItems: 'center'}}>
                    {/* Preview of postcard */}
                    <Box style={{width:'80%', aspectRatio: '3/2', backgroundColor:'lightgray', border: '1px solid black', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography>This is a preview of your postcard! You can see the changes you make in real time here.</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Home;