import React from 'react'
import CheckBox from './checkbox'
import { cn } from '@/lib/utils'

const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props} className={cn('text-base',className)}>
      {children}
    </label>
  )
}

/*  Below is just an example. */
export const LabelDemo = () => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <CheckBox className='size-4 rounded' id='newsletter' />
      <Label htmlFor='newsletter'>
        Do you wish to receive our newsletter?
      </Label>
    </div>
  )
}

export default Label