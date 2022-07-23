import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import { useContext, useState } from 'react';
import { ToDoContext } from '../../contexts/ToDoContext';
import './ToDoItem.css'
import '../ToDo.css';
import { EditTaks } from '../EditTask';


export const ToDoItem = ({task}) => {
    const [isEdit, setIsEdit] = useState(false);

    const onClickHandler = () => {
        setIsEdit(true);
    }

    const { toggleTodoHandler, removeHandler } = useContext(ToDoContext);

    const classNames = [
        task.isCompleted ? 'completed' : '',
        'task-item'
    ];

    return (
        <li>
            {isEdit
                ?
                    <EditTaks task={task} setIsEdit={setIsEdit} />
                :
                    <>
                    <span
                        className={classNames.join(' ')}
                        onClick={() => toggleTodoHandler(task)}
                        >
                        {task.isCompleted ? <span><FontAwesomeIcon icon={faCheck} /> </span> : ''}
                        {task.title}
                        </span>
                        <span onClick={() => removeHandler(task._id)} className='close'><FontAwesomeIcon icon={faTrashCan} /></span>
                        <span onClick={onClickHandler} className='edit'><FontAwesomeIcon icon={faPen} /></span>
                    </>
                }
        </li>
    );
}


