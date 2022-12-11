import React from 'react'
import Button from '../Button';
import Link from "next/link";

const PriceSection = () => {
  return ( 
    <section className="flex justify-center h-[700px] lg:h-[805px] w-full bg-pricing_bcg 2xl:bg-cover sm:px-[60px] px-12">
      <article className="max-w-[600px] my-auto mx-auto text-center">
        <h2 className="text-grey-700">A Price To Suit Everyone</h2>
        <p className="leading-[26px] pt-[16px] pb-[36px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <h1 className="text-blue-700 tracking-[1px]">$40</h1>
        <p className="text-blue-600 leading-[26px] pb-[60px]">UI Design Kit</p>
        <p className="leading-[24px] text-sm pb-[9px]">See, One price. Simple.</p>
        <Link href='#'>
          <Button
            variant={'primary'}
            size={'md'}
            className={'!h-[32px] !text-sm leading-[24px]'}
          >
            Purchase Now
          </Button>
        </Link>
      </article>
    </section>
  )
}

export default PriceSection;
