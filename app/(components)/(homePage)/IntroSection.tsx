import React from 'react'
import Image from 'next/image'
import Button from '../Button';

const IntroSection = () => {
  return (
    <section className='relative h-[1161px] pl-[137px]'>
      <article className="absolute top-1/2 transform -translate-y-1/2 w-[540px] z-10">
        <h1 className="text-grey-700 font-outline-1 mb-[20px] tracking-[1px]">Introduce Your Product Quickly & Effectively</h1>
        <p className="text-blue-500 leading-[30px] text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
        <p className="text-blue-500 leading-[30px] text-lg pt-[16px] mb-[69px]">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div>
          <Button
            className="mr-[30px]"
            variant={'primary'}
            size={'md'}
          >
            Purchase UI Kit
          </Button>
          <Button
            variant={'secondary'}
            size={'md'}
          >
            Learn More
          </Button>
        </div>
      </article>
      <Image src='/images/main.png' height={1165} width={1161} alt='main' className='absolute right-0'/>
    </section>
  )
}

export default IntroSection;