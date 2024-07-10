import React from 'react'
import { Button } from '@/components/ui/button'
import { ComponentProps } from './ComponentIntro'
import componentList from "@/app/docs/components/componentList.json"
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const NextPrevBtn = ({ componentName }: ComponentProps) => {

    const len = componentList.components.length;

    const next = componentList.components.findIndex((item) => item.name === componentName) + 1;
    const nextComponent = componentList.components[next];

    const prev = componentList.components.findIndex((item) => item.name === componentName) - 1;
    const prevComponent = componentList.components[prev];

    return (
        <div className='flex flex-row justify-between items-center gap-2 text-sm sm:text-base w-full lg:w-11/12'>
            {prev >= 0 &&
                <Button
                    variant={"outline"}
                    size={"lg"}
                    className='w-fit mr-auto text-sm sm:text-base rounded-xl border-foreground hover:bg-foreground hover:text-background p-2 sm:p-4 lg:p-6'
                >
                    <Link
                        href={`/docs/components/${prevComponent.link}`}
                        className='flex flex-row gap-2 items-center capitalize'
                    >
                        <ChevronLeft className='size-4 sm:size-5' />
                        {prevComponent.name}
                    </Link>
                </Button>}
            {next < len && next > -1 &&
                <Button
                    variant={"outline"}
                    size={"lg"}
                    className='w-fit ml-auto text-sm sm:text-base rounded-xl border-foreground hover:bg-foreground hover:text-background p-2 sm:p-4 lg:p-6'
                >
                    <Link
                        href={`/docs/components/${nextComponent.link}`}
                        className='flex flex-row gap-2 items-center capitalize'
                    >
                        {nextComponent.name}
                        <ChevronRight className='size-4 sm:size-5' />
                    </Link>
                </Button>}
        </div>
    )
}

export default NextPrevBtn