import React from 'react'
import { ChevronRight } from 'lucide-react'
import { ComponentProps } from './ComponentIntro'
import ClipboardCopyBtn from '../ClipboardCopyBtn'
import { CodeBlock } from './ComponentCode'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'


const ComponentInstallation = ({ componentName }: ComponentProps) => {
    const cmpntName = componentName.replace(/ /g, '');

    return (
        <div className="flex flex-col gap-6 w-full lg:w-3/4" id='installation'>
            <InstallationBlock componentName={cmpntName} />
            <div className="flex flex-col gap-3" id='sourcecode'>
                <h2 className='flex flex-row text-base text-muted-foreground'>
                    <ChevronRight /> Copy the source code
                </h2>
                <p className='bg-grey50 text-grey px-3 py-1 w-fit text-xs sm:text-sm rounded-lg'>components/ui/{cmpntName}.tsx</p>
                <div className="border border-muted-foreground/30 bg-grey50 py-4 px-2 sm:p-5 sm:text-base text-sm rounded-lg relative">
                    <ClipboardCopyBtn id='code2' />
                    <ScrollArea className="h-[60dvh]" id='code2'>
                        <CodeBlock componentName={componentName} />
                    </ScrollArea>
                </div>
            </div>
            <div className="flex flex-col gap-3" id='sourcecode'>
                <h2 className='flex flex-row text-base text-muted-foreground'>
                    <ChevronRight /> Import the component in your project
                </h2>
                <p className='bg-grey50 text-grey px-3 py-1 w-fit text-xs sm:text-sm rounded-lg'>
                    import&nbsp;
                    <span className='capitalize'>{cmpntName}&nbsp;</span>
                    <br className='sm:hidden' />
                    from&nbsp;
                    {`"path/to/${cmpntName}";`}
                </p>
                <p className='text-grey text-xs sm:text-sm'>Now you can directy use it with the help of the props given below.</p>
            </div>
        </div>
    )
}

export function InstallationBlock({ headingClassName, subHeadingClassName, componentName }: { headingClassName?: string, subHeadingClassName?: string, componentName?: string }) {
    const clsxCode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
`
    return (
        <>
            <h1 className={cn('font-semibold text-lg lg:text-xl', headingClassName)}>Installation</h1>
            <div className="flex flex-col gap-3">
                <h2 className={cn('flex flex-row text-base text-muted-foreground', subHeadingClassName)}>
                    <ChevronRight /> Install util dependencies
                </h2>
                <div className="border border-muted-foreground/30 bg-grey50 py-4 px-2 sm:p-5 text-sm rounded-lg relative" id='npm'>
                    <ClipboardCopyBtn id='npm' />
                    <p className='flex flex-row font-mono text-grey'>
                        npm&nbsp;
                        <span className='text-green-500'>
                            i clsx tailwind-merge
                            {componentName === 'checkbox' && ' @tailwindcss/forms'}
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className={cn('flex flex-row text-base text-muted-foreground', subHeadingClassName)}>
                    <ChevronRight /> Add util file
                </h2>
                <p className='bg-grey50 text-grey px-3 py-1 text-xs sm:text-sm w-fit rounded-lg'>lib/utils.ts</p>
                <div className="border border-muted-foreground/30 bg-grey50 py-4 px-2 sm:p-5 text-sm sm:text-base rounded-lg relative" id='clsx'>
                    <ClipboardCopyBtn id='clsx' />
                    <div className="text-sm sm:text-base">
                        <SyntaxHighlighter
                            language="tsx"
                            style={vscDarkPlus}
                            wrapLines
                            wrapLongLines
                        >
                            {clsxCode}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
            {componentName === 'checkbox' && <div className="flex flex-col gap-3">
                <h2 className='flex flex-row text-base text-muted-foreground'>
                    <ChevronRight /> Update&nbsp;
                    <span className='bg-grey50 text-grey px-1 py-1 text-xs sm:text-sm w-fit rounded-lg'>tailwind.config.ts</span>
                    &nbsp;file
                </h2>
                <div className="border border-muted-foreground/30 bg-grey50 py-4 px-2 sm:p-5 text-sm rounded-lg relative" id='npm'>
                    <div className="text-sm sm:text-base">
                        <SyntaxHighlighter
                            language="ts"
                            style={vscDarkPlus}
                            wrapLines
                            wrapLongLines
                        >
                            {`// tailwind.config.ts

module.exports = {
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [require("@tailwindcss/forms")],
};`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ComponentInstallation