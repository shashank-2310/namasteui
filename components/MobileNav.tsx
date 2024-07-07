import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from './shared/IconsProvider'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Icons.nav className='size-6' />
            </SheetTrigger>
            <SheetContent side="top" className='bg-transparent backdrop-blur-md h-full flex items-center justify-center'>
                <SheetHeader>
                    <SheetTitle className="flex flex-row my-2 gap-2 items-center w-full justify-center">
                        <Image src='/logo.svg' alt='logo' width={25} height={25} />
                        <span className='font-bold text-lg tracking-wide'>NamasteUI</span>
                    </SheetTitle>
                    <SheetDescription className='flex flex-col justify-between items-center font-medium text-gray-800 dark:text-gray-400'>
                        <Button variant="link" className='text-base'><Link href={"/"}>Home</Link></Button>
                        <Button variant="link" className='text-base'><Link href={"/docs"}>Docs</Link></Button>
                        <Button variant="link" className='text-base'><Link href={"/components"}>Components</Link></Button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav