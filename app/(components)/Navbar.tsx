import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-[60px] w-full mt-1.5 px-[165px]">
      <section className="grid grid-cols-3 gap-x-[60px] content-center text-sm text-blue-500 cursor-pointer">
        <Link href='/home'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </section>
      <h1 className="text-[26px] text-blue-600 my-auto font-black">Landie</h1>
      <Button
        className="my-auto"
        variant={'primary'}
        size={'sm'}>
        Buy Now 
      </Button>
    </nav>
  )
}

export default Navbar;