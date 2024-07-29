import React from 'react'
import { cn } from '@/lib/utils'

const Input = ({className, ...props} : React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className={cn('rounded-lg p-2 bg-background border-muted-foreground/30 focus:border-none focus:outline-none', className)} />
  )
}

/*  Below is just an example. */
export const InputDemo = () => {
  return (
    <Input placeholder='Email' type='email' className='w-72 text-sm' />
  )
}

export default Input