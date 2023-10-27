import {useParams} from "react-router-dom";

const TaskDetailPage = (props) => {
    const params = useParams();
    return <>
        <h2>{params.id}</h2>
    </>
}

export default TaskDetailPage;