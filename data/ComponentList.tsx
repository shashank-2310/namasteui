import React from 'react';

import AccordionComponent from '@/data/ui-library/AccordionComponent';
import AlertComponent from '@/data/ui-library/AlertComponent';
import ButtonComponent from '@/data/ui-library/ButtonComponent';
import CardComponent from '@/data/ui-library/CardComponent';
import CarouselComponent from '@/data/ui-library/CarouselComponent';
import DialogComponent from '@/data/ui-library/DialogComponent';
import DropdownMenuComponent from '@/data/ui-library/DropdownMenuComponent';
import FormComponent from '@/data/ui-library/FormComponent';
import InputComponent from '@/data/ui-library/InputComponent';
import LabelComponent from '@/data/ui-library/LabelComponent';
import NavigationMenuComponent from '@/data/ui-library/NavigationMenuComponent';
import ProgressComponent from '@/data/ui-library/ProgressComponent';
import SelectComponent from '@/data/ui-library/SelectComponent';
import SeparatorComponent from '@/data/ui-library/SeparatorComponent';
import SliderComponent from '@/data/ui-library/SliderComponent';
import TabsComponent from '@/data/ui-library/TabsComponent';
import ToastComponent from '@/data/ui-library/ToastComponent';
import ToggleComponent from '@/data/ui-library/ToggleComponent';
import MenubarComponent from '@/data/ui-library/MenubarComponent';
import TextAreaComponent from '@/data/ui-library/TextAreaComponent';

type ComponentType = {
    name: string;
    lib?: number;
    desc: string;
    link: string;
    preview: React.ReactNode;
    code: string;
}

const Components: ComponentType[] = [
    {
        name: "accordion",
        desc: "Vertically stacked panels that can be expanded or collapsed to show/hide content.",
        link: "accordion",
        preview: <AccordionComponent />,
        code: `import React from 'react'
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
export default AccordionComponent`,
    },
    {
        name: "alert",
        desc: "Displays a message to the user, often to convey important information or a status update.",
        link: "alert",
        preview: <AlertComponent />,
        code: `import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'

const AlertComponent = () => {
    return (
        <Alert>         {/* you can also use variant="destructive" */}
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>

    )
}

export default AlertComponent`
    },
    {
        name: "button",
        desc: "Allows the user to trigger an action or event by clicking or tapping on it.",
        link: "button",
        preview: <ButtonComponent />,
        code: ``
    },
    {
        name: "card",
        desc: "A container that displays content and related actions in a structured, visually appealing way.",
        link: "card",
        preview: <CardComponent />,
        code: ``
    },
    {
        name: "carousel",
        desc: "Displays a collection of content (images, text, etc.) in a scrollable, horizontal layout.",
        link: "carousel",
        preview: <CarouselComponent />,
        code: ``
    },
    {
        name: "dialog",
        desc: "A modal window that displays content or prompts the user for input, blocking the main interface.",
        link: "dialog",
        preview: <DialogComponent />,
        code: ``
    },
    {
        name: "dropdown menu",
        desc: "A menu that appears when the user clicks or hovers over a trigger element, allowing them to select an option.",
        link: "dropdown-menu",
        preview: <DropdownMenuComponent />,
        code: ``
    },
    {
        name: "form",
        desc: "A container for collecting user input, such as text, numbers, or selections.",
        link: "form",
        preview: <FormComponent />,
        code: ``
    },
    {
        name: "input",
        desc: "Allows the user to enter and edit text, numbers, or other data.",
        link: "input",
        preview: <InputComponent />,
        code: ``
    },
    {
        name: "label",
        desc: "Provides a descriptive text label for an input or other UI element.",
        link: "label",
        preview: <LabelComponent />,
        code: ``
    },
    {
        name: "menubar",
        desc: "A horizontal menu bar that provides access to various commands or actions.",
        link: "menubar",
        preview: <MenubarComponent />,
        code: ``
    },
    {
        name: "navigation menu",
        desc: "A menu that allows the user to navigate to different sections or pages of an application.",
        link: "navigation-menu",
        preview: <NavigationMenuComponent />,
        code: ``
    },
    {
        name: "progress",
        desc: "Displays the current progress of a task or operation, often as a visual bar or circular indicator.",
        link: "progress",
        preview: <ProgressComponent />,
        code: ``
    },
    {
        name: "select",
        desc: "Allows the user to choose one or more options from a dropdown list.",
        link: "select",
        preview: <SelectComponent />,
        code: ``
    },
    {
        name: "separator",
        desc: "A visual divider that separates and groups related content or UI elements.",
        link: "separator",
        preview: <SeparatorComponent />,
        code: ``
    },
    {
        name: "slider",
        desc: "Allows the user to select a value from a range by dragging a handle along a track.",
        link: "slider",
        preview: <SliderComponent />,
        code: ``
    },
    {
        name: "tabs",
        desc: "A set of related content panels that can be switched between by clicking on their corresponding tab.",
        link: "tabs",
        preview: <TabsComponent />,
        code: ``
    },
    {
        name: "textarea",
        desc: "Allows the user to enter and edit multi-line text, often used for longer form inputs.",
        link: "textarea",
        preview: <TextAreaComponent />,
        code: ``
    },
    {
        name: "toast",
        desc: "A temporary, non-intrusive notification that appears and disappears automatically.",
        link: "toast",
        preview: <ToastComponent />,
        code: ``
    },
    {
        name: "toggle",
        desc: "Provides a switch-like control that allows the user to enable or disable a setting or option.",
        link: "toggle",
        preview: <ToggleComponent />,
        code: ``
    }
];


export default Components;