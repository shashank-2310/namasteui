"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import ComponentIntro from './ComponentIntro';
import ComponentPreviewAndCode from './ComponentPreviewAndCode';
import ComponentInstallation from './ComponentInstallation';
import PropsGrid from './PropsGrid';
import NextPrevBtn from './NextPrevBtn';

const ComponentPage = () => {
    const pathName = usePathname().split('/').pop()?.replace(/-/g, ' ') || 'Component';

    return (
        <section className='flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full py-2 px-4 sm:p-7 lg:p-12'>
            <ComponentIntro componentName={pathName} />
            <ComponentPreviewAndCode componentName={pathName} />
            <ComponentInstallation componentName={pathName} />
            <PropsGrid />
            <NextPrevBtn componentName={pathName} />
        </section>
    )
}

export default ComponentPage