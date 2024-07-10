"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import ComponentIntro from './ComponentIntro';
import ComponentPreviewAndCode from './ComponentPreviewAndCode';

const ComponentPage = () => {
    const pathName = usePathname().split('/').pop()?.replace(/-/g, ' ') || 'Component';

    return (
        <section className='flex flex-col gap-3 lg:gap-8 w-full py-2 px-4 sm:p-7 lg:p-12'>
            <ComponentIntro componentName={pathName} />
            <ComponentPreviewAndCode componentName={pathName} />
        </section>
    )
}

export default ComponentPage