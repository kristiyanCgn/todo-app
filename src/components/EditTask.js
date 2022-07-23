import { useState, useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";


export const EditTaks = ({task, setIsEdit}) => {
    
    const [title, setTitle] = useState(task.title);
    const { editHandler } = useContext(ToDoContext);


    const onChange =(e) => {
        setTitle(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        editHandler(task, title)
        setIsEdit(false);
    };

    return (
        <form className="footer" onSubmit={onSubmit}>
            <input
                type="text"
                name="newTitle"
                value={title}
                onChange={onChange}
            />

            <input className="addBtn" type="submit" value="Edit" />
        </form>
    );
}
