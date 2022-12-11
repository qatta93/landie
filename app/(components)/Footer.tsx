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
    <footer className="w-full h-[290px] sm:h-[210px] bg-blue-100 xl:px-[165px] sm:px-[60px] px-12 pt-[20px] sm:pt-[60px] pb-[26px]">
      <section className="flex flex-col sm:flex-row">
        <p className="my-auto flex-1 text-grey-400 text-sm text-center sm:text-left font-medium">@{new Date().getFullYear()} Yourcompany</p>
        <h3 className=" text-blue-600 text-center my-4 sm:my-auto"><Link href='/'>Landie</Link></h3>
        <Link href='#' className="flex-1 my-auto mx-auto sm:mx-0 text-right">
          <Button
            variant={'primary'}
            size={'xs'}
          >
            Purchase now
          </Button>
        </Link>
      </section>
      <hr className=" h-px bg-grey-200 mt-[20px] sm:mt-[47px] mb-[20px]"/>
      <section className="flex justify-between flex-col sm:flex-row">
        <nav className="flex text-sm text-blue-300 leading-6 cursor-pointer mx-auto sm:mx-0">
          <Link href='/' className="mr-[20px] lg:mr-[60px]">Home</Link>
          <Link href='/about' className="mr-[20px] lg:mr-[60px]">About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <div className="grid grid-cols-5 gap-x-[20px] lg:gap-x-[30px] text-grey-300 mx-auto my-8 sm:m-0">
          {socialMedia.map((media:{id: number, icon: IconProp, url:string}) => (
            <Link href={media.url} key={media.id} className="h-[24px] sm:h-[16px] w-[24px] sm:w-[16px] my-auto flex justify-center">
              <FontAwesomeIcon icon={media.icon}/>
            </Link>
          ))}
        </div>
      </section>
    </footer>
  )
}

export default Footer;