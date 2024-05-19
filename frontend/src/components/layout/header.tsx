import React from 'react'
import HeaderMenu from '../atoms/header-menu'
import { Typography } from '../ui/typography'
import HeaderUser from "../atoms/header-user";
import HeaderBasket from "../atoms/header-basket";
import HeaderInput from "../atoms/header-input";
import HeaderCategory from '../atoms/header-category';
import { Categories } from '@/lib/constant';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="grid grid-cols-12">
      <div className="col-span-full lg:col-span-10 lg:col-start-2">
        <div className="flex justify-between items-center p-2 px-4 gap-20">
          <div className="flex gap-2 items-center">
            <div className="md:hidden"><HeaderMenu /></div>
            <Typography variant="h4" className="text-primary-foreground font-semibold">
              Cris<span className="text-success-foreground">Rich</span>
            </Typography>
          </div>
          <div className="hidden md:block flex-1">
            <HeaderInput />
          </div>
          <div className="flex gap-4 items-center">
            <HeaderUser />
            <HeaderBasket />
          </div>
        </div>
        {/* search input for small screens */}
        <div className="md:hidden px-4"><HeaderInput /></div>
        {/* categories large screen */}
      </div>
      <div className="col-span-full grid grid-cols-12 border-t border-secondary">
        <div className="col-span-10 col-start-2 hidden md:flex gap-6 overflow-auto">
            {Categories.map((category, index) => (
              <HeaderCategory category={category} key={index} />
            ))}
          </div>
      </div>
    </header>
  )
}

export default Header