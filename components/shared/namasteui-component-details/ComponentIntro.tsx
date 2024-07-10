import React from 'react'
import { ChevronRight } from 'lucide-react'
import componentList from '@/app/docs/components/componentList.json'

export type ComponentProps = {
    componentName: string
}

const ComponentIntro = ({ componentName }: ComponentProps) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex flex-col gap-3 lg:gap-8">
                <p className='flex flex-row gap-1 sm:gap-2 items-center text-xs sm:text-sm capitalize'>
                    <span className='text-muted-foreground'>Docs</span>
                    <ChevronRight className='size-4' />
                    {componentName}
                </p>
                <h1 className='text-xl lg:text-2xl font-semibold capitalize'>
                    {componentName}
                </h1>
            </div>
            <p className='text-sm sm:text-base lg:text-lg'>
                {componentList.components.find((item) => item.name === componentName)?.desc || 'Component description not found.'}
            </p>
        </div>
    )
}

export default ComponentIntro