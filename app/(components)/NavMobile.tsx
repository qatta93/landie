import React from 'react'
import Link from "next/link";

interface NavMobileProps {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = ({setShowMobileNav}:NavMobileProps) => {
  return (
    <section className="h-full w-full bg-grey-100 flex my-auto mx-auto justify-center">
      <button onClick={() => setShowMobileNav((current:boolean) => !current)} className='flex flex-col mx-0 justify-center text-xl font-semibold text-blue-500 cursor-pointer'>
        <Link href='/' className='w-full'>Home</Link>
        <Link href='/about' className='my-8 w-full'>About</Link>
        <Link href='/contact' className='w-full'>Contact</Link>
      </button>
    </section>
  )
}

export default NavMobile;
