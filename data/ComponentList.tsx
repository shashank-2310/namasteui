import React from 'react';

import Accordion from './ui-library/accordion';
import Avatar from './ui-library/avatar';
import { ButtonsShowCase } from './ui-library/button';
import { CardDemo } from './ui-library/card';
import CheckBox from './ui-library/checkbox';
import { ChipShowcase } from './ui-library/chip';
import { DialogDemo } from './ui-library/dialog';
import { DropdownMenuDemo } from './ui-library/dropdownmenu';
import Form from './ui-library/form';
import HoverCard from './ui-library/hovercard';
import { InputDemo } from './ui-library/input';
import { LabelDemo } from './ui-library/label';
import Menubar from './ui-library/menubar';
import Preloader from '@/components/shared/Preloader';
import Progress from './ui-library/progress';
import { SeparatorDemo } from './ui-library/separator';
import Slider from './ui-library/slider';
import TextArea from './ui-library/textarea';

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
    preview: <Accordion items={items} />,
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

const Accordion: React.FC<AccordionProps> = ({
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

export default Accordion;`,
  },
  {
    name: "avatar",
    desc: "An image element with a fallback for representing the user.",
    link: "avatar",
    preview: <Avatar />,
    props: ['url', 'className', 'imageClassName'],
    propsDesc: ['The URL of the image to display.', 'Additional class name(s) for the outer container.', 'Additional class name(s) for the image.'],
    propTypes: ['string | staticImport', 'string', 'string'],
    code: `import React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    url?: string | StaticImport;
    className?: string;
    imageClassName?: string;
}

const Avatar = ({
    url = "https://avatars.githubusercontent.com/u/124599?v=4",
    className,
    imageClassName,
    ...props

}: AvatarProps) => {

    return (
        <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>
            <Image
                src={url}
                alt="Avatar"
                width={60}
                height={60}
                className={cn("aspect-square h-full w-full", imageClassName)}
                {...props}
            />
        </div>
    )
}

export default Avatar;`
  },
  {
    name: "button",
    desc: "Allows the user to trigger an action or event by clicking or tapping on it.",
    link: "button",
    preview: <ButtonsShowCase />,
    props: ['variant', 'size', 'className'],
    propsDesc: ['The visual style of the button.', 'The size of the button.', 'Additional class name(s) for the button.'],
    propTypes: ['default | destructive | outline | secondary | ghost | link', 'default | sm | lg | icon', 'string'],
    code: `import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { User2Icon } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string,
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = ({
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant, size, className }))} />
  )
}

export default Button`
  },
  {
    name: "card",
    desc: "A container that displays content and related actions in a structured, visually appealing way.",
    link: "card",
    preview: <CardDemo />,
    props: ['className'],
    propsDesc: ['Additional class name(s) for all the card components.'],
    propTypes: ['string'],
    code: `import React from 'react'
import Button from './button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Card = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('relative flex w-72 sm:w-80 flex-col rounded-xl bg-card-foreground bg-clip-border text-muted shadow-md', className)}>
      {children}
    </div>
  )
}
export const CardImage = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg dark:shadow-muted/60 shadow-black', className)}>
      {children}
    </div>
  )
}
export const CardBody = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('p-6', className)}>
      {children}
    </div>
  )
}
export const CardHeading = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 {...props} className={cn('mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased', className)}>
      {children}
    </h1>
  )
}
export const CardDescription = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...props} className={cn('block text-base font-light leading-relaxed text-inherit antialiased', className)}>
      {children}
    </p>
  )
}
export const CardFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  )
}

