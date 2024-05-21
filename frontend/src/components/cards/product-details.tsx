import React from 'react'
import { Typography } from '../ui/typography'
import ProductRate from '../atoms/product-rate'
import { ReuseSelect } from '../ui/select'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { GoEye } from '@/components/icons'
import Link from 'next/link'
import CartActions, { CartInput, WatchList } from '../reduxComponents/cart'

type Props = {
  product: any
}

const ProductDetails = ({ product }: Props) => {
  return (
    <div className='col-span-full lg:col-span-6 flex flex-col gap-y-4 p-4'>
    <Typography variant='h6' className='font-semibold'>{product.name}</Typography>
    <div className='flex items-center gap-6'>
      <ProductRate ratings={product.ratings} />
      <Typography variant='span' color='primary' className='font-semibold'>{product.reviews} feedbacks</Typography>
      <Typography variant='span' color="gray">{product.orders} orders</Typography>
    </div>
    <div className='grid grid-cols-12 gap-y-3'>
      <Typography variant='p' color="gray" className='col-span-full md:col-span-4'>Condition:</Typography>
      <div className='col-span-full md:col-span-8'>
        <Typography variant='p' className='font-semibold'>{product.condition}</Typography>
        <Typography variant='span' color="gray">
          Example of the sellers exlanation, example of the sellers explanation
        </Typography>
      </div>
    </div>
    {
      [
        { values: product.color, label: 'Color' },
        { values: product.size, label: 'Size'},
      ].map((item) => (
        <div key={item.label} className='grid grid-cols-12 gap-y-3'>
          <Typography variant='p' color="gray" className='col-span-full md:col-span-4'>{item.label}:</Typography>
          <div className='col-span-full md:col-span-8'>
            <ReuseSelect
              selectItems={item.values}
              actionType={item.label.toLowerCase() as 'color' | 'size'}
              product={product}
            />
          </div>
        </div>
      ))
    }
    <div className='grid grid-cols-12 gap-y-3'>
      <Typography variant='p' color="gray" className='col-span-full md:col-span-4'>Quantity:</Typography>
      <div className='col-span-full md:col-span-8 flex gap-2 items-center'>
        <CartInput product={product} className='w-16 text-center' />
        <Typography variant='span' color='gray'>
          {product.quantity} availabel
        </Typography>
      </div>
    </div>
    <div className='w-full flex justify-center items-center gap-2'>
      <Typography variant='p' color='gray'>Buy it now:</Typography>
      <Typography variant='h5' className='font-semibold'>US $ {product.price}</Typography>
    </div>
    {/* product action */}
    <div className='flex flex-col gap-4'>
      <CartActions actionType='add' product={product} className='flex flex-col gap-4'>
        <Button>
          <Link href={"/checkout"} className='w-full'>Buy it now</Link>
        </Button>
        <Button variant="outline">Add to cart</Button>
      </CartActions>
      
      <WatchList product={product} />
    </div>
  </div>

  )
}

export default ProductDetails