import React from 'react'
import { cn } from '@/lib/utils'
import { ReusePopover } from '../ui/popover'
import Link from 'next/link'
import { Typography } from '../ui/typography'
import { Button } from '../ui/button'
import { GoArrowRight } from '@/components/icons'
import Image, { StaticImageData } from 'next/image'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  category: {
    name: string
    subCategories: string[]
    image: StaticImageData
  }
}

const HeaderCategory = (props: Props) => {
  return (
    <ReusePopover className={cn('w-screen max-w-screen p-2 m-0', props.className)}
      popoverTrigger={
      <Typography variant='span' className='whitespace-nowrap p-2'>{props.category.name}</Typography>
      }
      popoverContent={
        <div className='grid grid-cols-12 gap-4 py-8'>
          <div className='col-span-5 col-start-2 flex flex-col gap-4'>
            <Typography variant='h3' className='w-full font-semibold'>{props.category.name}</Typography>
            <div className='grid grid-cols-3 h-[10.5rem] overflow-hidden gap-y-4'>
              {props.category.subCategories.map((sub, index) => (
                <Link key={index} href={`?c=${sub}`} className='col-span-1 text-sm hover:text-primary hover:font-semibold'>
                  {sub}
                </Link>
              ))}
            </div>
            <div>
              <Button size='lg'>
                <Link href={`?c=${props.category.name}`} className='flex items-center gap-2'>
                  See All
                  <GoArrowRight className='w-6 h-6' />
                </Link>
              </Button>
            </div>
          </div>
          <div className='col-span-5'>
            <Image
              src={props.category.image} alt={props.category.name}
              width={500} height={500} loading='lazy' priority={false}
              className='object-cover w-full h-full'
            />
          </div>
        </div>
      }
    />
  )
}

export default HeaderCategory