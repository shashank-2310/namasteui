"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { ScrollArea } from '../ui/scroll-area';
import Components from '@/data/ComponentList';

const SideNav = () => {
    const pathName = usePathname();

    return (
        <ScrollArea className='flex flex-col pt-2 pb-10 px-4 sm:p-7 lg:p-12 h-[90dvh] sm:h-full text-left'>
            <div className="flex flex-col gap-1">
                <span className='text-base lg:text-lg font-semibold text-secondary-foreground'>Getting Started</span>
                <Link href={"/docs"} className={`${pathName === '/docs' ? 'text-secondary-foreground' : 'text-muted-foreground'}  text-sm lg:text-base hover:underline`}>Introduction</Link>
                <Link href={"/docs/installation"} className={`${pathName === '/docs/installation' ? 'text-secondary-foreground' : 'text-muted-foreground'}  text-sm lg:text-base hover:underline`}>Installation</Link>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <span className='text-base lg:text-lg font-semibold text-secondary-foreground'>Components</span>
                {Components.map((item) => (
                    <Link
                        key={item.name}
                        href={`/docs/components/${item.link}`}
                        className={`${pathName === `/docs/components/${item.link}` ? 'text-secondary-foreground' : 'text-muted-foreground'} text-sm lg:text-base hover:underline capitalize`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </ScrollArea>
    )
}

export default SideNav