import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { User2Icon } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string,
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = ({
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant, size, className }))} />
  )
}


export const ButtonsShowCase = () => {
  return (
    <div className="flex flex-col flex-wrap gap-10 sm:gap-16 w-full">
      <div className="flex flex-row flex-wrap gap-4 sm:gap-8 w-full">
        <Button>Default</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='link'>Link</Button>
        <Button variant='outline'>Outline</Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4 sm:gap-8 w-full">
        <Button size='icon'><User2Icon /></Button>
        <Button size='sm'>Small</Button>
        <Button size='lg'>Large</Button>
      </div>
    </div>
  )
}

export default Button