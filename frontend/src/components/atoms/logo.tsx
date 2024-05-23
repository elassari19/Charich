import Link from 'next/link'
import React from 'react'
import { Typography } from '../ui/typography'

const Logo = () => {
  return (
    <Link href="/" className='cursor-pointer'>
      <Typography variant="h4" className="text-primary-foreground font-semibold">
        Cris<span className="text-success-foreground">Rich</span>
      </Typography>
    </Link>
  )
}

export default Logo