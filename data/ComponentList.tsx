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
    desc: string;
    link: string;
    preview: React.ReactNode;
    props: string[],
    propsDesc: string[],
    propTypes: string[],
    code: string;
}
const items = [
    {
        title: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
        title: 'Is it styled?',
        content: 'Yes. It comes with default styles that matches the other component\'s aesthetic.',
    },
    {
        title: 'Is it animated?',
        content: 'Yes. It\'s animated by default, but you can disable it if you prefer.',
    },
];

const Components: ComponentType[] = [
    {
        name: "accordion",
        desc: "Vertically stacked panels that can be expanded or collapsed to show/hide content.",
        link: "accordion",
        preview: <AccordionComponent items={items} />,
        props: ['items (required)', 'outerContainerClassName', 'innerContainerClassName', 'titleClassName', 'contentClassName', 'separatorClassName'],
        propsDesc: ['An array of objects containing the title and content of each accordion item.', 'Additional class name(s) for the outer container.', 'Additional class name(s) for the inner container.', 'Additional class name(s) for the title.', 'Additional class name(s) for the content.', 'Additional class name(s) for the separator.'],
        propTypes: ['Array<{ title: string; content: string; }>', 'string', 'string', 'string', 'string', 'string'],
        code: `"use client"

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
                <>
                    <details key={index} className={cn('mb-3', innerContainerClassName)}>
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
                </>
            ))}
        </div>
    );
};

export default AccordionComponent;`,
    },
    {
        name: "alert",
        desc: "Displays a message to the user, often to convey important information or a status update.",
        link: "alert",
        preview: <AlertComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
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
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "card",
        desc: "A container that displays content and related actions in a structured, visually appealing way.",
        link: "card",
        preview: <CardComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "carousel",
        desc: "Displays a collection of content (images, text, etc.) in a scrollable, horizontal layout.",
        link: "carousel",
        preview: <CarouselComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "dialog",
        desc: "A modal window that displays content or prompts the user for input, blocking the main interface.",
        link: "dialog",
        preview: <DialogComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "dropdown menu",
        desc: "A menu that appears when the user clicks or hovers over a trigger element, allowing them to select an option.",
        link: "dropdown-menu",
        preview: <DropdownMenuComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "form",
        desc: "A container for collecting user input, such as text, numbers, or selections.",
        link: "form",
        preview: <FormComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "input",
        desc: "Allows the user to enter and edit text, numbers, or other data.",
        link: "input",
        preview: <InputComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "label",
        desc: "Provides a descriptive text label for an input or other UI element.",
        link: "label",
        preview: <LabelComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "menubar",
        desc: "A horizontal menu bar that provides access to various commands or actions.",
        link: "menubar",
        preview: <MenubarComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "navigation menu",
        desc: "A menu that allows the user to navigate to different sections or pages of an application.",
        link: "navigation-menu",
        preview: <NavigationMenuComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "progress",
        desc: "Displays the current progress of a task or operation, often as a visual bar or circular indicator.",
        link: "progress",
        preview: <ProgressComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "select",
        desc: "Allows the user to choose one or more options from a dropdown list.",
        link: "select",
        preview: <SelectComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "separator",
        desc: "A visual divider that separates and groups related content or UI elements.",
        link: "separator",
        preview: <SeparatorComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "slider",
        desc: "Allows the user to select a value from a range by dragging a handle along a track.",
        link: "slider",
        preview: <SliderComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "tabs",
        desc: "A set of related content panels that can be switched between by clicking on their corresponding tab.",
        link: "tabs",
        preview: <TabsComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "textarea",
        desc: "Allows the user to enter and edit multi-line text, often used for longer form inputs.",
        link: "textarea",
        preview: <TextAreaComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "toast",
        desc: "A temporary, non-intrusive notification that appears and disappears automatically.",
        link: "toast",
        preview: <ToastComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    },
    {
        name: "toggle",
        desc: "Provides a switch-like control that allows the user to enable or disable a setting or option.",
        link: "toggle",
        preview: <ToggleComponent />,
        props: [],
        propsDesc: [],
        propTypes: [],
        code: ``
    }
];


export default Components;