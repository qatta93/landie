import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-[60px] w-full mt-1.5 px-[165px]">
      <section className="flex-1 my-auto">
        <div className="flex text-sm text-blue-500 cursor-pointer">
          <Link href='/' className="mr-[60px]">Home</Link>
          <Link href='/about' className="mr-[60px]">About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </section>
      <h3 className=" text-blue-600 my-auto">Landie</h3>
      <div className="flex-1 my-auto text-right">
        <Button
          className="my-auto"
          variant={'primary'}
          size={'sm'}>
          Buy Now 
        </Button>
      </div>
    </nav>
  )
}

export default Navbar;