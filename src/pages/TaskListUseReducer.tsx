import {useState} from "react";
import TaskUseState from "../models/taskUseState";
import NewTaskUseState from "../components/NewTaskUseState";

const TaskListPageUseReducer = () => {
    const [taskList, setTaskList] = useState<TaskUseState[]>([]);
    const addTaskHandler = (task: TaskUseState) => {
        setTaskList([...taskList, task])
    }

    return <>
        <ul>
            {taskList.map(t =>
                <li key={t.id}>{t.title}</li>
            )}
        </ul>
        <NewTaskUseState onAddTask={addTaskHandler} />
    </>
}

export default TaskListPageUseReducer;