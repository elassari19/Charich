import React from 'react'
import { Typography } from '../ui/typography'
import Link from 'next/link'

interface Props {
  footer: {
    name: string
    subMenu: string[]
  }
}

const FooterMenu = (props: Props) => {
  return (
    <div className='flex flex-col gap-3 col-span-2 md:col-span-1'>
      <Typography variant='h6' className='font-semibold'>{props.footer.name}</Typography>
      {
        props.footer.subMenu.map((subMenu, index) => (
          <Link key={index} href={`/${props.footer.name.toLocaleLowerCase()}`}>
            <Typography variant='span'>{subMenu}</Typography>
          </Link>
        ))
      }
    </div>
  )
}

export default FooterMenu