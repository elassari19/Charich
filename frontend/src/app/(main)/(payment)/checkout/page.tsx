import React from 'react'
import { Typography } from '@/components/ui/typography'
import Cart from '@/components/cards/cart'
import CartSummary from '@/components/cards/cart-summary'

const page = () => {
  return (
    <div className='grid grid-cols-12 my-8'>
      <div className='col-span-full lg:col-span-10 lg:col-start-2 grid grid-cols-12 gap-2'>
        <Typography variant='h4' className='col-span-full font-semibold'>Checkout Page</Typography>
        <Cart className='col-span-full xl:col-span-8' />
        <div className='col-span-full lg:col-span-4'>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}

export default page