/*  You can use the below code as boilerplate for your own card, otherwise it is absolutely unrequired */
/*  Card Image is optional */
const CardDemo = () => {
  return (
    <Card className='mb-10 mt-16'>
      <CardImage>
        <Image
          src={'/cardImage.jpeg'}
          alt='card-image'
          fill
        />
      </CardImage>
      <CardBody>
        <CardHeading>
          Namaste Radio
        </CardHeading>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </CardDescription>
      </CardBody>
      <CardFooter>
        <Button variant='secondary' className='rounded-xl'>
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}`
  },
  {
    name: "checkbox",
    desc: "A control that allows the user to toggle between checked and not checked.",
    link: "checkbox",
    preview: <CheckBox />,
    props: ['id', 'name', 'className'],
    propsDesc: ['The ID of the checkbox.', 'The name of the checkbox.', 'Additional class name(s) for the checkbox.'],
    propTypes: ['string', 'string', 'string'],
    code: `import React from 'react'
import { cn } from '@/lib/utils'

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string,
    name?: string,
}

const CheckBox = ({ id, name, className, ...props }: CheckBoxProps) => {
    return (
        <input
            {...props}
            id={id}
            name={name}
            type="checkbox"
            className={cn("size-6 rounded-md shadow focus:ring-0 focus:ring-offset-0", className)}
        />
    )
}

export default CheckBox`
  },
  {
    name: "chip",
    desc: "A small, rounded container that displays information or actions.",
    link: "chip",
    preview: <ChipShowcase />,
    props: ['variant', 'className'],
    propsDesc: ['The visual style of the chip.', 'Additional class name(s) for the chip.'],
    propTypes: ['default | destructive | secondary | success | warning | primary', 'string'],
    code: `import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'destructive' | 'secondary' | 'success' | 'warning' | 'primary',
  className?: string,
}


const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full text-xs py-1 px-2",
  {
    variants: {
      variant: {
        default: "bg-gray-500/15 text-gray-500",
        primary: "bg-blue-600/15 text-blue-600",
        success: "bg-green-500/15 text-green-500",
        warning: "bg-amber-500/15 text-amber-500",
        destructive: "bg-[#f31260]/15 text-[#f31260]",
        secondary: "bg-violet-500/15 text-violet-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Chip = ({
  variant,
  className,
  ...props
}: ChipProps) => {
  return <span {...props} className={cn(chipVariants({ variant, className }))}/>
}

export default Chip`
  },
  {
    name: "dialog",
    desc: "A modal window that displays content or prompts the user for input, blocking the main interface.",
    link: "dialog",
    preview: <DialogDemo />,
    props: ['isOpen (required)', 'onClose (required)', 'outSideModalClassName', 'modalContainerClassName', 'closeButtonClassName', 'modalContentClassName'],
    propsDesc: ['Whether the dialog is open or closed.', 'Function to close the dialog.', 'Additional class name(s) for the outside modal.', 'Additional class name(s) for the modal container.', 'Additional class name(s) for the close button.', 'Additional class name(s) for the modal content.'],
    propTypes: ['boolean', 'VoidFunction', 'string', 'string', 'string', 'string'],
    code: `"use client"
import React, { useEffect, useState } from 'react';
import Button from './button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: VoidFunction;
  outSideDialogClassName?: string;
  dialogContainerClassName?: string;
  closeButtonClassName?: string;
  dialogContentClassName?: string;
}

const Dialog = ({
  isOpen,
  onClose,
  children,
  outSideDialogClassName,
  dialogContainerClassName,
  closeButtonClassName,
  dialogContentClassName,
  ...props
}: DialogProps) => {

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  if (!isOpen) return null;

  return (
    <div {...props} onClick={handleOverlayClick} className={cn("fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-40", outSideDialogClassName)}>
      <div className={cn("bg-background border border-muted-foreground/30 p-4 sm:p-6 rounded-lg shadow-lg max-w-md w-3/4 sm:w-full", dialogContainerClassName)}>
        <div className="flex justify-end">
          <Button
            variant='link'
            size='icon'
            className={cn("text-muted-foreground bg-transparent opacity-40 hover:opacity-100 focus:outline-none", closeButtonClassName)}
            onClick={onClose}
          >
            <X className='size-5' />
          </Button>
        </div>
        <div className={cn("mt-2 text-muted-foreground", dialogContentClassName)}>{children}</div>
      </div>
    </div>
  )
}

