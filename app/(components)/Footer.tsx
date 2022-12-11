import Link from "next/link";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const Footer = () => {

  const socialMedia = [
    {
      id: 1,
      icon: faFacebookF,
      url: '#'
    },
    {
      id: 2,
      icon: faLinkedinIn,
      url: '#'
    },
    {
      id: 3,
      icon: faTwitter,
      url: '#'
    },
    {
      id: 4,
      icon: faYoutube,
      url: '#'
    },
    {
      id: 5,
      icon: faInstagram,
      url: '#'
    }
  ]

  return (
    <footer className="w-full h-[210px] bg-blue-100 px-[165px] pt-[60px] pb-[26px]">
      <section className="flex">
        <p className="my-auto flex-1 text-grey-400 text-sm font-medium">@{new Date().getFullYear()} Yourcompany</p>
        <h3 className=" text-blue-600 my-auto"><Link href='/'>Landie</Link></h3>
        <Link href='#' className="flex-1 my-auto text-right">
          <Button
            variant={'primary'}
            size={'xs'}
          >
            Purchase now
          </Button>
        </Link>
      </section>
      <hr className=" h-px bg-grey-200 mt-[47px] mb-[20px]"/>
      <section className="flex justify-between">
        <nav className="flex text-sm text-blue-300 leading-6 cursor-pointer">
          <Link href='/' className="mr-[60px]">Home</Link>
          <Link href='/about' className="mr-[60px]">About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <div className="grid grid-cols-5 gap-x-[30px] text-grey-300">
          {socialMedia.map((media:{id: number, icon: IconProp, url:string}) => (
            <Link href={media.url} key={media.id} className="h-[16px] w-[16px] my-auto flex justify-center">
              <FontAwesomeIcon icon={media.icon}/>
            </Link>
          ))}
        </div>
      </section>
    </footer>
  )
}

export default Footer;