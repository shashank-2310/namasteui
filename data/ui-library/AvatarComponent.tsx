import React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type AvatarProps = {
    url?: string | StaticImport;
    className?: string;
    imageClassName?: string;
}

const AvatarComponent = ({
    url = "https://avatars.githubusercontent.com/u/124599?v=4",
    className,
    imageClassName,

}: AvatarProps) => {

    return (
        <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>
            <Image
                src={url}
                alt="Avatar"
                fill
                className={cn("aspect-square h-full w-full", imageClassName)}
            />
        </div>
    )
}

export default AvatarComponent;
