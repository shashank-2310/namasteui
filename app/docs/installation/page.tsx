import { InstallationBlock } from '@/components/shared/namasteui-component-details/ComponentInstallation'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <section className='flex flex-col gap-3 lg:gap-8 w-full py-2 px-4 sm:p-7 lg:p-12'>
            <p className='flex flex-row gap-1 sm:gap-2 items-center text-sm'>
                <span className='text-muted-foreground'>Docs</span>
                <ChevronRight className='size-4' />
                Installation
            </p>
            <h1 className='text-lg lg:text-2xl font-semibold'>Installation</h1>
            <p className='text-muted-foreground text-base'>
                Our components use shadcn-ui&apos;s utility styles, so,
                follow the below steps to install dependencies and structure your app:
            </p>
            <div className="flex flex-col gap-3 text-sm sm:text-base w-full">
                <span className='flex flex-row text-base text-muted-foreground break-words whitespace-nowrap'>
                    <ChevronRight /> Refer to shadcn installation&nbsp;
                    <Link
                        href={"https://ui.shadcn.com/docs/installation"}
                        className='underline hover:text-purple'
                        target='_blank'
                        rel='noopener noreferrer'
                    >docs</Link>
                </span>
                <p className='flex flex-row text-base text-muted-foreground w-full'>
                    <ChevronRight className='' /> Install shadcn-ui
                </p>
                <InstallationBlock headingClassName='hidden' subHeadingClassName='font-normal' />
            </div>
            <div className="w-full justify-end flex mt-2">
                <Button variant={"outline"} size={"lg"} className='w-fit text-sm sm:text-base rounded-xl border-foreground hover:bg-foreground hover:text-background'>
                    <Link href={"/docs/components/accordion"} className='flex items-center gap-1'>
                        Browse Components <ChevronRight className='size-5' />
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default page