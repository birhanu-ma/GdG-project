import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from './todoSlice';


const TodoItem = ({ id, title, completed }) => {

    const dispatch = useDispatch();

    function handleCheckedClicked(){
        dispatch(toggleCompleted({id:id, completed:!completed}));
    };

    function handleDelete(){
        dispatch(deleteTodo({id:id}));
    };
	return (
	<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
        <span className='todo-list'>
            <div>
                <input 
                type='checkbox' 
                checked={completed}
                onChange={handleCheckedClicked}
                ></input>
                {title}
            </div>
            <button className='danger'
            onClick={handleDelete}
            >Delete</button>
        </span>
    </li>
	);
};

export default TodoItem;