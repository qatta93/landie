import Button from "./(components)/Button";
import Image from 'next/image'
import PriceSection from "./(components)/(homePage)/PriceSection";
import FeaturesSection from "./(components)/(homePage)/FeaturesSection";

const Page = () => {
  return (
    <main>
      <FeaturesSection/>
      <PriceSection/>
    </main>
  )
}

export default Page;