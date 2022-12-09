import React from 'react'
import Button from '../Button';

const PriceSection = () => {
  return (
    <section className="flex justify-center h-[805px] bg-pricing_bcg">
      <article className="w-[600px] my-auto text-center">
        <h2 className="text-grey-700">A Price To Suit Everyone</h2>
        <p className="leading-[26px] pt-[16px] pb-[36px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <h1 className="text-blue-700 tracking-[1px]">$40</h1>
        <p className="text-blue-600 leading-[26px] pb-[60px]">UI Design Kit</p>
        <p className="leading-[24px] text-sm pb-[9px]">See, One price. Simple.</p>
        <Button
          variant={'primary'}
          size={'md'}
          className={'!h-[32px] !text-sm leading-[24px]'}
        >
          Purchase Now
        </Button>
      </article>
    </section>
  )
}

export default PriceSection;
