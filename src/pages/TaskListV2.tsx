import {useState} from "react";
import TaskV2 from "../models/taskv2";
import NewTaskV2 from "../components/NewTaskV2";

const TaskListPageV2 = () => {
    const [taskList, setTaskList] = useState<TaskV2[]>([]);
    const addTaskHandler = (task: TaskV2) => {
        setTaskList([...taskList, task])
    }

    return <>
        <ul>
            {taskList.map(t =>
                <li key={t.id}>{t.title}</li>
            )}
        </ul>
        <NewTaskV2 onAddTask={addTaskHandler} />
    </>
}

export default TaskListPageV2;