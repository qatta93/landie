import React from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  return (
    <section className='px-[165px]'>
      <article className='flex justify-between pb-[106px]'>
        <div className='w-[540px] my-auto'>
          <h2 className='text-grey-700 pb-[16px]'>Light, Fast & Powerful</h2>
          <p className='leading-[26px] pb-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className='leading-[26px]'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className='flex justify-between pt-[80px]'>
            <div className='mr-[30px]'>
              <Image src='/images/drawing.png' height={36} width={36} alt='drawing'/>
              <p className='text-grey-700 font-medium leading-[26px] pt-[14px]'>Title Goes Here</p>
              <p className='text-xs leading-[18px] pt-[6px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <div>
            <Image src='/images/drawing.png' height={36} width={36} alt='drawing'/>
              <p className='text-grey-700  font-medium leading-[26px] pt-[14px]'>Title Goes Here</p>
              <p className='text-xs leading-[18px] pt-[6px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
          </div>
        </div>
        <Image src='/images/feature_1.png' height={525} width={540} alt='feature' className='my-auto ml-[33px]'/>
      </article>
      <article className='flex justify-between h-[569px]'>
        <Image src='/images/feature_2.png' height={315} width={480} alt='feature' className='my-auto ml-[33px]'/>
        <div className='w-[445px] my-auto'>
          <h2 className='text-grey-700 pb-[16px]'>Light, Fast & Powerful</h2>
          <p className='leading-[26px] pb-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className='leading-[26px]'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </article>
    </section>
  )
}

export default FeaturesSection;