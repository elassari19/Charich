import React from 'react'
import { GoArrowLeft, SlMenu} from '@/components/icons'
import { ReuseSheet, SheetClose } from '../ui/sheet'
import Link from 'next/link'
import { Categories } from '@/lib/constant'

type Props = {}

const HeaderMenu = (props: Props) => {
  return (
    <ReuseSheet
      sheetTrigger={<SlMenu className='w-6 h-6' />}
      sheetTitle={<div>All Categories</div>}
      sheetContent={
        <div className='flex flex-col gap-2 items-start'>
        {Categories.map((category, index)=>(
          <ReuseSheet
            key={index}
            sheetTrigger={<p>{category.name}</p>}
            sheetTitle={
              <div className='flex gap-2'>
                <SheetClose> <GoArrowLeft className='w-6 h-6' /> </SheetClose>
                <p>{category.name}</p>
              </div>
            }
            sheetContent={
              <div className='flex flex-col gap-2 items-start'>
                {category.subCategories.map((sub, i) => (<Link href={`/?c=${category.name}&p=${sub}`} key={i}>{sub}</Link>))}
              </div>
            }
            side='left'
            className='overflow-auto'
          />
        ))}
        </div>
      }
      side='left'
    />
  )
}

export default HeaderMenu