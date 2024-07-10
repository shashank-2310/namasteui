import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccordionComponent from '@/ui library/AccordionComponent'
import ComponentCode from './ComponentCode'


const ComponentPreviewAndCode = () => {

    return (
        <Tabs defaultValue="preview" className="w-full lg:w-3/4 text-sm sm:text-base">
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
                <div className="border border-muted-foreground/30 rounded-lg px-10 sm:px-20 lg:px-28 w-full lg:w-4/5 flex items-center justify-center min-h-80">
                    <AccordionComponent />
                </div>
            </TabsContent>
            <TabsContent value="code">
                <ComponentCode />
            </TabsContent>
        </Tabs>

    )
}

export default ComponentPreviewAndCode