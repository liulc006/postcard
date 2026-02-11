import '../styles/main.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div style={{display:'flex', justifyContent:'center'}}>
          <h1 id="title">Postcard App</h1>
        </div>
        {children}
      </body>
    </html>
  );
}