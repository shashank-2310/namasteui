import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ComponentProps } from './ComponentIntro'
import Components from '@/data/ComponentList'


const PropsGrid = ({ componentName }: ComponentProps) => {

    return (
        <div className='flex flex-col gap-3 w-full lg:w-11/12' id='props'>
            <h1 className='font-semibold text-base sm:text-lg lg:text-xl'>Props</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="border border-foreground/30 text-primary font-medium">Props</TableHead>
                        <TableHead className='border border-foreground/30 text-primary font-medium'>Type</TableHead>
                        <TableHead className="border border-foreground/30 text-primary font-medium">Description</TableHead>
                    </TableRow>
                </TableHeader>
                {Components.map((item) => {
                    if (item.name === componentName) {
                        return (
                            <TableBody key={item.name}>
                                {item.props.map((prop, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell className='border border-foreground/30 text-muted-foreground'>{prop}</TableCell>
                                        <TableCell className='border border-foreground/30 text-muted-foreground'>{item.propTypes[idx]}</TableCell>
                                        <TableCell className='border border-foreground/30 text-muted-foreground'>{item.propsDesc[idx]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        );
                    }
                    return null;
                })}
            </Table>
        </div>
    )
}

export default PropsGrid