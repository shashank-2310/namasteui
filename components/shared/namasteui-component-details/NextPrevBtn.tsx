import React from 'react'
import { Button } from '@/components/ui/button'
import { ComponentProps } from './ComponentIntro'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Components from '@/data/ComponentList'

const NextPrevBtn = ({ componentName }: ComponentProps) => {

    const len = Components.length;

    const next = Components.findIndex((item) => item.name === componentName) + 1;
    const nextComponent = Components[next];

    const prev = Components.findIndex((item) => item.name === componentName) - 1;
    const prevComponent = Components[prev];

    return (
        <div className='flex flex-row justify-between items-center gap-2 w-full lg:w-11/12'>
            {prev >= 0 &&
                <Link href={`/docs/components/${prevComponent.link}`} className='mr-auto'>
                    <Button
                        variant={"outline"}
                        className='text-xs lg:text-sm rounded-xl border-foreground/30 hover:bg-foreground hover:text-background flex flex-row gap-1 sm:gap-2 items-center capitalize'
                    >

                        <ChevronLeft className='size-3 sm:size-5' />
                        {prevComponent.name}
                    </Button>
                </Link>}
            {next < len && next > -1 &&
                <Link href={`/docs/components/${nextComponent.link}`} className='ml-auto'>
                    <Button
                        variant={"outline"}
                        className='text-xs lg:text-sm rounded-xl border-foreground/30 hover:bg-foreground hover:text-background flex flex-row gap-1 sm:gap-2 items-center capitalize'
                    >

                        {nextComponent.name}
                        <ChevronRight className='size-3 sm:size-5' />
                    </Button>
                </Link>}
        </div>
    )
}

export default NextPrevBtn