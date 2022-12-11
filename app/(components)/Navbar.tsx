import Link from "next/link";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileNav: boolean;
}

const Navbar = ({setShowMobileNav, showMobileNav}:NavbarProps) => {

  return (
    <nav className="flex justify-between h-[60px] w-full mt-1.5 xl:px-[165px] sm:px-[60px] px-4">
      <section className="flex-1 my-auto">
        <div className="hidden sm:flex text-sm text-blue-500 cursor-pointer">
          <Link href='/' className="mr-[30px] md:mr-[60px]">Home</Link>
          <Link href='/about' className="mr-[30px] md:mr-[60px]">About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </section>
      <h3 className=" text-blue-600 my-auto"><Link href='/'>Landie</Link></h3>
      <Link href='#' className="hidden sm:block flex-1 my-auto text-right">
        <Button
          className="my-auto"
          variant={'primary'}
          size={'sm'}>
          Buy Now 
        </Button>
      </Link>
      <button onClick={() => setShowMobileNav((current:boolean) => !current)} className="text-right flex-1 my-auto sm:hidden">
        <FontAwesomeIcon icon={showMobileNav ? faXmark : faBars} className='h-[40px] text-blue-600'/>
      </button>
    </nav>
  )
}

export default Navbar;