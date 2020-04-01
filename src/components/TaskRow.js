import React from 'react'
import { Checkbox } from '@material-ui/core'
import { TableCell, TableRow } from '@material-ui/core'

export const TaskRow = ({ task, handleChangeTask }) => {

    const { name, done } = task

    return (

        <TableRow >
            <TableCell >{name}</TableCell>
            <TableCell >
                <Checkbox
                    checked={done}
                    onChange={() => handleChangeTask(task)}
                />
            </TableCell>
        </TableRow>

    )
}

