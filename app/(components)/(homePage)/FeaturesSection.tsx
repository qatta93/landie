import React from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  return (
    <section className='xl:px-[165px] sm:px-[60px] px-12'>
      <article className='flex flex-col lg:flex-row lg:justify-between lg:pb-20 xl:pb-[106px] text-center lg:text-left'>
        <div className='max-w-[540px] mx-auto lg:my-auto lg:mx-0'>
          <h2 className='text-grey-700 pb-[16px]'>Light, Fast & Powerful</h2>
          <p className='leading-[26px] pb-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className='leading-[26px]'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className='flex justify-between pt-10 xl:pt-[80px]'>
            <div className='mr-[30px]'>
              <Image src='/images/drawing.png' height={36} width={36} alt='drawing' className='mx-auto lg:m-0'/>
              <p className='text-grey-700 font-medium leading-[26px] pt-[14px]'>Title Goes Here</p>
              <p className='text-xs leading-[18px] pt-[6px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <div>
              <Image src='/images/drawing.png' height={36} width={36} alt='drawing' className='mx-auto lg:m-0'/>
              <p className='text-grey-700  font-medium leading-[26px] pt-[14px]'>Title Goes Here</p>
              <p className='text-xs leading-[18px] pt-[6px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
          </div>
        </div>
        <Image src='/images/feature_1.png' height={525} width={540} alt='feature' className='mx-auto mt-12 lg:mx-0 lg:my-auto lg:ml-[33px]'/>
      </article>
      <article className='flex flex-col lg:flex-row lg:justify-between lg:h-[569px] text-center lg:text-left mt-32 mb-16 lg:my-0'>
        <Image src='/images/feature_2.png' height={315} width={480} alt='feature' className='hidden lg:block my-auto mr-[33px]'/>
        <div className='max-w-[445px] mx-auto lg:my-auto lg:mx-0'>
          <h2 className='text-grey-700 pb-[16px]'>Light, Fast & Powerful</h2>
          <p className='leading-[26px] pb-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className='leading-[26px]'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
        <Image src='/images/feature_2.png' height={315} width={480} alt='feature' className='lg:hidden mx-auto mt-12'/>
      </article>
    </section>
  )
}

export default FeaturesSection;