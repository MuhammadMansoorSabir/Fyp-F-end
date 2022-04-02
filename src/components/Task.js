import React from 'react'
import Tasks from './Tasks'


export const Task = ({ tasks }) => {

    return (
        <>
            {tasks.map((task) => (<Tasks key={task.id} task={task} />))}
        </>
    )
}
