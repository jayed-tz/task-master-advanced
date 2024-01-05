import Task from "../task";

type OptionalTask = {
    [K in keyof Task]?: Task[K]
}

export default OptionalTask;

type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, Exclude<keyof Todo, 'description'>>;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};