import {useRef} from "react";
import React from 'react'
const NewTask: React.FC<{onAddTask: (text: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // indicate error
            return;
        }

        props.onAddTask(enteredText);
        todoTextInputRef.current!.value = '';
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Title</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Submit</button>
    </form>
}

export default NewTask;