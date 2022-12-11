import React from 'react'
import Image from 'next/image'
import Button from '../Button';
import Link from "next/link";

const IntroSection = () => {
  return (
    <section className='relative h-[900px] md:h-[1300px] lg:h-[900px] 2xl:h-[1161px] lg:ml-[60px] xl:ml-[137px] mb-24 lg:mb-[10px]'>
      <article className="absolute top-1/4 lg:top-1/2 left-1/2 lg:left-[60px] transform -translate-y-1/4 lg:-translate-y-1/2 -translate-x-1/2 lg:-translate-x-[60px] w-[300px] xs:w-[370px] sm:w-[500px] lg:w-[540px] z-10 text-center lg:text-left">
        <h1 className="text-grey-700 font-outline-1 mb-[20px] tracking-[1px] text-[30px] leading-[45px] sm:text-[50px] sm:leading-[66px]">Introduce Your Product Quickly & Effectively</h1>
        <p className="text-blue-500 leading-[30px] text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
        <p className="text-blue-500 leading-[30px] text-lg pt-[16px] mb-[30px] sm:mb-[69px]">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className='flex flex-col sm:flex-row justify-center lg:justify-start'>
          <Link href='#'>
            <Button
              className="mb-6 sm:mb-0 sm:mr-[30px]"
              variant={'primary'}
              size={'md'}
            >
              Purchase UI Kit
            </Button>
          </Link>
          <Link href='#'>
            <Button
              variant={'secondary'}
              size={'md'}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </article>
      <div className='lg:w-3/4 xl:w-4/5 2xl:w-[1165px] ml-auto h-full relative'>
        <Image src='/images/main_desktop.png' alt='main' fill style={{objectFit:"contain", objectPosition:'right'}} className='hidden lg:block'/>
        <Image src='/images/main.png' alt='main' fill style={{objectFit:"contain", objectPosition:'bottom'}} className='lg:hidden px-2 sm:px-8'/>
      </div>
    </section>
  )
}

export default IntroSection;