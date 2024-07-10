"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ComponentProps } from './ComponentIntro';
import { Components } from './ComponentPreviewAndCodeList';

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