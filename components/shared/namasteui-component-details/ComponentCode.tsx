"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Check, ClipboardIcon } from "lucide-react"
import React, { useEffect, useState } from "react"

export default function ComponentCode() {
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = () => {
        toast({
            description: "Copied to clipboard",
        }),
            navigator.clipboard.writeText("content"),
            setIsCopy(true),
            setTimeout(() => {
                setIsCopy(false);
            }, 1000);
    }


    return (
        <aside className="text-white py-4 px-6 border border-muted-foreground/30 rounded-lg w-full max-w-lg font-mono">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    onClick={handleCopy}
                    className="hover:bg-secondary rounded-lg">
                    <ClipboardIcon className={`${isCopy ? 'hidden' : 'size-3'}`} />
                    <Check className={`${isCopy ? 'size-3' : 'hidden'}`} />
                </Button>
            </div>
            <div className="mt-4">
                <p className="text-green-400">$ npm install next</p>
                <pre>
                    <code>
                        {/* {accordionCode} */}
                    </code>
                </pre>
            </div>
        </aside>
    )
}