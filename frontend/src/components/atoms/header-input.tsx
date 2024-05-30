"use client";

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";
import React, { useEffect, useState, useTransition } from "react";
import { Categories } from '../../lib/constant';
import { ReusePopover } from '../ui/popover';
import { Typography } from '../ui/typography';
import { CiSearch, IoIosArrowDown } from '@/components/icons';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ placeholder }: Props) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const prentEle = React.useRef(null);

  const handleSearch = useDebouncedCallback(async(value: string) => {

    if (value && value.length > 2) {
      params.set("limit", '5');
      params.set("q", value);
      // fetch data
      // setProducts(await getSearchProducts(value)as any); 
    } else {
      params.delete("q");
      params.delete("limit");
    }
    replace(`${pathname}?${params}`);
  }, 500);

  const handleFocus = () => {
    setToggleSearch(true);
    // @ts-ignore
    prentEle.current.style.border = '1px solid #2563EB';
  }

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery])  

  return (
    <div 
      className='flex items-center gap-0 bg-secondary border focus:border-primary px-4 rounded mb-2 md:mb-0'
      ref={prentEle}
    >
      <CiSearch className='w-6 h-6' />
      <Input
        placeholder='Search...' className='border-none bg-inherit flex-1'
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onFocus={(e) => {
          handleFocus(),
          // @ts-ignore
          prentEle.current.style.border = '1px solid #2563EB'
        }}
        onBlur={(e) => {
          setTimeout(() => setToggleSearch(false), 200),
          // @ts-ignore
          prentEle.current.style.border = '1px solid #D1D5DB'
        }} 
      />  
      <ReusePopover
        popoverTrigger={<div className='flex items-center gap-1 font-semibold text-secondary-foreground/50'>
          <Typography variant='span'>All</Typography>
          <IoIosArrowDown className='w-4 h-4' />
        </div>}
        popoverTitle='All Categories'
        popoverContent={<div className='flex flex-col gap-3'>
          {
            Categories.map((category, index) => (
              <Link key={index} href={`/?c=${category.name}`} className='flex flex-col gap-2'>
                {category.name}
              </Link>
            ))
          }
        </div>}
      />
      <>
        {toggleSearch}
      </>
    </div>
  );
};

export default SearchInput
