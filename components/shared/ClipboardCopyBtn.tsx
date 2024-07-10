"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { toast } from "@/components/ui/use-toast"
import { Check, ClipboardIcon } from "lucide-react"

function cleanText(text: string): string {
    const regex = /import React/;
    const importReactPosition = text.search(regex);
    if (importReactPosition !== -1) {
        return text.slice(importReactPosition);
    }
    return text;
}

const ClipboardCopyBtn = ({ id }: { id: string }) => {
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = () => {
        const codeElement = document.getElementById(id);
        if (codeElement) {
            const codeContent = cleanText(codeElement.textContent as string);
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
        <Button
            variant={"ghost"}
            size={"icon"}
            onClick={handleCopy}
            className="hover:bg-secondary text-white90 bg-gray-500/15 rounded-lg absolute top-3 right-4 z-10">
            <ClipboardIcon className={`${isCopy ? 'hidden' : 'size-3'}`} />
            <Check className={`${isCopy ? 'size-3' : 'hidden'}`} />
        </Button>
    )
}

export default ClipboardCopyBtn;