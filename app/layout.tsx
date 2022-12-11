'use client'

import React, { useState } from "react";
import Footer from './(components)/Footer';
import Navbar from './(components)/Navbar';
import NavMobile from "./(components)/NavMobile";
import Head from './head'
import '../styles/globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  
  return (
    <html>
      <Head />
      <body>
        <Navbar setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav}/>
         {showMobileNav? <NavMobile setShowMobileNav={setShowMobileNav}/> : children}
        <Footer />
      </body>
    </html>
  )
}
