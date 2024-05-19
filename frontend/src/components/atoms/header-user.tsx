import React from 'react'
import { ReusePopover } from '../ui/popover'
import { GoSignOut, LuUser } from '@/components/icons'
import Link from 'next/link'
import { Button } from '../ui/button'
import { userOptions } from '@/lib/constant'
import { ReuseSheet } from '../ui/sheet'
import { Typography } from '../ui/typography'
import UserSignout from './user-signout'

interface Props {}

const user = true

const HeaderUser = ({}:Props) => {
  return (
    <>
    <div className='hidden md:block'>
      <ReusePopover
        popoverTrigger={<LuUser className='w-6 h-6' />}
        popoverTitle="Account"
        popoverContent={
          !user
            ? <div className='flex flex-col gap-2'>
              <Button><Link href={'/sign-in'}>Sign in</Link></Button>
              <Button variant='outline'><Link href={'/register'}>Register</Link></Button>
            </div>
            : <div className='flex flex-col gap-3 items-start'>
              {
                userOptions.map((item, index) => (<Link href={item} key={index}>{item}</Link>))
              }
              <div className='w-full'><UserSignout /></div>
            </div>
        }
      />
    </div>

    <div className='md:hidden'>
      <ReuseSheet
        sheetTrigger={<LuUser className='w-6 h-6' />}
        sheetTitle={<Typography variant='h4'>Account</Typography>}
        sheetContent={
          !user
            ? <div className='flex flex-col gap-2'>
              <Button><Link href={'/sign-in'}>Sign in</Link></Button>
              <Button variant='outline'><Link href={'/register'}>Register</Link></Button>
            </div>
            : <div className='flex flex-col gap-3 items-start py-2'>
              {
                userOptions.map((item, index) => (<Link href={item} key={index}>{item}</Link>))
              }
            </div>
        }
        sheetFooter={<UserSignout />}
      />
    </div>
    </>
  )
}

export default HeaderUser