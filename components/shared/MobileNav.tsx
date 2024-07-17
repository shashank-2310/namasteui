import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from '../shared/IconsProvider'
import Image from 'next/image'
import SideNav from './SideNav'
import Link from 'next/link'

const MobileNav = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <Icons.nav className='size-6' />
            </SheetTrigger>
            <SheetContent side="left" className='bg-background dark:bg-background/40 dark:backdrop-blur'>
                <SheetHeader>
                    <SheetTitle>
                        <Link href={"/"} className="flex flex-row mb-3 gap-2 items-center w-full">
                            <Image src='/logo.svg' alt='logo' width={25} height={25} />
                            <span className='font-bold text-lg tracking-wide'>NamasteUI</span>
                        </Link>
                    </SheetTitle>
                    <SheetDescription className='h-screen'>
                        <SideNav />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav