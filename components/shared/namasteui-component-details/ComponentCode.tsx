"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/components/ui/use-toast"
import { Check, ClipboardIcon } from "lucide-react"
import React, { useState } from "react"
import CodeText from "./CodeText"
import { ComponentProps } from "./ComponentIntro"

export default function ComponentCode({ componentName }: ComponentProps) {
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = () => {
        const codeElement = document.getElementById("code");
        if (codeElement) {
            const codeContent = codeElement.textContent?.slice(1).split('$').pop();
            navigator.clipboard.writeText(codeContent as string);
            setIsCopy(true);
            toast({
                description: "Copied to clipboard",
            });
            setTimeout(() => {
                setIsCopy(false);
            }, 1000);
        }
    }

    return (
        <div className="text-white px-6 pt-2 pb-4 border border-muted-foreground/30 rounded-lg w-full relative">
            <div className="flex justify-between items-center">
                {/* <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div> */}
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    onClick={handleCopy}
                    className="hover:bg-secondary text-foreground bg-gray-500/15 rounded-lg absolute top-7 right-10 z-10">
                    <ClipboardIcon className={`${isCopy ? 'hidden' : 'size-3'}`} />
                    <Check className={`${isCopy ? 'size-3' : 'hidden'}`} />
                </Button>
            </div>
            <div className="mt-4">
                <ScrollArea className="h-[50dvh] lg:h-[40dvh] text-sm" id="code">
                    <CodeText componentName={componentName} />
                </ScrollArea>
            </div>
        </div>
    )
}