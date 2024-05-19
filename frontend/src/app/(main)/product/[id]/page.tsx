import React from 'react'
import { Typography } from '../../../../components/ui/typography'
import { products } from '../../../../lib/constant'
import ProductRate from '../../../../components/atoms/product-rate'
import { ReuseSelect } from '../../../../components/ui/select'

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
        <section className='grid grid-cols-11'>
          {/* small and medium screen image */}
          <div className='col-span-full lg:hidden'>

          </div>
          {/* product option */}
          <div className='col-span-full lg:col-span-4 flex flex-col gap-2'>
            <Typography variant='h5'>{products.name}</Typography>
            <div className='flex items-center gap-6'>
              <ProductRate ratings={products.ratings} />
              <Typography variant='span' color='primary' className='font-semibold'>{products.reviews} feedbacks</Typography>
              <Typography variant='span' color="gray">{products.orders} orders</Typography>
            </div>
            <div className='flex gap-x-8 flex-wrap'>
              <Typography variant='p' color="gray" className='w-screen md:w-auto'>Condition:</Typography>
              <div className=''>
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
                <div className='flex gap-x-8 flex-wrap'>
                  <Typography variant='p' color="gray" className='w-screen md:w-auto'>Condition:</Typography>
                  <ReuseSelect
                    defaultValue={`Select ${item.label}`}
                    selectItems={item.values}
                  />
                </div>
              ))
            }
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