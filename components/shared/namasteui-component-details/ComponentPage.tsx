"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import ComponentIntro from './ComponentIntro';
import ComponentPreviewAndCode from './ComponentPreviewAndCode';
import ComponentInstallation from './ComponentInstallation';
import PropsGrid from './PropsGrid';
import NextPrevBtn from './NextPrevBtn';
import ScrollLink from '../ScrollLink';

const ComponentPage = () => {
    const pathName = usePathname().split('/').pop()?.replace(/-/g, ' ') || 'Component';

    return (
        <section className='flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full py-2 px-4 sm:p-7 lg:p-12'>
            <div className="flex flex-row justify-start gap-32">
                <ComponentIntro componentName={pathName} />
                <div className="hidden lg:flex flex-col gap-3">
                    <h4 className='capitalize font-medium text-base'>On this page</h4>
                    <nav className='flex flex-col text-sm gap-2'>
                        <ScrollLink href='#installation'>Installation</ScrollLink>
                        <ScrollLink href='#sourcecode'>Source Code</ScrollLink>
                        <ScrollLink href='#props'>Props</ScrollLink>
                    </nav>
                </div>
            </div>
            <div className="w-full lg:w-[85%] flex flex-col gap-6 sm:gap-8 lg:gap-12">
                <ComponentPreviewAndCode componentName={pathName} />
                <ComponentInstallation componentName={pathName} />
            </div>
                <PropsGrid componentName={pathName} />
                <NextPrevBtn componentName={pathName} />
        </section>
    )
}

export default ComponentPage