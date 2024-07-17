import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'destructive' | 'secondary' | 'success' | 'warning' | 'primary',
  className?: string,
}


const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full text-xs py-1 px-2",
  {
    variants: {
      variant: {
        default: "bg-gray-500/15 text-gray-500",
        primary: "bg-blue-600/15 text-blue-600",
        success: "bg-green-500/15 text-green-500",
        warning: "bg-amber-500/15 text-amber-500",
        destructive: "bg-[#f31260]/15 text-[#f31260]",
        secondary: "bg-violet-500/15 text-violet-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Chip = ({
  variant,
  className,
  ...props
}: ChipProps) => {
  return <span {...props} className={cn(chipVariants({ variant, className }))}/>
}

export const ChipShowcase = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 sm:gap-12 w-full">
      <Chip>Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="destructive">Destructive</Chip>
    </div>
  )
}

export default Chip