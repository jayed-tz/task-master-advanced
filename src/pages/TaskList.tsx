import {Link} from "react-router-dom";
import NewTask from "../components/NewTask";
import {useState} from "react";
import Task from "../models/task";

const TaskListPage = () => {
    const addTaskHandler = (title: string) => {
        console.log(title);
        const newTask = new Task(title);
        setTasks((prevState) => prevState.concat(newTask));
    }

    const [tasks, setTasks] = useState<Task[]>([]);

    return <>
        <h2>task list</h2>
        <ul>
            {tasks.map(task =>  <li key={task.id}>
                    <Link to={task.id}> {task.title}</Link>
                </li>
            )}
        </ul>
        <NewTask onAddTask={addTaskHandler} />
    </>
}

export default TaskListPage;