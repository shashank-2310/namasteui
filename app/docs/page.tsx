import Faqs from '@/components/shared/Faqs'
import { Icons } from '@/components/shared/IconsProvider'
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
                Introduction
            </p>
            <h1 className='text-lg lg:text-2xl font-semibold'>Introduction</h1>
            <p className='text-muted-foreground text-base'>
                Inspired by the simplicity of Shadcn UI, we present our own set of ui components.
                <br />
                Reusable. Accessible. Customizable. Open Source.
            </p>
            <div className='text-base flex flex-col gap-2 mt-3 lg:mt-5 w-full'>
                <p className='flex flex-row gap-2'>
                    <Icons.star className='size-4 sm:size-5 lg:size-6' /> NamasteUI empowers you to cherry-pick the components you need.
                </p>
                <p className='flex flex-row gap-2'>
                    <Icons.star className='size-4 sm:size-5 lg:size-6' /> Simply copy and paste the code directly into your projects.
                </p>
                <p className='flex flex-row gap-2'>
                    <Icons.star className='size-4 sm:size-5 lg:size-6' /> Ready-made solutions and a foundation for your own custom library.
                </p>
            </div>
            <div className="flex flex-col gap-2 mt-3">
                <h1 className='text-xl font-medium'>FAQ</h1>
                <hr className='sm:w-11/12 lg:w-3/5' />
                <Faqs />
            </div>
            <div className="w-full justify-end flex mt-2">
                <Button variant={"outline"} size={"lg"} className='w-fit text-sm sm:text-base rounded-xl border-foreground hover:bg-foreground hover:text-background'>
                    <Link href={"/docs/installation"} className='flex items-center gap-1'>
                        Installation <ChevronRight className='size-5' />
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default page