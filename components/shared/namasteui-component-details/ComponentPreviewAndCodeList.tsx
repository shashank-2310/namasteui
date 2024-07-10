import React from 'react';

import AccordionComponent from '@/ui-library/AccordionComponent';
import AlertComponent from '@/ui-library/AlertComponent';
import AvatarComponent from '@/ui-library/AvatarComponent';
import ButtonComponent from '@/ui-library/ButtonComponent';
import CardComponent from '@/ui-library/CardComponent';
import CarouselComponent from '@/ui-library/CarouselComponent';
import DialogComponent from '@/ui-library/DialogComponent';
import DropdownMenuComponent from '@/ui-library/DropdownMenuComponent';
import FormComponent from '@/ui-library/FormComponent';
import InputComponent from '@/ui-library/InputComponent';
import LabelComponent from '@/ui-library/LabelComponent';
import NavigationMenuComponent from '@/ui-library/NavigationMenuComponent';
import ProgressComponent from '@/ui-library/ProgressComponent';
import SelectComponent from '@/ui-library/SelectComponent';
import SeparatorComponent from '@/ui-library/SeparatorComponent';
import SliderComponent from '@/ui-library/SliderComponent';
import TabsComponent from '@/ui-library/TabsComponent';
import ToastComponent from '@/ui-library/ToastComponent';
import ToggleComponent from '@/ui-library/ToggleComponent';
import MenubarComponent from '@/ui-library/MenubarComponent';
import TextAreaComponent from '@/ui-library/TextAreaComponent';

type ComponentType = {
    name: string;
    preview: React.ReactNode;
    code: string;
}

export const Components: ComponentType[] = [
    {
        "name": "accordion",
        "preview": <AccordionComponent />,
        "code": `import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionComponent = () => {
    return (
        <Accordion type="single" collapsible">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    component's aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
export default AccordionComponent`
    },
    {
        "name": "alert",
        "preview": <AlertComponent />,
        "code": ""
    },
    {
        "name": "avatar",
        "preview": <AvatarComponent />,
        "code": ""
    },
    {
        "name": "button",
        "preview": <ButtonComponent />,
        "code": ""
    },
    {
        "name": "card",
        "preview": <CardComponent />,
        "code": ""
    },
    {
        "name": "carousel",
        "preview": <CarouselComponent />,
        "code": ""
    },
    {
        "name": "dialog",
        "preview": <DialogComponent />,
        "code": ""
    },
    {
        "name": "dropdown menu",
        "preview": <DropdownMenuComponent />,
        "code": ""
    },
    {
        "name": "form",
        "preview": <FormComponent />,
        "code": ""
    },
    {
        "name": "input",
        "preview": <InputComponent />,
        "code": ""
    },
    {
        "name": "label",
        "preview": <LabelComponent />,
        "code": ""
    },
    {
        "name": "menubar",
        "preview": <MenubarComponent />,
        "code": ""
    },
    {
        "name": "navigation menu",
        "preview": <NavigationMenuComponent />,
        "code": ""
    },
    {
        "name": "progress",
        "preview": <ProgressComponent />,
        "code": ""
    },
    {
        "name": "select",
        "preview": <SelectComponent />,
        "code": ""
    },
    {
        "name": "separator",
        "preview": <SeparatorComponent />,
        "code": ""
    },
    {
        "name": "slider",
        "preview": <SliderComponent />,
        "code": ""
    },
    {
        "name": "tabs",
        "preview": <TabsComponent />,
        "code": ""
    },
    {
        "name": "textarea",
        "preview": <TextAreaComponent />,
        "code": ""
    },
    {
        "name": "toast",
        "preview": <ToastComponent />,
        "code": ""
    },
    {
        "name": "toggle",
        "preview": <ToggleComponent />,
        "code": ""
    }
];