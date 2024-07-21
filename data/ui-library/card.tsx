import React from 'react'
import Button from './button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('relative flex w-72 sm:w-80 flex-col rounded-xl bg-card-foreground bg-clip-border text-muted shadow-md', className)}>
      {children}
    </div>
  )
}
export const CardImage = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg dark:shadow-muted/60 shadow-black', className)}>
      {children}
    </div>
  )
}
export const CardBody = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('p-6', className)}>
      {children}
    </div>
  )
}
export const CardHeading = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 {...props} className={cn('mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased', className)}>
      {children}
    </h1>
  )
}
export const CardDescription = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...props} className={cn('block text-base font-light leading-relaxed text-inherit antialiased', className)}>
      {children}
    </p>
  )
}
export const CardFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  )
}

/*  You can use the below code as boilerplate for your own card, otherwise it is absolutely unrequired */
/*  Card Image is optional */
export const CardDemo = () => {
  return (
    <Card className='mb-10 mt-16'>
      <CardImage>
        <Image
          src={'/cardImage.jpeg'}
          alt='card-image'
          fill
        />
      </CardImage>
      <CardBody>
        <CardHeading>
          Namaste Radio
        </CardHeading>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </CardDescription>
      </CardBody>
      <CardFooter>
        <Button variant='secondary' className='rounded-xl'>
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}