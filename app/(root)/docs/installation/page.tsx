import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='flex flex-col gap-3 lg:gap-8 w-full py-2 px-4 sm:p-7 lg:p-12'>
            <p className='flex flex-row gap-1 sm:gap-2 items-center text-xs sm:text-sm'>
                <span className='text-muted-foreground'>Docs</span>
                <ChevronRight className='size-4' />
                Installation
            </p>
            <h1 className='text-base sm:text-lg lg:text-2xl font-semibold'>Installation</h1>
            <p className='text-muted-foreground text-sm sm:text-base'>
                Follow the below steps to install dependencies and structure your app.
            </p>
            <div className="flex flex-col gap-1 text-sm sm:text-base">
                <p className='text-muted-foreground'>
                    1. Refer to shadcn installation
                    <Link
                        href={"https://ui.shadcn.com/docs/installation"}
                        className='underline hover:text-purple'
                        target='_blank'
                    >docs.</Link>
                </p>
                <p className='text-muted-foreground'>
                    2. Refer to magicui installation
                    <Link
                        href={"https://magicui.design/docs/installation"}
                        className='underline hover:text-purple'
                        rel='noopener noreferrer'
                    >docs.</Link>
                </p>
            </div>
            <p className='text-muted-foreground text-sm sm:text-base'>
                NOTE: If your project is already using the <span className='text-purple'>shadcn-ui</span>, don&apos;t worry! You can still use <span className='text-purple'>magicui</span>.
            </p>
            <div className="flex flex-col gap-1">
                <h1 className='text-sm sm:text-base lg:text-xl font-medium'>Dark Mode</h1>
                <p className='text-muted-foreground text-sm sm:text-base'>
                    For dark mode, refer to docs on
                    <Link
                        href={"https://ui.shadcn.com/docs/dark-mode"}
                        className='underline hover:text-purple'
                        target='_blank'
                        rel='noopener noreferrer'
                    >shadcn/dark-mode</Link>.
                </p>
            </div>
            <div className="w-full justify-end flex mt-2">
                <Button variant={"outline"} size={"lg"} className='w-fit text-sm rounded-xl border-foreground hover:bg-foreground hover:text-background'>
                    <Link href={"/components"} className='flex items-center gap-1'>
                        Components <ChevronRight className='size-5' />
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default page