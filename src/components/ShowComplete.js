import React from 'react'
import { Checkbox, Typography, Paper, Box, TableRow, TableCell } from '@material-ui/core'

const ShowComplete = ({ taskD }) => {

    return (

        <TableRow>
            <TableCell>
                {taskD.name}
            </TableCell>
            <TableCell>
                <Checkbox checked={taskD.done} />  
            </TableCell>
        </TableRow>
    )
}

export default ShowComplete
