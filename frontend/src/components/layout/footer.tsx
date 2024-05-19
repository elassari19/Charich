import React from 'react'
import { footerMenu } from '@/lib/constant'
import FooterMenu from '../atoms/footer-menu'
import { FaInstagram, FaTwitch, FaTwitter, GrFacebookOption, IoLogoYoutube } from '../icons'
import { Typography } from '../ui/typography'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='grid grid-cols-12 border border-secondary'>
      <div className="col-span-full mx-4 md:mx-0 md:col-span-10 md:col-start-2 grid grid-cols-4 gap-y-8 py-4">
      {
        footerMenu.map((footer, index)=>(
          <FooterMenu
            key={index}
            footer={footer}
          />  
        ))
      }
      </div>
      <div className="col-span-10 col-start-2 flex items-center gap-4 py-2 text-center md:text-start">
        <Link href={""}><GrFacebookOption className="w-5 h-5" /></Link>
        <Link href={""}><FaTwitter className="w-5 h-5" /></Link>
        <Link href={""}><FaInstagram className="w-5 h-5" /></Link>
        <Link href={""}><IoLogoYoutube className="w-5 h-5" /></Link>
        <Link href={""}><FaTwitch className="w-5 h-5" /></Link>
      </div>
      <hr className="col-span-full bg-secondary" />
      <div className="col-span-full">
        <Typography variant="span" className="text-secondary-foreground text-xs text-center py-2">
          Copyright 2017 NichoShop Inc. All rights reserved.
          <Link href={""} className="text-primary font-semibold"> User agreement, Privacy </Link>
          and<Link href={''} className="text-primary font-semibold"> Cookies</Link>.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer