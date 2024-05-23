import React from 'react'
import { Typography } from '@/components/ui/typography'
import Link from 'next/link'
import SignUp from '@/components/form/sign-up'

const page = () => {
  return (
    <div className='grid grid-cols-12 place-content-center py-8'>
      <div className="col-span-10 col-start-2 flex flex-col items-center gap-y-2 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
        <div className="flex flex-col items-center gap-2 mt-4">
          <Typography variant='h4' className="font-semibold">Sign up</Typography>
          <Typography variant='p' className="">Create new account</Typography>
        </div>
        <SignUp />
        <div className='mt-6'>
          <Typography variant='p' className="text-center">Don't have an account?
            <Link href="/sign-up" className="text-primary font-semibold"> Sign up</Link>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default page