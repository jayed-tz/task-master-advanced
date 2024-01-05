import TagV2 from "./tagv2";

type TaskV2 = {
    id: string;
    title: string;
    tags?: TagV2[]
}

export default TaskV2;