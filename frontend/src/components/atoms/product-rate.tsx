import React from 'react'
import { FaStar } from '@/components/icons'

interface Props {
  ratings: number
  size?: number
}

const ProductRate = ({ ratings, size }: Props) => {
  return (
    <div className='flex gap-2 text-sm font-bold'>
      <div className='flex gap-1'>{Array(5).fill("").map((_, idx)=>
        (idx+1) > ratings
        ? <FaStar key={idx} size={size || 16} className="text-gray-200" />
        : <FaStar key={idx} size={size || 16} className="text-yellow-600" />
      )}</div>
      <span> {ratings || 0} Rating</span>
    </div>
  )
}

export default ProductRate