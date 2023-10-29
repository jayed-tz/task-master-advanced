import {useParams} from "react-router-dom";

const TaskDetailPage: React.FC = (props) => {
    const params = useParams();
    return <>
        <h2>{params.id}</h2>
    </>
}

export default TaskDetailPage;