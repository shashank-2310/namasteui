"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icons } from '../shared/IconsProvider'
import { ModeToggle } from '../shared/toggle'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname();

    return (
        <section className='bg-background/50 backdrop-blur sticky top-0 z-10 p-3 lg:p-4 flex flex-row justify-between items-center w-full'>
            <div className="sm:hidden flex items-center">
                <MobileNav />
            </div>
            <Button variant="ghost" className='dark:hover:bg-white dark:hover:text-black hover:bg-gray-200 sm:block hidden'>
                <Link href={"/"} className='flex flex-row gap-2 lg:gap-3 items-center'>
                    <Image src='/logo.svg' alt='logo' width={25} height={25} />
                    <h1 className='font-semibold lg:font-bold text-lg lg:text-xl tracking-wide'>NamasteUI</h1>
                </Link>
            </Button>
            <nav className='hidden sm:flex flex-row gap-2 lg:gap-6 items-center'>
                <Button variant="link" className='text-base'>
                    <Link href={"/"} className={`${pathName === '/' ? 'underline' : ''}`}>Home</Link>
                </Button>
                <Button variant="link" className='text-base'>
                    <Link href={"/docs/components"} className={`${pathName.includes('components') ? 'underline' : ''}`}>Components</Link>
                </Button>
                <Button variant="link" className='text-base'>
                    <Link href={"/docs"} className={`${pathName === '/docs' || pathName === '/docs/installation' ? 'underline' : ''}`}>Docs</Link>
                </Button>
            </nav>
            <div className="flex flex-row items-center gap-1 sm:gap-2 lg:gap-6">
                <Button variant="ghost" size="icon" className='dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white'>
                    <Link href={"https://twitter.com/shashankgupta_2"} rel="noopener noreferrer" target='_blank'>
                        <Icons.twitter className='size-4 sm:size-5' />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" className='dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white'>
                    <Link href={"https://linkedin.com/in/shashankgupta23"} rel="noopener noreferrer" target='_blank'>
                        <Icons.linkedin className='size-5 sm:size-6' />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" className='dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white'>
                    <Link href={"https://github.com/shashank-2310/namasteui"} rel="noopener noreferrer" target='_blank'>
                        <Icons.gitHub className='size-5 sm:size-6' />
                    </Link>
                </Button>
                <ModeToggle />
            </div>
        </section>
    )
}

export default Navbar