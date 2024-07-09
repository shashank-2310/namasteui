"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import componentList from '@/app/docs/components/componentList.json'
import { ScrollArea } from '../ui/scroll-area';

const SideNav = () => {
    const pathName = usePathname();

    return (
        <ScrollArea className='scroll-smooth flex flex-col py-2 px-4 sm:p-7 lg:p-12 h-full sm:h-screen text-left'>
            <div className="flex flex-col gap-1">
                <span className='text-base font-semibold text-secondary-foreground'>Getting Started</span>
                <Link href={"/docs"} className={`${pathName == '/docs' ? 'text-secondary-foreground' : 'text-muted-foreground'}  text-sm hover:underline`}>Introduction</Link>
                <Link href={"/docs/installation"} className={`${pathName == '/docs/installation' ? 'text-secondary-foreground' : 'text-muted-foreground'}  text-sm hover:underline`}>Installation</Link>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <span className='text-base font-semibold text-secondary-foreground'>Components</span>
                {componentList.components.map((item) => (
                    <Link
                        key={item.name}
                        href={`/docs/components/${item.link}`}
                        className={`${pathName == `/docs/components/${item.link}` ? 'text-secondary-foreground' : 'text-muted-foreground'} text-sm hover:underline capitalize`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </ScrollArea>
    )
}

export default SideNav