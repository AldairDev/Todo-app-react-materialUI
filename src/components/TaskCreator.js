import React, { useState } from 'react'
import { TableRow, TableCell, Grid, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    creator: {
        display: "flex",
        justifyContent: 'start',
        alignItems: 'center'
    }
})

export const TaskCreator = ({ task, setTask }) => {

    const classes = useStyles()

    const [newTask, setNewTask] = useState({ name: '' })

    const AddTask = () => {
        // if (newTask.name === '') alert('ingrese una tarea')
        if (!task.find(t => t.name === newTask.name)) {
            setTask([...task, newTask])
            setNewTask({ name: '' })
        }
        else alert('tarea ya existe');
    }

    const handleKeyPress = e => e.key === "Enter" ? AddTask() : ""

    const handleChangeInput = e => {
        const { value } = e.target
        setNewTask(
            {
                name: value,
                done: false
            }
        )
    }

    return (
        <>
            <TableRow >
                <TableCell size="small" colSpan={2}>
                    <Grid container >
                        <Grid item xs={12} sm={2} className={classes.creator} >
                            <Button variant="contained" color="secondary" onClick={AddTask} >
                                add
                            </Button >
                        </Grid>
                        <Grid item xs={12} sm={10} >
                            <TextField
                                label="task"
                                placeholder="Task"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                onChange={handleChangeInput}
                                onKeyPress={handleKeyPress}
                                value={newTask.name}
                                required
                            />
                        </Grid>
                    </Grid>
                </TableCell>
            </TableRow>
        </>
    )
}
