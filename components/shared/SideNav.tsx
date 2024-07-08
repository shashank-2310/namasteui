"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import componentList from '@/app/(root)/components/componentList.json'
import { ScrollArea } from '../ui/scroll-area';

const SideNav = () => {
    const pathName = usePathname();

    return (
        <ScrollArea className='scroll-smooth flex flex-col py-2 px-4 sm:p-7 lg:p-12 h-full sm:h-screen text-left'>
            <div className="flex flex-col gap-1">
                <span className='text-base font-semibold text-black dark:text-white'>Getting Started</span>
                <Link href={"/docs"} className={`${pathName == '/docs' ? 'text-white' : 'text-muted-foreground'}  text-sm hover:underline`}>Introduction</Link>
                <Link href={"/docs/installation"} className={`${pathName == '/docs/installation' ? 'text-white' : 'text-muted-foreground'}  text-sm hover:underline`}>Installation</Link>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <span className='text-base font-semibold text-black dark:text-white'>Components</span>
                {componentList.components.map((item) => (
                    <Link
                        key={item.name}
                        href={`/components/${item.link}`}
                        className={`${pathName == `/components/${item.link}` ? 'text-white' : 'text-muted-foreground'} text-sm hover:underline capitalize`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </ScrollArea>
    )
}

export default SideNav