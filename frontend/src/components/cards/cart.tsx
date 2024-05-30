'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import ReduxContext from '../redux-context'
import Image from 'next/image'
import { Typography } from '../ui/typography'
import CartActions from '../reduxComponents/cart'
import { RiDeleteBinLine, IoMdHeart } from '../icons'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const Cart = ({ className }: Props) => {
  return (
    <ReduxContext>
      {(store, dispatch) => {
        const { items } = store.cart
        console.log("items", items)
        return (
          <div className={cn("my-8 flex flex-col gap-4", className)}>
            {
              items.map((product: any, index: number) => (
                <div key={index} className='shadow flex justify-between rounded p-2'>
                  <div className='flex gap-4 flex-1'>
                    <Image
                      src={product.image[0].secure_url} alt={product.name} loading='lazy'
                      width={100} height={100}
                      className='w-44 h-44'
                    />
                    <div className='flex flex-col justify-between flex-1'>
                      {/* product info */}
                      <div className='flex justify-between'>
                        <Typography variant='h6' className='font-semibold'>{product.name} name</Typography>

                        <div className='flex flex-col gap-2 [&>*]:self-end'>
                          <Typography variant='h6' className='font-semibold'>${parseInt(product.price)/100}</Typography>
                          <Typography variant='span' className='font-semibold'>Delivery ${(parseInt(product.price)*0.003).toFixed(1)}</Typography>
                          <Typography variant='span' className='font-semibold text-success'>
                            <span className='text-gray-400'>Economy delivery: </span>
                            Est delivery 22Jan - 29Jan
                          </Typography>
                        </div>
                      </div>

                      {/* product actions */}
                      <div className='flex justify-between'>
                        <div className='flex items-center border-secondary border'>
                          <CartActions actionType='decrement' product={product}>
                            <div className='bg-secondary font-semibold px-2'>-</div>
                          </CartActions>
                          <div className='text-lg px-3'>{product.qty}</div>
                          <CartActions actionType='increment' product={product}>
                            <div className='bg-secondary font-semibold px-2'>+</div>
                          </CartActions>
                        </div>

                        <div className='flex gap-8'>
                          <CartActions actionType='watchlist' product={product} className='text-black/40'>
                            {
                              (!store.list.items.filter((item: any) => item.id === product.id)[0])
                                ? <div className='flex gap-2 items-center'><IoMdHeart size={20} /><span>Save for later</span></div>
                                : <div className='flex gap-2 items-center text-primary'><IoMdHeart size={20} className='text-primary'/> saved</div>
                            }
                          </CartActions>
                          <CartActions actionType='remove' product={product}>
                            <div className='flex gap-2 items-center text-destructive'>
                              <RiDeleteBinLine size={20} /> <span>delete</span>
                            </div>
                          </CartActions>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }}
    </ReduxContext>
  )
}

export default Cart
