import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow'
import { TaskCreator } from './components/TaskCreator'
import { Table, TableHead, TableBody, TableCell, TableRow, Typography, Checkbox } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'


export const App = () => {

  const [user, setUser] = useState('Aldair');
  const [task, setTask] = useState([])

  const [showtaskDone, setShowtaskDone] = useState(false)

  const handleChangeTask = (taskItem) => {

    setTask(task.map(t =>
      t.name === taskItem.name ?
        {
          ...t,
          done: !t.done
        } :
        t))

  }
  console.log(task);
  
  const tableDataRow = (taskValue) => {

    return (
      task
        .filter(t => t.done === taskValue)
        .map((task, index) =>
          <TaskRow
            task={task}
            key={index}
            handleChangeTask={handleChangeTask}
          />
        )
    )
  }

  useEffect(() => {

    let data = localStorage.getItem('TASK');
    let check = localStorage.getItem('CHECK');
    
    setShowtaskDone(JSON.parse(check))

    if (data != null) {
      setTask(JSON.parse(data))
    } 
    else {
      setTask([
        { name: 'task1', done: true },
        { name: 'task2', done: false },
        { name: 'task3', done: true }
      ])
      setUser('Aldair')
      // setShowtaskDone(true)
    }

  }, [])

  useEffect(() => {

    localStorage.setItem('TASK', JSON.stringify(task) )
    localStorage.setItem('CHECK', JSON.stringify(showtaskDone))
    // localStorage.setItem('USER', (user))

  },[task, showtaskDone])

  return (

    <Container maxWidth="md">
      <Box padding={10} maxWidth="xs">
        <Paper>
          <Box bgcolor="info.main" p={2} color="primary.contrastText" marginBottom={1} style={{ minHeight: '30px' }} >
            <Typography variant="h6" align="left">
              {`${user}'s Task -- (${(task.filter(tasks => tasks.done === false).length)} task to do)`}
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TaskCreator task={task} setTask={setTask} />
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Done</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableDataRow(false)}
              <TableRow>
                <TableCell colSpan={2}>
                  <Box paddingTop={1} display="flex" justifyContent="center" alignItems="center" >
                    <Checkbox color="default" checked={showtaskDone} onChange={() => setShowtaskDone(!showtaskDone)} />
                    <Typography variant="button"> Show complete task </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              {showtaskDone && (
                tableDataRow(true)
              )}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container >
  );
}
