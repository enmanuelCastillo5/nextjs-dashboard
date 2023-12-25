import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1 className='text-blue-500'>Titulo principal</h1>
        <div style={{ border: '1px solid #000' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
