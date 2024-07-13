"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import ComponentIntro from './ComponentIntro';
import ComponentPreviewAndCode from './ComponentPreviewAndCode';
import NodeInstallation from './NodeInstallation';
import NextPrevBtn from './NextPrevBtn';

const ComponentPage = () => {
    const pathName = usePathname().split('/').pop()?.replace(/-/g, ' ') || 'Component';

    return (
        <section className='flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full py-2 px-4 sm:p-7 lg:p-12'>
            <ComponentIntro componentName={pathName} />
            <ComponentPreviewAndCode componentName={pathName} />
            <NodeInstallation componentName={pathName} />
            <div className="flex flex-col gap-2">
                <h1 className='font-medium text-base sm:text-lg lg:text-xl'>Usage</h1>
                <p className='text-sm lg:text-base text-muted-foreground'>
                    Use the CLI command provided above, then copy and paste the code.
                </p>
            </div>
            <NextPrevBtn componentName={pathName} />
        </section>
    )
}

export default ComponentPage