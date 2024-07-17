import React from 'react'
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

export default CheckBox