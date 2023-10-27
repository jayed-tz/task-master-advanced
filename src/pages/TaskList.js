import {Link} from "react-router-dom";

const TaskListPage = () => {
    const tasks = [
        {
            id: 1,
            title: 'Task A'
        },
        {
            id: 2,
            title: 'Task B'
        }
    ];

    return <>
        <h2>task list</h2>
        <ul>
            {tasks.map(task =>  <li key={task.id}>
                    <Link to={`/task-list/${task.id}`}> {task.title}</Link>
                </li>
            )}
        </ul>
    </>
}

export default TaskListPage;