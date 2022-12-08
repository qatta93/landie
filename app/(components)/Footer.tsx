import Link from "next/link";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube, faInstagram  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  const socialMediaIcons = [faFacebookF, faLinkedinIn, faTwitter, faYoutube, faInstagram]

  return (
    <footer className="w-full h-[210px] bg-blue-100 px-[165px] pt-[60px] pb-[26px]">
      <section className="flex">
        <p className="my-auto flex-1 text-grey-400 text-sm font-medium">@{new Date().getFullYear()} Yourcompany</p>
        <h3 className=" text-blue-600 my-auto">Landie</h3>
        <div className="flex-1 my-auto text-right">
          <Button
            variant={'primary'}
            size={'xs'}
          >
            Purchase now
          </Button>
        </div>
      </section>
      <hr className=" h-px bg-grey-200 mt-[47px] mb-[20px]"/>
      <section className="flex justify-between">
        <nav className="flex text-sm text-blue-300 leading-6 cursor-pointer">
          <Link href='/' className="mr-[60px]">Home</Link>
          <Link href='/about' className="mr-[60px]">About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <ul className="grid grid-cols-5 gap-x-[30px] text-grey-300">
          {socialMediaIcons.map((socialMediaIcon:any) => (
            <li className="h-[16px] w-[16px] my-auto flex justify-center">
              <FontAwesomeIcon icon={socialMediaIcon}/>
            </li>
          ))}
        </ul>
      </section>
  
    </footer>
  )
}

export default Footer;