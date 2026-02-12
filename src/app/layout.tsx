import '../styles/main.css';
import Nav from './components/Nav';
import {Typography} from '@mui/material';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{display:'flex', minHeight: '100vh', flexDirection: 'column'}}>
        <div>
          <Nav />
        </div>
        <main style={{flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0}}>
          {children}
        </main>
      </body>
    </html>
  );
}