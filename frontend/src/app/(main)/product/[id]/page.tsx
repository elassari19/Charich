import React from 'react'
import { products } from '@/lib/constant'
import ProductImage from '@/components/cards/product-image'
import ProductDetails from '@/components/cards/product-details'
import toys from '@/../public/toys.png'

interface Props {
  params: {
    id: string
  }
}

const page = (props: Props) => {
  // console.log("searchParams", props.params["product-id"])
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-full mx-4 md:mx-0 md:col-span-10 md:col-start-2'>
        {/* product overview */}
        <section className='grid grid-cols-11 gap-x-2 my-8'>
          {/* small and medium screen image */}
          <div className='col-span-full lg:col-span-5'>
            <ProductImage
              images={Array(5).fill(toys)}
            />
          </div>
          {/* product option */}
          <ProductDetails product={products} />

          {/* summary & checkout */}
          <div className='col-span-2'>
          </div>
        </section>

        {/* product details */}
        <section></section>

        {/* product reviews */}
        <section></section>
      </div>
    </div>
  )
}

export default page