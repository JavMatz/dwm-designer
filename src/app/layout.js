// import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'dwm previewer',
    description: 'Design your dwm style!',
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body style={{backgroundColor: '#111111',fontFamily: 'sans'}}> {children}</body>
        </html>
    )
}
