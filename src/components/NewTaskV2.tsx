import {useRef} from "react";
import React from 'react'
import TaskV2 from "../models/taskv2";
const NewTaskV2: React.FC<{onAddTask: (task: TaskV2) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // indicate error
            return;
        }

        props.onAddTask({id: new Date().toISOString(), title: 'Todo task'});
        todoTextInputRef.current!.value = '';
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Title</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Submit</button>
    </form>
}

export default NewTaskV2;