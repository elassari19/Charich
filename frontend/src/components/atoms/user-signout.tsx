import React from 'react'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'
import { GoSignOut } from '@/components/icons'

const UserSignout = () => {
  return (
    <Button variant='outline' className='flex gap-2 w-full'>
      <GoSignOut className='w-6 h-6' />
      <Typography variant='p'>Sign Out</Typography>
    </Button>
  )
}

export default UserSignout