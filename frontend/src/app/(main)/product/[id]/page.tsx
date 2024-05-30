import React from 'react'
import ProductImage from '@/components/cards/product-image'
import ProductDetails from '@/components/cards/product-details'

interface Props {
  params: {
    id: string
  }
}

const page = async (props: Props) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${props.params.id}`)
  const product = await response.json()
  console.log("searchParams", product.name)
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-full mx-4 md:mx-0 md:col-span-10 md:col-start-2'>
        {/* product overview */}
        <section className='grid grid-cols-11 gap-x-2 my-8'>
          {/* small and medium screen image */}
          <div className='col-span-full lg:col-span-5'>
            <ProductImage
              images={product.image}
            />
          </div>
          {/* product option */}
          <ProductDetails product={product} />

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