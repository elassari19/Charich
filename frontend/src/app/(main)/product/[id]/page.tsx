import React from 'react'
import { Typography } from '@/components/ui/typography'
import { products } from '@/lib/constant'
import ProductRate from '@/components/atoms/product-rate'
import { ReuseSelect } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import ProductImage from '@/components/cards/product-image'
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
          <div className='col-span-full lg:col-span-4 flex flex-col gap-y-4 p-4'>
            <Typography variant='h6' className='font-semibold'>{products.name}</Typography>
            <div className='flex items-center gap-6'>
              <ProductRate ratings={products.ratings} />
              <Typography variant='span' color='primary' className='font-semibold'>{products.reviews} feedbacks</Typography>
              <Typography variant='span' color="gray">{products.orders} orders</Typography>
            </div>
            <div className='grid grid-cols-12 gap-y-3'>
              <Typography variant='p' color="gray" className='col-span-full md:col-span-4'>Condition:</Typography>
              <div className='col-span-full md:col-span-8'>
                <Typography variant='p' className='font-semibold'>{products.condition}</Typography>
                <Typography variant='span' color="gray">
                  Example of the sellers exlanation, example of the sellers explanation
                </Typography>
              </div>
            </div>
            {
              [
                { values: products.color, label: 'Color' },
                { values: products.size, label: 'Size'},
                // { quantity: products.quantity, label: 'Quantity'}
              ].map((item) => (
                <div key={item.label} className='grid grid-cols-12 gap-y-3'>
                  <Typography variant='p' color="gray" className='col-span-full md:col-span-4'>{item.label}:</Typography>
                  <div className='col-span-full md:col-span-8'>
                    <ReuseSelect
                      defaultValue={`Select ${item.label}`}
                      selectItems={item.values}
                    />
                  </div>
                </div>
              ))
            }
            <div className='grid grid-cols-12 gap-y-3'>
              <Typography variant='p' color="gray" className='col-span-full md:col-span-4'>Quantity:</Typography>
              <div className='col-span-full md:col-span-8 flex gap-2 items-center'>
                <Input defaultValue={1} className='w-16 text-center' />
                <Typography variant='span' color='gray'>
                  {products.quantity} availabel
                </Typography>
              </div>
            </div>
            <div className='w-full flex justify-center items-center gap-2'>
              <Typography variant='p' color='gray'>Buy it now:</Typography>
              <Typography variant='h5' className='font-semibold'>US $ {products.price}</Typography>
            </div>
          </div>

          {/* summary & checkout */}
          <div className='col-span-2 border'></div>
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