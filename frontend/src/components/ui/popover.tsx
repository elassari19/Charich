"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"
import { Typography } from "./typography"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

interface PopoverProps extends React.HtmlHTMLAttributes<'div'> {
  popoverTrigger: React.ReactNode
  popoverContent: React.ReactNode
  popoverTitle?: React.ReactNode
  triggerClassName?: string
}
const ReusePopover = (props: PopoverProps) => (
  <Popover>
    <PopoverTrigger className={cn(props.triggerClassName)}>
      {props.popoverTrigger}
    </PopoverTrigger>
    <PopoverContent className={cn('', props.className)}>
      {
        props.popoverTitle && 
        <Typography variant='h5' className='font-semibold border-b border-secondary pb-2 mb-2 w-full'>
          {props.popoverTitle}
        </Typography>
      }
      {props.popoverContent}
    </PopoverContent>
  </Popover>
)

export { Popover, PopoverTrigger, PopoverContent, ReusePopover }
