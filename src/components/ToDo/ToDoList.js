import '../ToDo.css';
import { ToDoItem } from './ToDoItem';

export const ToDoList = ({tasks}) => {
    return (
        <ul id='myUL'>
            {tasks.map(x => <ToDoItem key={x._id} task={x} />)}
        </ul>
    );
}