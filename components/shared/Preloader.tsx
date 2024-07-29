import React from 'react'

const Preloader = () => {
    return (
        <div className="flex flex-row gap-2 h-[90dvh] w-full xl:w-1/2 items-center justify-center">
            <div className="size-3 sm:size-4 rounded-full bg-muted-foreground animate-bounce [animation-delay:.5s]"/>
            <div className="size-3 sm:size-4 rounded-full bg-muted-foreground animate-bounce [animation-delay:.2s]"/>
            <div className="size-3 sm:size-4 rounded-full bg-muted-foreground animate-bounce [animation-delay:.5s]"/>
        </div>
    )
}

export default Preloader