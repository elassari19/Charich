import React from 'react'
import SignIn from '@/components/form/sign-in'
import { Typography } from '@/components/ui/typography'
import Link from 'next/link'

const page = () => {
  return (
    <div className='grid grid-cols-12 place-content-center py-8'>
      <div className="col-span-10 col-start-2 flex flex-col items-center gap-y-2 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
        <div className="flex flex-col items-center gap-2 mt-4">
          <Typography variant='h4' className="font-semibold">Sign in</Typography>
          <Typography variant='p' className="">Please sign in to your account</Typography>
        </div>
        <SignIn />
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