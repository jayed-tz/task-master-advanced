import {Link} from "react-router-dom";
import NewTask from "../components/NewTask";
import {useState} from "react";

import { useAppSelector, useAppDispatch } from '../hooks'
import {taskActions} from "../store/taskSlice";
import {selectTasks} from "../store/taskSelectors";

const TaskListPage = () => {
    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()
    const removeTaskHandler = (id: string) => {
       dispatch(taskActions.removeTask(id));
    }
    const addTaskHandler = (title: string) => {
        dispatch(taskActions.addTask(title))
    }

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