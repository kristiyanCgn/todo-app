import { useState } from "react";

const CreateTask = ({createNewTodo}) => {
    const [task, setTask] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(task.length > 1) {
            createNewTodo(task)
            setTask('');
        }
    }

    const onChange = (e) => {
            setTask(e.target.value);        
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="taskName"
                value={task}
                onChange={onChange}
                placeholder="Title..."
            />

            <input className="addBtn" type="submit" value="Add" />
        </form>
    );
};

export default CreateTask;