import React from 'react'
import {useParams} from "react-router-dom";
import Tag from "../components/Tag";

const TaskDetailPage: React.FC = (props) => {
    const params = useParams();

    return <>
        <h2>ID: {params.id}</h2>
        <Tag tag={`${params.id}`}></Tag>
    </>
}

export default TaskDetailPage;