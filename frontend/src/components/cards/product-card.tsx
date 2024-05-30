import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import ProductRate from '../atoms/product-rate'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: any,
  list?: boolean
  index?: number
}

const ProductCard = ({ className, product, list, index }: Props) => {
// console.log("product", product)
  return (
    <div
      className={cn(
        "col-span-1 w-full h-full shadow-lg rounded-md group p-4 overflow-hidden hover:shadow-primary/40 transist duration-300 ease-in-out",
        list && "flex justify-between items-center",className
      )}
    >
        <div className={cn('flex gap-2 bg-green-100 rounded-full w-fit px-2', list && "hidden")}>
          <span className='font-bold text-xs text-primary'>Stock</span>
          <span className='font-bold text-xs text-destructive'>{product.quantity}</span>
        </div>

        <Link href={`/product/${product._id}`}
          className={cn('flex justify-center', list&&"w-1/4")}>
          <Image
            src={product.image[0].secure_url} priority={index==0} alt={product.name} width={150} height={150}
            className='w-48 h-48 m4 rounded-full hover:scale-110 transform transition-transform duration-300 ease-in-out'
          />
        </Link>

        <div className={cn('flex flex-col gap-1 py-2', list&&"w-1/3 self-start")}>
          <div>
            <p className={cn('text-xs font-bold whitespace-nowrap text-ellipsis',list&&"text-xl")}>{product.name}</p>
            <p
              className='text-xs font-bold whitespace-nowrap text-black/60 w-[90%] overflow-hidden overflow-ellipsis'
            >
              {product.description}
            </p>
          </div>
          <ProductRate ratings={4} />
          <div className={cn('relative flex justify-between items-center')}>
            <span className='font-bold text-xl flex-1'>$ {product.price/100}</span>
          </div>
        </div>
    </div>
  )
}

export default ProductCard