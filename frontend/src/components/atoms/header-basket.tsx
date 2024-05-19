import React from 'react'
import { ReuseSheet } from '../ui/sheet'
import { SlBasket } from '@/components/icons'
import { Typography } from '../ui/typography'
import Link from 'next/link'
import { basketOptions } from '@/lib/constant'
import { ReusePopover } from '../ui/popover'

const HeaderBasket = () => {
  return (
    <>
    <div className='md:hidden'>
      <ReuseSheet
        sheetTrigger={<SlBasket className='w-6 h-6' />}
        sheetTitle='Seller Central'
        sheetContent={
          <div className='flex flex-col gap-3 items-start py-2'>
            {
              basketOptions.map((item, index) => (<Link href={item} key={index}>{item}</Link>))
            }
          </div>
        }
      />
    </div>
    <div className='hidden md:block'>
      <ReusePopover
        popoverTrigger={<SlBasket className='w-6 h-6' />}
        popoverTitle={'Seller Central'}
        popoverContent={
          <div className='flex flex-col gap-2 items-start'>
            {
              basketOptions.map((item, index) => (<Link href={item} key={index}>{item}</Link>))
            }
          </div>
        }
        className='z-[90]'
      />
    </div>
    </>
  )
}

export default HeaderBasket