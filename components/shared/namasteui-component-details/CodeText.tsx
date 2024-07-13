"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ComponentProps } from './ComponentIntro';
import Components from '@/data/ComponentList';

const CodeText = ({ componentName }: ComponentProps) => {
    const theme = useTheme();
    const bg = theme.theme === 'dark' ? '#0c0c0c' : '#181818';

    const codeString = Components.find((item) => item.name === componentName)?.code || "There's some error. Please try again later.";


    return (
        <SyntaxHighlighter
            language="typescript"
            style={atomOneDarkReasonable}
            customStyle={{ backgroundColor: bg }}
            wrapLines
            wrapLongLines
        >
            {codeString}
        </SyntaxHighlighter>
    )
}

export default CodeText