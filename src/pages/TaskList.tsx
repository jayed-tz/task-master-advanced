import {Link} from "react-router-dom";
import NewTask from "../components/NewTask";
import {useState} from "react";

import { useAppSelector, useAppDispatch } from '../hooks'
import {taskActions} from "../store/taskSlice";
import ITask from "../models/iTask";

const TaskListPage = () => {
    console.log('being executed');
    const tasks = useAppSelector((state) => state.task.tasks)
    const dispatch = useAppDispatch()
    const deleteTaskHandler = (id: string) => {
       // setTasks((prevState) => prevState.filter(task => task.id !== id));
    }
    const addTaskHandler = (title: string) => {
        dispatch(taskActions.addTask(title))
        // console.log(title);
        // const newTask: ITask = {
        //     id: new Date().toISOString(),
        //     title: title
        // };
        //setTasks((prevState) => prevState.concat(newTask));
    }

    //const [tasks, setTasks] = useState<Task[]>([]);

    return <>
        <h2>task list</h2>
        <ul>
            {tasks.map(task =>  <li key={task.id}>
                    <Link to={task.id}> {task.title}</Link>
                <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
                </li>
            )}
        </ul>
        <NewTask onAddTask={addTaskHandler} />
    </>
}

export default TaskListPage;