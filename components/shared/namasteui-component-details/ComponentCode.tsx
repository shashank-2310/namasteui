"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import React from "react"
import ClipboardCopyBtn from "../ClipboardCopyBtn"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ComponentProps } from './ComponentIntro';
import Components from '@/data/ComponentList';

export default function ComponentCode({ componentName }: ComponentProps) {

    return (
        <div className="flex justify-between bg-grey50 items-center px-6 pt-2 pb-4 border border-muted-foreground/30 rounded-lg w-full relative">
            <ClipboardCopyBtn id="code" />
            <div className="py-2">
                <ScrollArea className={`text-base ${componentName === 'preloader' || componentName === 'separator' ? 'h-[50dvh] sm:h-[40dvh]' : 'h-[50dvh]'}`} id="code">
                    <CodeBlock componentName={componentName} />
                </ScrollArea>
            </div>
        </div>
    )
}

export const CodeBlock = ({ componentName }: ComponentProps) => {

    const codeString = Components.find((item) => item.name === componentName)?.code || "There's some error. Please try again later.";

    return (
        <SyntaxHighlighter
            language="tsx"
            style={vscDarkPlus}
            wrapLines
            wrapLongLines
        >
            {codeString}
        </SyntaxHighlighter>
    );
}