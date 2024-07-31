import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  progressClassName?: string;
}

const Progress = ({ value = 60, progressClassName, className, ...props }: ProgressProps) => {
  return (
    <div className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}>
      <div {...props} className={cn("h-full w-full flex-1 bg-primary transition-all", progressClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)`}} />
    </div>
  )
}

export default Progress