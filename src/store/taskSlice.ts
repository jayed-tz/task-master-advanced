import Task from "../models/task";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {tasks: []};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<string>) {
            state.tasks.push(new Task(action.payload));
        },
        removeTask(state) {}
    }
});

export const taskActions = taskSlice.actions;
export const selectTasks = (state: RootState) => state.task.tasks
export const taskReducer = taskSlice.reducer