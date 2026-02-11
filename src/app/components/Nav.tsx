"use client";

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Nav() {
    const pathname = usePathname() || '/';

    return (
        <Box position="static" style={{display: 'flex', flexDirection: 'row', padding: '16px', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography id="title" variant="h1">Postcard App</Typography>
            <Toolbar style={{display: 'flex', justifyContent: 'center', gap: 16}}>
                <Link href="/">
                    <Button color={pathname === '/' ? 'secondary' : 'inherit'}>Home</Button>
                </Link>
                <Link href="/about">
                    <Button color={pathname === '/about' ? 'secondary' : 'inherit'}>About</Button>
                </Link>
            </Toolbar>
        </Box>
    );
}