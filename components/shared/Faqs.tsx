import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faqs = () => {
    return (
        <Accordion type="single" collapsible className='text-left text-base sm:w-11/12 lg:w-3/5'>
            <AccordionItem value="item-1">
                <AccordionTrigger>Why copy/paste and not packaged as a dependency?</AccordionTrigger>
                <AccordionContent>
                    Copy/paste allows you to directly integrate and fully customize components without the constraints of an external dependency.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Which frameworks are supported?</AccordionTrigger>
                <AccordionContent>
                    NamasteUI components are framework-agnostic and can be used with any framework that supports React.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Can I use this in my project?</AccordionTrigger>
                <AccordionContent>
                    Absolutely! NamasteUI components are open source and ready to be integrated into any project.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Faqs