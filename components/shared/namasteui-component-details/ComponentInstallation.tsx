import React from 'react'
import { ChevronRight } from 'lucide-react'
import { ComponentProps } from './ComponentIntro'
import ClipboardCopyBtn from '../ClipboardCopyBtn'
import CodeText from './CodeText'
import { ScrollArea } from '@/components/ui/scroll-area'

const ComponentInstallation = ({ componentName }: ComponentProps) => {

    const clsxCode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
`

    return (
        <div className="flex flex-col gap-6 w-full lg:w-3/4">
            <h1 className='font-semibold text-base sm:text-lg lg:text-xl'>Installation</h1>
            <div className="flex flex-col gap-3">
                <h2 className='flex flex-row text-base font-medium lg:text-lg text-muted-foreground'>
                    <ChevronRight /> Install util dependencies
                </h2>
                <div className="border bg-black95 dark:bg-background py-4 px-2 sm:p-5 text-sm sm:text-base rounded-lg relative" id='npm'>
                    <ClipboardCopyBtn id='npm' />
                    <p className='flex flex-row font-mono text-grey'>
                        npm&nbsp;
                        <span className='text-green-500'>
                            i clsx tailwind-merge
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='flex flex-row font-medium text-base lg:text-lg text-muted-foreground'>
                    <ChevronRight /> Add util file
                </h2>
                <p className='ml-4 bg-muted px-3 py-1 w-fit rounded-full'>lib/utils.ts</p>
                <div className="border bg-black95 dark:bg-background py-4 px-2 sm:p-5 text-sm sm:text-base rounded-lg relative" id='clsx'>
                    <ClipboardCopyBtn id='clsx' />
                    <div className="flex flex-col font-mono text-sm sm:text-base text-white90 break-words whitespace-pre-wrap">
                        {clsxCode}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='flex flex-row text-base font-medium lg:text-lg text-muted-foreground'>
                    <ChevronRight /> Copy the source code
                </h2>
                <div className="border bg-black95 dark:bg-background py-4 px-2 sm:p-5 lg:text-lg rounded-lg relative" id='code2'>
                    <ClipboardCopyBtn id='code2' />
                    <ScrollArea className='h-[50dvh] lg:h-[40dvh] text-sm sm:text-base'>
                        <CodeText componentName={componentName} />
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default ComponentInstallation