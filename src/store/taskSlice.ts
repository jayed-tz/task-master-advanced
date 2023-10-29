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
            state.tasks.push({
                id: new Date().toISOString(),
                title: action.payload
            });
        },
        removeTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
});

export const taskActions = taskSlice.actions;
export const taskReducer = taskSlice.reducer