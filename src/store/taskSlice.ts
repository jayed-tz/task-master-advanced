import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import ITask from "../models/iTask";

interface TaskState {
    tasks: ITask[]
}

const initialState: TaskState = {tasks: []};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<string>) {
            const newTask: ITask = {
                id: new Date().toISOString(),
                title: action.payload
            };
            state.tasks.push(newTask);
        },
        removeTask(state) {}
    }
});

export const taskActions = taskSlice.actions;
export const selectTasks = (state: RootState) => state.task.tasks
export const taskReducer = taskSlice.reducer