"use client";

import {Typography, Box, TextField, Button, Divider} from '@mui/material';
import { useState, useRef } from 'react';
import * as htmlToImage from "html-to-image";

function Home() {
    const postcardRef = useRef<HTMLDivElement>(null);
    const [image, setImage] = useState<string | null>(null);

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

    // Handle input changes for "from", "to", and "message"
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { id, value } = e.currentTarget;

        setContent(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    // Handle image upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => setImage(reader.result as string);
        reader.readAsDataURL(file);
    };

    // Download postcard as PNG
    const handleDownload = async () => {
        if (!postcardRef.current) return;

        const dataUrl = await htmlToImage.toPng(postcardRef.current, {
            quality: 1,
            pixelRatio: 2, // better resolution
        });

        const link = document.createElement("a");
        link.download = "postcard.png";
        link.href = dataUrl;
        link.click();
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
                    <TextField id="message" label="Message" multiline rows={6} sx={{width:'100%'}} value={content.message} onChange={handleInputChange} slotProps={{ htmlInput: { maxLength: 500 } }} helperText="Max 500 characters"/>
                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap: 2}}>
                        <Box sx={{display: 'flex', justifyContent: 'left', marginTop: 2}}>
                            <Button variant="contained" component="label" sx={{backgroundColor:'#464D77'}}>
                                Upload Image
                                <input hidden type="file" accept="image/*" onChange={handleImageUpload} />
                            </Button>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'right', marginTop: 2}}>
                            <Button variant="contained" sx={{backgroundColor:'#464D77'}} onClick={() => setContent({from: '', to: '', message: ''})}>Clear</Button>
                        </Box>
                    </Box>
                </Box>

                {/* Postcard Preview Section */}
                <Box style={{display:'flex', flexDirection: 'column', width:'60%', marginLeft: '16px', justifyContent:'center', alignItems: 'center'}}>
                    {/* Preview of postcard */}
                    <Box ref={postcardRef} id="preview-postcard" style={{width:'650px', height: '450px', backgroundColor:'white', backgroundImage: 'repeating-linear-gradient(45deg, #E41E3F 0px, #E41E3F 10px, white 10px, white 20px, #003DA5 20px, #003DA5 30px)', border: '1px solid black', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {content.from === '' && content.to === '' && content.message === '' ? (
                            <Box sx={{display:'flex', flexDirection:'row', padding: 2, gap: 2, width:'600px', height: '400px', alignItems:'center', backgroundColor: 'white'}}>
                                <Typography variant="h5" color="textSecondary" sx={{padding: 2, textAlign: 'center'}}>This is a preview of your postcard! You can see the changes you make in real time here.</Typography>
                            </Box>
                        ) :                         
                        <Box sx={{display:'flex', flexDirection:'row', padding: 2, gap: 2, width:'600px', height: '400px', alignItems:'center', position: 'relative', backgroundColor: 'white'}}>
                                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', alignItems:'left', flexBasis:'40%', height: '90%'}}>
                                    {/* Sender and Recepient */}
                                    <Typography variant="h6" sx={{textAlign: 'left'}}>From: {content.from}</Typography>
                                    <Typography variant="h6" sx={{textAlign: 'left'}}>To: {content.to}</Typography>
                                    {/* Optional Photo Upload */}
                                    {image && (
                                        <Box
                                            component="img"
                                            src={image}
                                            sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            }}
                                        />
                                    )}
                                </Box>
                                <Divider orientation='vertical' sx={{width: '2px', height: '90%', alignItems:'center'}}/>
                                {/* Message Content */}
                                <Box sx={{flexBasis:'60%', height: '80%', overflow: 'hidden', padding: 2, marginTop:10}}>
                                    <Typography sx={{whiteSpace: 'pre-wrap', textWrap:'wrap'}}>{content.message}</Typography>
                                </Box>
                                {/* Static Postage Mark */}
                                <Box sx={{position: 'absolute', width: '80px', height: '80px', display:'flex', top:16, right:8, justifyContent:'center', alignItems:'center'}}>
                                    <img src="/images/postage.png" alt="Postage Stamp" style={{width: '100%', height: '100%'}} />
                                </Box>
                            </Box>
                        }
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'right', width: '80%', marginTop: 2}}>
                        <Button variant="contained" sx={{backgroundColor:'#464D77', marginLeft: '16px'}} onClick={handleDownload}>Download</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Home;