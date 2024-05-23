import React from 'react'
import { Typography } from '@/components/ui/typography'

const page = () => {
  return (
    <div className='grid grid-cols-12 my-8'>
      <div className='col-span-full lg:col-span-10 lg:col-start-2 grid grid-cols-12'>
        <Typography variant='h4' className='col-span-full font-semibold'>Checkout Page</Typography>
      </div>
    </div>
  )
}

export default page