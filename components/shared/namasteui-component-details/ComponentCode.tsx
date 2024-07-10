"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import React from "react"
import CodeText from "./CodeText"
import { ComponentProps } from "./ComponentIntro"
import ClipboardCopyBtn from "../ClipboardCopyBtn"

export default function ComponentCode({ componentName }: ComponentProps) {


    return (
        <div className="flex justify-between bg-black95 dark:bg-black100 items-center px-6 pt-2 pb-4 border border-muted-foreground/30 rounded-lg w-full lg:w-11/12 relative">
            <ClipboardCopyBtn id="code" />
            <div className="py-2">
                <ScrollArea className="h-[50dvh] lg:h-[40dvh] text-sm sm:text-base lg:pr-5" id="code">
                    <CodeText componentName={componentName} />
                </ScrollArea>
            </div>
        </div>
    )
}