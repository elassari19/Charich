'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity} from '@/store/cartSlice'
import { Input } from '../ui/input'
import { RootState } from '@/store'
import { Badge } from '../ui/badge'
import { cn } from '@/lib/utils'
import { actions } from '../../lib/actions'
import ReduxContext from '../redux-context'
import { Button } from '../ui/button'
import { FaCheck, GoEye } from '@/components/icons'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  actionType: 'increment' | 'decrement' | 'add' | 'remove' | 'removeAll' | 'watchlist' | 'null'
  product: any
}

function CartActions({ actionType, product, children, className }: Props) {

  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(actions(actionType, product))}
      className={cn("", className)}
    >
      {children}
    </div>
  )
}

export default CartActions

export const CartInput = ({ product, className }: { product: any, className?: string}) => {

  const dispatch = useDispatch()
  const carts = useSelector((state: RootState) => state.cart.items)

  return (
    <Input
      type='number' className={cn(' px-2 rounded-sm w-12', className)} value={carts.filter((c: any) => c.id === product.id)[0]?.qty || 0}
      onChange={(e) => dispatch(setQuantity({ ...product, value: +e.target.value }))}
    />
  )
}

export const CartBadge = ({ type }: { type: string }) => {

  const store = useSelector((state: RootState) => state)
  // @ts-ignore
  if (store?.[type]?.items.length > 0)
  return (
    <Badge variant="destructive" className='animate-bounce absolute -top-2 -right-2 p-1 h-4'>
      {/* @ts-ignore */}
      {store?.[type]?.items.length}
    </Badge>
  )
}

export const WatchList = ({ product }: { product: any }) => {
  return (
    <ReduxContext>
      {(store, dispatch) => {
        const watchlist = store.list.items.filter((item: any) => item.id === item.id)[0]
        if (!watchlist)
          return (
            <Button
              variant="link" className='flex gap-4 text-center items-center w-full'
              onClick={() => dispatch(actions('watchlist', product))}
            >
              <GoEye size={20} /> Add to watchlist
            </Button>
          )
        return (
          <Button
            variant="link" className='flex gap-4 text-center items-center w-full text-success font-semibold'
            onClick={() => dispatch(actions('watchlist', product))}
          >
            <FaCheck size={20} /> Added to watchlist
          </Button>
        )
      }}
    </ReduxContext>
  )
}