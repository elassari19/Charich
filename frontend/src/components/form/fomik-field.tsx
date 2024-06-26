import * as React from "react"

import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { ErrorMessage, Field, FieldAttributes } from "formik"

const InputVariants = cva(
  "flex flex-row gap-4 items-center justify-center p-3 py-1 rounded-md text-base font-medium border outline-none",
  {
    variants: {
      variant: {
        default: "focus:border-primary bg-white",
        secondary: "border-white focus:border-white-200",
        ghost: "border-0",
        destructive: "border-red-800",
        success: "border-green-200 focus:border-green-800"
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

export interface InputProps
  extends FieldAttributes<any>,
  VariantProps<typeof InputVariants> {
    preIcon?: any,
    sufIcon?: any,
    name: string
  }

const FormikField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, variant, preIcon, sufIcon, name, ...props }, ref) => {

    return (
      <div className="h-12 mb-2">
        {/* input section */}
        <div
          className={cn(InputVariants({ variant, className }))}
        >
          {preIcon}
          <Field
            id={name}
            name={name}
            vlaue={props.value}
            placeholder={props.placeholder}
            {...props}
            ref={ref}
            className="flex-1 h-8 w-full bg-inherit px-3 py-2 placeholder:text-slate-500 outline-none"
          />
          {children}
          {sufIcon}
        </div>
        <div className=" text-red-500 h-4 pl-4">
        <ErrorMessage name={name} />
        </div>
      </div>
    )
  }
)

export default FormikField