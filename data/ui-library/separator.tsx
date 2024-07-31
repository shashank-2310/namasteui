import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardBody, CardHeading, CardDescription, CardFooter } from './card'

const Separator = ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return (
    <hr {...props} className={cn('border border-muted-foreground/30 my-2 h-px rounded w-full', className)} />
  )
}

// Below is just an example
export const SeparatorDemo = () => {
  return (
    <Card className='mb-10 mt-16'>
      <CardBody>
        <CardHeading>
          Namaste World
        </CardHeading>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </CardDescription>
      </CardBody>
      <CardFooter>
        <Separator />
        <p>~ NamasteUI</p>
      </CardFooter>
    </Card>
  )
}

export default Separator