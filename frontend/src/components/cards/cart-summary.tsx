'use client'

import React from 'react'
import { Typography } from '../ui/typography'
import { Button } from '../ui/button'
import Link from 'next/link'
import Logo from '../atoms/logo'
import { IoMdLock } from '../icons'
import { cn } from '@/lib/utils'
import { loadStripe } from '@stripe/stripe-js'
import ReduxContext from '../redux-context'

interface Props extends React.HtmlHTMLAttributes<'div'> {}

const CartSummary = ({ className }: Props) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

  const handlePayment = async (cart: any) => {
    const stripe = await stripePromise;
    console.log('stripe', stripe)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(cart),
    })
    const data = await response.json()
    if(data.id){
      try {
        const result = await stripe?.redirectToCheckout({
          sessionId: data.id,
        });
        console.log('result', result)
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  return (
    <ReduxContext>
      {(store) => {
        const { items } = store.cart
        const total = items.reduce((acc: number, item: any) => acc + (item.price * item.qty), 0)
        return (
          <div className={cn('p-4 border rounded-md flex flex-col gap-4', className)}>
            <Typography variant='h6' className='font-semibold'>Cart Summary</Typography>
            <hr className='w-full' />
            <div className='flex justify-between'>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6' color='gray'>Subtotal</Typography>
                <Typography variant='span' color='gray'>Shipping</Typography>
                <Typography variant='span' color='gray'>Estimated Tax</Typography>
              </div>

              <div className='flex flex-col gap-2 [&>*]:text-end'>
                <Typography variant='h6'>US $ {total/100}</Typography>
                <Typography variant='span'>0.003%</Typography>
                <Typography variant='span'>${(total* 0.003).toFixed(1)}</Typography>
              </div>
            </div>
            <hr className='w-full' />
            <div className='flex justify-between'>
              <Typography variant='h6'>Total</Typography>
              <Typography variant='h6'>${(total/100 + total* 0.003).toFixed(1)}</Typography>
            </div>
            <Button onClick={()=>handlePayment(store.cart.items)}>
              Proceed to checkout
            </Button>
            <div className='flex gap-2 justify-center'>
              <Logo />
              <Typography variant='span' color='primary' className='flex items-center gap-1 bg-primary/10 px-2 rounded-md'>
                <IoMdLock size={14} /> buyer protectiont
              </Typography>
            </div>
            <Typography variant='span' color='gray' className='text-center'>
              We guarantee that you will receive the items or you can get a refund
              <Link href={''} className='text-primary'> Learn more</Link>
            </Typography>
          </div>
        )
      }}
    </ReduxContext>
  )
}

export default CartSummary