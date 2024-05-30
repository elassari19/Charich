import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Image, { StaticImageData } from 'next/image'
import { Typography } from '../ui/typography'
import { Button } from '../ui/button'
import Link from 'next/link'
import { GoArrowRight } from '@/components/icons'

const bannerVariants = cva(
  'flex items-center flex-col gap-8 md:flex-row md:justify-around p-8 h-[30rem] md:h-72',
  {
    variants: {
      variant: {
        default: "[background:linear-gradient(181.44deg,_#f6fee0,_#adedd5)] md:[background:linear-gradient(86.28deg,_#f6fee0,_#adedd5)]",
        warning: "[background:linear-gradient(181.44deg,_#f8d8d6,_#f6fee0)] md:[background:linear-gradient(86.28deg,_#f8d8d6,_#f6fee0)]",
        info: "[background:linear-gradient(181.44deg,_#a0bef8,_#d8f7f6)] md:[background:linear-gradient(86.28deg,_#a0bef8,_#d8f7f6)]",
        ligth: "[background:linear-gradient(181.44deg,_#dfe9f3,_#fff)] md:[background:linear-gradient(86.28deg,_#dfe9f3,_#fff)]",
        purpul: "[background:linear-gradient(181.44deg,_#dbd5ed,_#f3e7ea)] md:[background:linear-gradient(86.28deg,_#dbd5ed,_#f3e7ea)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
  title: string
  description: string
  image: StaticImageData
  href: string
}

const HomeBanner = ({ className, variant, ...props }: Props) => {
  return (
    <div className={cn(bannerVariants({ variant }), className)}>
      <div className='flex flex-col gap-3 items-center md:items-start p-4'>
        <Typography variant='h2' className='font-semibold'>{props.title}</Typography>
        <Typography variant='p'>{props.description}</Typography>
        <Button variant='outline'>
          <Link href={props.href} className='flex items-center gap-2'>
            Shop now
            <GoArrowRight className='w-6 h-6' />
          </Link>
        </Button>
      </div>
      <div className={`p-4 ${props.href == "Electronics" && "md:pt-20"}`}>
        <Image
          src={props.image} alt={props.title}
          width={300} height={300} priority={false}
        />
      </div>
    </div>
  )
}

export default HomeBanner