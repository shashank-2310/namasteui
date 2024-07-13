"use client"

import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

type AccordionProps = {
    items: { title: string; content: string }[];
    outerContainerClassName?: string;
    innerContainerClassName?: string;
    titleClassName?: string;
    contentClassName?: string;
    separatorClassName?: string;
};

const AccordionComponent: React.FC<AccordionProps> = ({
    items,
    outerContainerClassName,
    innerContainerClassName,
    titleClassName,
    contentClassName,
    separatorClassName
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={cn('flex flex-col w-full relative', outerContainerClassName)}>
            {items.map((item, index) => (
                <div key={index}>
                    <details className={cn('mb-3', innerContainerClassName)}>
                        <summary
                            onClick={() => toggleAccordion(index)}
                            className="flex flex-wrap gap-4 items-center cursor-pointer"
                        >
                            <p className={cn("flex flex-1 p-1", titleClassName)}>{item.title}</p>
                            {activeIndex === index ? <ChevronRight /> : <ChevronDown />}
                        </summary>
                        <p className={cn('pt-2', contentClassName)}>{item.content}</p>
                    </details>
                    <hr className={cn('my-3 py-2 rounded w-full opacity-30', separatorClassName)} />
                </div>
            ))}
        </div>
    );
};

export default AccordionComponent;
