import React from 'react'
import { ComponentProps } from './ComponentIntro'
import ClipboardCopyBtn from '../ClipboardCopyBtn'

const NodeInstallation = ({ componentName }: ComponentProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className='font-medium text-base sm:text-lg lg:text-xl'>Installation</h1>
            <div className='p-4 border border-muted-foreground/30 bg-black95 dark:bg-black100 text-white90 rounded-lg w-full sm:w-3/4 lg:w-2/5 relative'>
                <ClipboardCopyBtn id='node' />
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className='text-sm lg:text-base pt-6 w-full' id='node'>
                    npx shadcn-ui@latest add {componentName}
                </p>
            </div>
        </div>
    )
}

export default NodeInstallation