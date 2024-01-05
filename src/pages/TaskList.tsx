import {Link} from "react-router-dom";
import NewTask from "../components/NewTask";
import {useEffect, useState} from "react";

import { useAppSelector, useAppDispatch } from '../hooks'
import {addTask, fetchTaskData, removeTask} from "../store/taskSlice";
import {getTaskState} from "../store/selectors";

const TaskListPage = () => {
    const {tasks} = useAppSelector(getTaskState)
    const dispatch = useAppDispatch()
    const removeTaskHandler = (id: string) => {
       dispatch(removeTask(id));
    }
    const addTaskHandler = (title: string) => {
        dispatch(addTask(title))
    }

    useEffect(() => {
        dispatch(fetchTaskData())
    }, []);

    return <>
        <h2>task list</h2>
        <ul>
            {tasks.map(task =>  <li key={task.id}>
                    <Link to={task.id}> {task.title}</Link>
                <button onClick={() => removeTaskHandler(task.id)}>Delete</button>
                </li>
            )}
        </ul>
        <NewTask onAddTask={addTaskHandler} />
    </>
}

export default TaskListPage;