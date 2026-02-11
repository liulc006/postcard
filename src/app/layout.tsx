import '../styles/main.css';
import Nav from './components/Nav';
import {Typography} from '@mui/material';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{minHeight: '100vh'}}>
        <div>
          <Nav />
        </div>
        {children}
      </body>
    </html>
  );
}