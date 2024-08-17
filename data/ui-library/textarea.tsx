import React from 'react'
import { cn } from '@/lib/utils'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const TextArea = ({className, ...props} : TextAreaProps) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-muted-foreground/30 bg-background/90 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export default TextArea