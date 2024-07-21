'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Button from './button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export const Dialog = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className='w-full flex justify-center items-center'>
      <div className="relative inline-block">
        {children}
      </div>
    </div>
  )
}

export const DropdownMenuGroup = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn("origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-background border border-muted-foreground/30", className)}>
      <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </ul>
    </div>
  )
}

export const DropdownMenuItem = ({ children, closeDropdown, className, ...props }: React.HTMLAttributes<HTMLLIElement> & { closeDropdown: VoidFunction }) => {
  return (
    <li {...props} onClick={closeDropdown} className={cn("block transition-colors px-2 py-1 m-1 text-sm text-muted-foreground hover:bg-input rounded-lg", className)}>
      {children}
    </li>
  )
}

export const DropdownMenuTrigger = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('', className)}>
      {children}
    </div>
  )
}


/*  You can use the below code as boilerplate for your own dropdown, otherwise it is absolutely unrequired */
export const DropdownMenuDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Dialog>
      <DropdownMenuTrigger>
        <Button
          className="inline-flex gap-2 items-center"
          onClick={toggleDropdown}
        >
          Dropdown <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuGroup>
          <DropdownMenuItem closeDropdown={closeDropdown}>
            <Link href="#">Option 1</Link>
          </DropdownMenuItem>
          <DropdownMenuItem closeDropdown={closeDropdown}>
            <Link href="#">Option 2</Link>
          </DropdownMenuItem>
          <DropdownMenuItem closeDropdown={closeDropdown}>
            <Link href="#">Option 3</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      )}
    </Dialog>
  )
}