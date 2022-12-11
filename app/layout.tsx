import '../styles/globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/Navbar';
import Head from './head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