/*  You can use the below code as boilerplate for your own dialog, otherwise it is absolutely unrequired */
export const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center">
      <Button onClick={openDialog}>
        Open Dialog
      </Button>
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        <h2 className="text-lg text-primary font-semibold mb-4 ">Dialog Content</h2>
        <p>This is the content of the Dialog.</p>
      </Dialog>
    </div>
  )
}

export default Dialog;`
  },
  {
    name: "dropdown menu",
    desc: "A menu that appears when the user clicks or hovers over a trigger element, allowing them to select an option.",
    link: "dropdown-menu",
    preview: <DropdownMenuDemo />,
    props: ['className'],
    propsDesc: ['Additional class name(s) for all the card components.'],
    propTypes: ['string'],
    code: `'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Button from './button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export const Dialog = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className='w-full flex justify-center items-center'>
      <div className="relative inline-block">
        {children}
      </div>
    </div>
  )
}

export const DropdownMenuGroup = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn("origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-background border border-muted-foreground/30", className)}>
      <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </ul>
    </div>
  )
}

export const DropdownMenuItem = ({ children, closeDropdown, className, ...props }: React.HTMLAttributes<HTMLLIElement> & { closeDropdown: VoidFunction }) => {
  return (
    <li {...props} onClick={closeDropdown} className={cn("block transition-colors px-2 py-1 m-1 text-sm text-muted-foreground hover:bg-input rounded-lg", className)}>
      {children}
    </li>
  )
}

export const DropdownMenuTrigger = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('', className)}>
      {children}
    </div>
  )
}


/*  You can use the below code as boilerplate for your own dropdown, otherwise it is absolutely unrequired */
export const DropdownMenuDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Dialog>
      <DropdownMenuTrigger>
        <Button
          className="inline-flex gap-2 items-center"
          onClick={toggleDropdown}
        >
          Dropdown <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuGroup>
          <DropdownMenuItem closeDropdown={closeDropdown}>
            <Link href="#">Option 1</Link>
          </DropdownMenuItem>
          <DropdownMenuItem closeDropdown={closeDropdown}>
            <Link href="#">Option 2</Link>
          </DropdownMenuItem>
          <DropdownMenuItem closeDropdown={closeDropdown}>
            <Link href="#">Option 3</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      )}
    </Dialog>
  )
}`
  },
  {
    name: "form",
    desc: "A container for collecting user input, such as text, numbers, or selections.",
    link: "form",
    preview: <Form />,
    props: [],
    propsDesc: [],
    propTypes: [],
    code: `"use client"

