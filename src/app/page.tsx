"use client";

import {Typography, Box, TextField} from '@mui/material';
import { useState } from 'react';

function Home() {
    type Content = {
        from: string;
        to: string;
        message: string;
    }

    const [content, setContent] = useState<Content>({
        from: '',
        to: '',
        message: '',
    });

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { id, value } = e.currentTarget;

        setContent(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, marginRight: '16px', marginLeft: '16px'}}>
            <Box style={{display:'flex', justifyContent:'center', marginTop: '16px', alignContent: 'center', flex: '0 0 auto'}}>
                <Typography>This is creative webpage where you can personalize your postcards!</Typography>
            </Box>
            <Box style={{display:'flex', flexDirection: 'row', justifyContent:'center', marginTop: '16px', alignContent: 'center', flex: 1, minHeight: 0}}>
                {/* Postcard Input Section */}
                <Box style={{display:'flex', flexDirection: 'column', justifyContent:'center', marginLeft: '20px', marginRight: '16px', alignContent: 'center', width: '40%', textAlign: 'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 2, justifyContent:'space-between'}}>
                        <TextField id="from" label="From" sx={{width:'10rem'}} value={content.from} onChange={handleInputChange}/>
                        <TextField id="to" label="To" sx={{width:'10rem'}} value={content.to} onChange={handleInputChange}/>
                    </Box>
                    <TextField id="message" label="Message" multiline rows={4} sx={{width:'100%'}} value={content.message} onChange={handleInputChange}/>
                </Box>

                {/* Postcard Preview Section */}
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