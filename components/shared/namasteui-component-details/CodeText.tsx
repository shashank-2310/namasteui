"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable, githubGist} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ComponentProps } from './ComponentIntro';
import { Components } from './ComponentPreviewAndCodeList';

const CodeText = ({ componentName }: ComponentProps) => {
    const theme = useTheme();
    const bg = theme.theme === 'dark' ? '#0c0c0c' : '#ffffff';
    const style = theme.theme === 'dark' ? atomOneDarkReasonable : githubGist;
    const codeString = Components.find((item) => item.name === componentName)?.code || "There's some error. Please try again later.";

    return (
        <SyntaxHighlighter language="typescript" style={style} customStyle={{backgroundColor: bg}}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export default CodeText