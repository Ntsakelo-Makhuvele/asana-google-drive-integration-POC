import * as React from 'react'
import {useSortable} from '@dnd-kit/react/sortable'

interface Props{
    id: number
    children: React.ReactNode[]
    column: string
    index: number
}

export const Draggable = (props:Props) => {
    const {ref, isDragging} = useSortable({
        id: props.id,
        index: props.index,
        type:'item',
        accept:'item',
        group:props.column
    })
    return (
        <div className={props.index.toString()} ref={ref} data-dragging={isDragging}>
            {...props.children}
        </div>
    )
}