import React from "react"
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "./button";
import Label from "./label";
import Input from "./input";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {

  // The schema can be edited to add more fields or change the validation rules.
  const schema = z.object({
    name: z.string().min(2, "Name is required").regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(5, "Message must be at least 10 characters long"),
  })

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    // Form submission logic
  }

  return (
    // Below is a simple contact form with name, email, and message fields.
    <div className="w-full max-w-md mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:py-6 my-10 space-y-4 bg-primary text-background border border-muted-foreground/30 rounded-lg overflow-hidden">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-600">Get in Touch</h2>
        <p className="mt-2 text-sm">
          Have a question or want to work together? Fill out the form below and We&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name" className="block text-sm font-medium">
            Name
          </Label>
          <div className="mt-1">
            <Input
              // {...register('name')}  --> This is the react-hook-form way of registering the input field. Uncomment this line while using the form.
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={\`block w-full px-3 py-2 bg-primary \${errors.name ? "border-red-500" : ""}\`}
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{String(errors.name.message)}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="block text-sm font-medium">
            Email
          </Label>
          <div className="mt-1">
            <Input
              // {...register('email')}  --> This is the react-hook-form way of registering the input field. Uncomment this line while using the form.
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              className={\`block w-full px-3 py-2 bg-primary \${errors.email ? "border-red-500" : ""}\`}
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{String(errors.email.message)}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="message" className="block text-sm font-medium">
            Message
          </Label>
          <div className="mt-1">
            <textarea
              // {...register('message')}  --> This is the react-hook-form way of registering the input field. Uncomment this line while using the form.
              id="message"
              name="message"
              rows={4}
              placeholder="Your message"
              className={\`block w-full rounded-lg p-2 bg-primary border-muted-foreground/30 focus:border-none focus:outline-none \${errors.message ? "border-red-500" : ""}\`}
            />
            {errors.message && <p className="mt-2 text-sm text-red-500">{String(errors.message.message)}</p>}
          </div>
        </div>
        <div>
          <Button type="submit" variant="primary" className="w-full rounded-xl">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form`,
  },
  {
    name: "hover card",
    desc: "A card that reveals additional content when hovered over.",
    link: "hover-card",
    preview: <HoverCard />,
    props: [],
    propsDesc: [],
    propTypes: [],
    code: `import React from 'react'

const HoverCard = () => {
    return (
        // You can replace the style of this component with your own custom Tailwind CSS.
        <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-semibold bg-blue-500">
            <div className="z-10 absolute w-full h-full peer"/>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-400 transition-all duration-500"
            />
            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-blue-400 transition-all duration-500">
                Namaste World!
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
                hover me
            </div>
        </div>

    )
}

export default HoverCard`
  },
  {
    name: "input",
    desc: "Allows the user to enter and edit text, numbers, or other data.",
    link: "input",
    preview: <InputDemo />,
    props: ['className', 'type', 'placeholder'],
    propsDesc: ['Additional class name(s) for the input.', 'The type of input.', 'The placeholder text for the input.'],
    propTypes: ['string', 'string', 'string'],
    code: `import React from 'react'
import { cn } from '@/lib/utils'

const Input = ({className, ...props} : React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} className={cn('rounded-lg p-2 bg-background border-muted-foreground/30 focus:border-none focus:outline-none', className)} />
  )
}

/*  Below is just an example. */
export const InputDemo = () => {
  return (
    <Input placeholder='Email' type='email' className='w-72 text-sm' />
  )
}

export default Input`
  },
  {
    name: "label",
    desc: "Provides a descriptive text label for an input or other UI element.",
    link: "label",
    preview: <LabelDemo />,
    props: ['className', 'htmlFor'],
    propsDesc: ['Additional class name(s) for the label.', 'The ID of the input element that the label is associated with.'],
    propTypes: ['string', 'string'],
    code: `import React from 'react'
import CheckBox from './checkbox'
import { cn } from '@/lib/utils'

const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label {...props} className={cn('text-base',className)}>
      {children}
    </label>
  )
}

/*  Below is just an example. */
export const LabelDemo = () => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <CheckBox className='size-4 rounded' id='newsletter' />
      <Label htmlFor='newsletter'>
        Do you wish to receive our newsletter?
      </Label>
    </div>
  )
}

export default Label`
  },
  {
    name: "menubar",
    desc: "A horizontal menu bar that provides access to various commands or actions.",
    link: "menubar",
    preview: <Menubar />,
    props: [],
    propsDesc: [],
    propTypes: [],
    code: `import React from 'react'
import { Home, MessageCircle, Settings, User } from 'lucide-react'

const Menubar = () => {
  return (
    <div className="border border-muted-foreground/50 py-2 flex gap-1 rounded-lg">
      <div className="group relative px-3 cursor-pointer">
        <Home className='size-8 hover:text-blue-500' />
      </div>
      <div className="group relative px-3 cursor-pointer">
        <MessageCircle className='size-8 hover:text-blue-500' />
      </div>
      <div className="group relative px-3 cursor-pointer">
        <User className='size-8 hover:text-blue-500' />
      </div>
      <div className="group relative px-3 cursor-pointer">
        <Settings className='size-8 hover:text-blue-500' />
      </div>
    </div>
  )
}

export default Menubar`
  },
  {
    name: "preloader",
    desc: "A visual indicator that shows the progress of a task or operation.",
    link: "preloader",
    preview: <Preloader />,
    props: [],
    propsDesc: [],
    propTypes: [],
    code: `import React from 'react'

const Preloader = () => {
    return (
        <div className="flex flex-row gap-2 h-[90dvh] w-full xl:w-1/2 items-center justify-center">
            <div className="size-4 rounded-full bg-muted-foreground animate-bounce [animation-delay:.5s]"/>
            <div className="size-4 rounded-full bg-muted-foreground animate-bounce [animation-delay:.2s]"/>
            <div className="size-4 rounded-full bg-muted-foreground animate-bounce [animation-delay:.5s]"/>
        </div>
    )
}

export default Preloader`
  },
  {
    name: "progress",
    desc: "Displays the current progress of a task or operation, often as a visual bar or circular indicator.",
    link: "progress",
    preview: <Progress />,
    props: ['value', 'progressClassName', 'className'],
    propsDesc: ['The current progress value.', 'Additional class name(s) for the progress bar.', 'Additional class name(s) for the progress container.'],
    propTypes: ['number', 'string', 'string'],
    code: `import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  progressClassName?: string;
}

const Progress = ({ value = 60, progressClassName, className, ...props }: ProgressProps) => {
  return (
    <div className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}>
      <div {...props} className={cn("h-full w-full flex-1 bg-primary transition-all", progressClassName)}
        style={{ transform: \`translateX(-\${100 - (value || 0)}%)\`}} />
    </div>
  )
}

export default Progress`
  },
  {
    name: "separator",
    desc: "A visual divider that separates and groups related content or UI elements.",
    link: "separator",
    preview: <SeparatorDemo />,
    props: ['className'],
    propsDesc: ['Additional class name(s) for the separator.'],
    propTypes: ['string'],
    code: `import { cn } from '@/lib/utils'
import React from 'react'

const Separator = ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return (
    <hr {...props} className={cn('border border-muted-foreground/30 my-2 h-px rounded w-full', className)} />
  )
}
export default Separator`
  },
  {
    name: "slider",
    desc: "Allows the user to select a value from a range by dragging a handle along a track.",
    link: "slider",
    preview: <Slider />,
    props: ['min', 'max', 'step', 'value', 'onChange', 'className', 'valueClassName'],
    propsDesc: ['The minimum value of the slider.', 'The maximum value of the slider.', 'The step value of the slider.', 'The current value of the slider.', 'Function that is called when the value changes.', 'Additional class name(s) for the slider.', 'Additional class name(s) for the value.'],
    propTypes: ['number', 'number', 'number', 'number', 'function', 'string', 'string'],
    code: `"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  valueClassName?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onChange = () => { console.log('Slider value:', value); },
  className,
  valueClassName,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        className={cn("w-full h-2 bg-muted-foreground accent-accent-foreground rounded-full appearance-none cursor-pointer", className)}
      />
      <span className={cn("flex justify-center w-full text-sm text-muted-foreground mt-2", valueClassName)}>
        {currentValue}
      </span>
    </div>
  );
};

export default Slider;`
  },
  {
    name: "textarea",
    desc: "Allows the user to enter and edit multi-line text, often used for longer form inputs.",
    link: "textarea",
    preview: <TextArea placeholder='Type here...' />,
    props: ['className', 'placeholder'],
    propsDesc: ['Additional class name(s) for the textarea.', 'The placeholder text for the textarea.'],
    propTypes: ['string', 'string'],
    code: `import React from 'react'
import { cn } from '@/lib/utils'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const TextArea = ({className, ...props} : TextAreaProps) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-muted-foreground/30 bg-background/90 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export default TextArea`
  }
];


export default Components;