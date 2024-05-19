"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const TypographyVariants = cva(
  "block",
  {
    variants: {
      variant: {
        h1: "text-5xl",
        h2: "text-4xl",
        h3: "text-3xl",
        h4: "text-2xl",
        h5: "text-xl",
        h6: "text-lg",
        p: "text-base",
        span: "text-sm",
      },
      color: {
        black: "text-black",
        white: "text-white",
        primary: "text-primary",
        secondary: "text-secondary",
        gray: "text-gray-400",
      }
    },
    defaultVariants: {
      variant: "p",
      color: "black",
    },
  }
)

interface Props extends React.HtmlHTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof TypographyVariants> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "black" | "white" | "primary" | "secondary" | "gray";
}

const Typography = (({ className, variant, color, children, ...props }: Props) => {
  return React.createElement(variant, {...props, className: cn(TypographyVariants({ variant, color, className }))}, children)
})

export { Typography }
